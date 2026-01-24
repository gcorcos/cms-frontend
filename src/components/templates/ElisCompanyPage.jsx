import { Helmet } from 'react-helmet-async';

const ElisCompanyPage = ({ content, metadata }) => {
  return (
    <>
      <Helmet>
        <title>{metadata.meta_title || metadata.title}</title>
        {metadata.meta_description && <meta name="description" content={metadata.meta_description} />}
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20">
        {content.hero_image && (
          <div className="absolute inset-0 opacity-30">
            <img src={content.hero_image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-center">{content.hero_title}</h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {content.intro_title && (
              <h2 className="text-3xl font-bold mb-6 text-center">{content.intro_title}</h2>
            )}
            <div
              className="prose prose-lg mx-auto"
              dangerouslySetInnerHTML={{ __html: content.intro_text }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      {(content.mission || content.vision) && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {content.mission && (
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4 text-blue-600">Notre Mission</h2>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: content.mission }}
                  />
                </div>
              )}
              {content.vision && (
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4 text-blue-600">Notre Vision</h2>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: content.vision }}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Values Section */}
      {content.values && content.values.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {content.values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  {value.icon && (
                    <div className="text-5xl mb-4 text-blue-600">{value.icon}</div>
                  )}
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <div
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{ __html: value.description }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Figures */}
      {content.key_figures && content.key_figures.length > 0 && (
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Chiffres Clés</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {content.key_figures.map((figure, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold mb-2">{figure.number}</div>
                  <div className="text-xl font-semibold mb-1">{figure.label}</div>
                  {figure.description && (
                    <div className="text-sm text-blue-100">{figure.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Commitments Section */}
      {content.commitments && content.commitments.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            {content.commitments_title && (
              <h2 className="text-3xl font-bold text-center mb-12">{content.commitments_title}</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.commitments.map((commitment, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {commitment.image && (
                    <img
                      src={commitment.image}
                      alt={commitment.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{commitment.title}</h3>
                    <div
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{ __html: commitment.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* History Section */}
      {content.history_content && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {content.history_title && (
                <h2 className="text-3xl font-bold mb-8 text-center">{content.history_title}</h2>
              )}
              <div
                className="prose prose-lg mx-auto"
                dangerouslySetInnerHTML={{ __html: content.history_content }}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ElisCompanyPage;
