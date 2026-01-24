import { Helmet } from 'react-helmet-async';

const ElisServiceLandingPage = ({ content, metadata }) => {
  return (
    <>
      <Helmet>
        <title>{metadata.meta_title || metadata.title}</title>
        {metadata.meta_description && <meta name="description" content={metadata.meta_description} />}
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">{content.hero_title}</h1>
              {content.hero_subtitle && (
                <p className="text-2xl mb-6 text-blue-100">{content.hero_subtitle}</p>
              )}
              {content.hero_description && (
                <div
                  className="text-lg mb-8 text-blue-50"
                  dangerouslySetInnerHTML={{ __html: content.hero_description }}
                />
              )}
              {content.hero_cta_text && (
                <a
                  href={content.hero_cta_link || '#contact'}
                  className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  {content.hero_cta_text}
                </a>
              )}
            </div>
            {content.hero_image && (
              <div>
                <img
                  src={content.hero_image}
                  alt={content.hero_title}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {content.benefits && content.benefits.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Bénéfices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  {benefit.icon && (
                    <div className="text-5xl mb-4 text-blue-600">{benefit.icon}</div>
                  )}
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {content.process_steps && content.process_steps.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {content.process_title && (
              <h2 className="text-3xl font-bold text-center mb-12">{content.process_title}</h2>
            )}
            <div className="max-w-4xl mx-auto">
              {content.process_steps.map((step, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                    {step.step_number || index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {content.cta_section_title && (
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl font-bold mb-6">{content.cta_section_title}</h2>
            {content.cta_section_text && (
              <div
                className="text-lg mb-8 text-blue-50"
                dangerouslySetInnerHTML={{ __html: content.cta_section_text }}
              />
            )}
            {content.cta_button_text && (
              <a
                href={content.cta_button_link || '#contact'}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition text-lg"
              >
                {content.cta_button_text}
              </a>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default ElisServiceLandingPage;
