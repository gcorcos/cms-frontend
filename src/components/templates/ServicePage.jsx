import { CheckCircle } from 'lucide-react';

const ServicePage = ({ content }) => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {content.title || 'Our Service'}
          </h1>
          {content.subtitle && (
            <p className="text-xl text-gray-600">{content.subtitle}</p>
          )}
        </div>
      </section>

      {/* Description */}
      {content.description && (
        <section className="py-16">
          <div className="container max-w-4xl">
            <div
              className="prose prose-lg"
              dangerouslySetInnerHTML={{ __html: content.description }}
            />
          </div>
        </section>
      )}

      {/* Benefits */}
      {content.benefits && content.benefits.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Sections */}
      {content.content_sections && content.content_sections.length > 0 && (
        <section className="py-16">
          <div className="container">
            {content.content_sections.map((section, index) => (
              <div key={index} className={`mb-16 ${index % 2 === 0 ? '' : 'bg-gray-50 -mx-4 px-4 py-12'}`}>
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: section.body }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ServicePage;
