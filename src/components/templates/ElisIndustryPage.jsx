import { Helmet } from 'react-helmet-async';

const ElisIndustryPage = ({ content, metadata }) => {
  return (
    <>
      <Helmet>
        <title>{metadata.meta_title || metadata.title}</title>
        {metadata.meta_description && <meta name="description" content={metadata.meta_description} />}
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        {content.hero_image && (
          <div className="absolute inset-0 opacity-20">
            <img src={content.hero_image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-4">{content.hero_title}</h1>
            {content.hero_subtitle && (
              <p className="text-2xl text-indigo-100">{content.hero_subtitle}</p>
            )}
          </div>
        </div>
      </section>

      {/* Introduction */}
      {content.intro_text && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div
              className="max-w-4xl mx-auto prose prose-lg"
              dangerouslySetInnerHTML={{ __html: content.intro_text }}
            />
          </div>
        </section>
      )}

      {/* Services Section */}
      {content.services && content.services.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                  {service.image && (
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <div
                      className="text-gray-600 mb-4"
                      dangerouslySetInnerHTML={{ __html: service.description }}
                    />
                    {service.link && (
                      <a
                        href={service.link}
                        className="text-indigo-600 hover:text-indigo-800 font-semibold"
                      >
                        En savoir plus →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {content.testimonials && content.testimonials.length > 0 && (
        <section className="py-16 bg-indigo-50">
          <div className="container mx-auto px-4">
            {content.testimonial_title && (
              <h2 className="text-3xl font-bold text-center mb-12">{content.testimonial_title}</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div
                    className="text-gray-700 mb-4 italic"
                    dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                  />
                  <div className="border-t pt-4">
                    <p className="font-semibold">{testimonial.author_name}</p>
                    <p className="text-sm text-gray-600">{testimonial.author_position}</p>
                    <p className="text-sm text-indigo-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      {content.case_studies && content.case_studies.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Études de Cas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.case_studies.map((caseStudy, index) => (
                <div key={index} className="group">
                  {caseStudy.image && (
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                  <div
                    className="text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{ __html: caseStudy.summary }}
                  />
                  {caseStudy.link && (
                    <a
                      href={caseStudy.link}
                      className="text-indigo-600 hover:text-indigo-800 font-semibold"
                    >
                      Lire l'étude →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ElisIndustryPage;
