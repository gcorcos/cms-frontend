import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { contentService } from '../services/api';
import { getTemplate } from '../utils/templateMapper';
import { Helmet } from 'react-helmet-async';

const DynamicPage = () => {
  const { slug } = useParams();

  const { data: page, isLoading, error } = useQuery({
    queryKey: ['page', slug],
    queryFn: () => slug ? contentService.getPageBySlug(slug) : contentService.getHomepage(),
    retry: 1
  });

  if (isLoading) {
    return (
      <div className="container py-20">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <a href="/" className="btn btn-primary">
            Go Home
          </a>
        </div>
      </div>
    );
  }

  if (!page) {
    return null;
  }

  // Get the appropriate template component
  const TemplateComponent = getTemplate(page.template?.name || 'generic');

  return (
    <>
      <Helmet>
        <title>{page.meta_title || page.title}</title>
        {page.meta_description && (
          <meta name="description" content={page.meta_description} />
        )}
        {page.meta_keywords && (
          <meta name="keywords" content={page.meta_keywords} />
        )}
      </Helmet>

      <TemplateComponent content={page.content} metadata={page} />
    </>
  );
};

export default DynamicPage;
