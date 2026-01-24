import { Helmet } from 'react-helmet-async';

const ElisHomePage = ({ content, metadata }) => {
  return (
    <>
      <Helmet>
        <title>{metadata.meta_title || metadata.title}</title>
        {metadata.meta_description && <meta name="description" content={metadata.meta_description} />}
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">{content.hero_title}</h1>
            {content.hero_subtitle && (
              <p className="text-xl mb-8 text-blue-100">{content.hero_subtitle}</p>
            )}
            {content.hero_cta_text && (
              <a
                href={content.hero_cta_link || '#'}
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                {content.hero_cta_text}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      {content.services && content.services.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {content.services_title && (
              <h2 className="text-3xl font-bold text-center mb-12">{content.services_title}</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                  {service.icon && (
                    <div className="text-4xl mb-4">{service.icon}</div>
                  )}
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {service.link && (
                    <a href={service.link} className="text-blue-600 hover:text-blue-800 font-medium">
                      En savoir plus →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industries Section */}
      {content.industries && content.industries.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            {content.industries_title && (
              <h2 className="text-3xl font-bold text-center mb-12">{content.industries_title}</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.industries.map((industry, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                  {industry.image && (
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                    <p className="text-gray-200 mb-4">{industry.description}</p>
                    {industry.link && (
                      <a
                        href={industry.link}
                        className="text-white font-semibold hover:text-blue-300 transition"
                      >
                        Découvrir →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      {content.stats && content.stats.length > 0 && (
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            {content.stats_title && (
              <h2 className="text-3xl font-bold text-center mb-12">{content.stats_title}</h2>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {content.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {content.cta_section_title && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">{content.cta_section_title}</h2>
            {content.cta_section_text && (
              <div
                className="text-lg text-gray-700 mb-8"
                dangerouslySetInnerHTML={{ __html: content.cta_section_text }}
              />
            )}
            {content.cta_button_text && (
              <a
                href={content.cta_button_link || '#'}
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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

export default ElisHomePage;
