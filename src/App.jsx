import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { contentService } from './services/api';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import DynamicPage from './pages/DynamicPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000 // 5 minutes
    }
  }
});

const Layout = ({ children }) => {
  const { data: navigation = [] } = useQuery({
    queryKey: ['navigation'],
    queryFn: () => contentService.getNavigation('main')
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header navigation={navigation} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<DynamicPage />} />
              <Route path="/:slug" element={<DynamicPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
