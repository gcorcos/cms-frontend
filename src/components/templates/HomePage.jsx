import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HomePage = ({ content }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {content.hero_title || 'Welcome to ELIS'}
            </h1>
            {content.hero_subtitle && (
              <p className="text-xl text-gray-600 mb-8">{content.hero_subtitle}</p>
            )}
            {content.hero_cta_text && (
              <Link
                to={content.hero_cta_link || '/contact'}
                className="btn btn-primary inline-flex items-center space-x-2"
              >
                <span>{content.hero_cta_text}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {content.features && content.features.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">{feature.icon || '✨'}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {content.cta_title && (
        <section className="bg-primary-600 text-white py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">{content.cta_title}</h2>
            {content.cta_text && (
              <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100">
                {content.cta_text}
              </Link>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;
