import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const ElisContactPage = ({ content, metadata }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission
    alert('Formulaire envoyé ! (fonctionnalité à implémenter)');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>{metadata.meta_title || metadata.title}</title>
        {metadata.meta_description && <meta name="description" content={metadata.meta_description} />}
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{content.page_title}</h1>
          {content.intro_text && (
            <div
              className="max-w-3xl mx-auto text-lg text-blue-50"
              dangerouslySetInnerHTML={{ __html: content.intro_text }}
            />
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              {content.form_title && (
                <h2 className="text-2xl font-bold mb-2">{content.form_title}</h2>
              )}
              {content.form_subtitle && (
                <p className="text-gray-600 mb-6">{content.form_subtitle}</p>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {content.contact_info_title && (
                <h2 className="text-2xl font-bold">{content.contact_info_title}</h2>
              )}

              {/* Contact Locations */}
              {content.contact_locations && content.contact_locations.length > 0 && (
                <div className="space-y-6">
                  {content.contact_locations.map((location, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-3">{location.location_name}</h3>
                      <div className="space-y-2 text-gray-600">
                        {location.address && (
                          <p>
                            {location.address}
                            {location.city && `, ${location.city}`}
                            {location.postal_code && ` ${location.postal_code}`}
                          </p>
                        )}
                        {location.phone && (
                          <p>
                            <span className="font-medium">Tél :</span>{' '}
                            <a href={`tel:${location.phone}`} className="text-blue-600 hover:underline">
                              {location.phone}
                            </a>
                          </p>
                        )}
                        {location.email && (
                          <p>
                            <span className="font-medium">Email :</span>{' '}
                            <a href={`mailto:${location.email}`} className="text-blue-600 hover:underline">
                              {location.email}
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Support Information */}
              {(content.support_phone || content.support_email) && (
                <div className="bg-blue-50 p-6 rounded-lg">
                  {content.support_title && (
                    <h3 className="text-xl font-semibold mb-3">{content.support_title}</h3>
                  )}
                  <div className="space-y-2">
                    {content.support_phone && (
                      <p className="text-gray-700">
                        <span className="font-medium">Téléphone :</span>{' '}
                        <a href={`tel:${content.support_phone}`} className="text-blue-600 hover:underline">
                          {content.support_phone}
                        </a>
                      </p>
                    )}
                    {content.support_email && (
                      <p className="text-gray-700">
                        <span className="font-medium">Email :</span>{' '}
                        <a href={`mailto:${content.support_email}`} className="text-blue-600 hover:underline">
                          {content.support_email}
                        </a>
                      </p>
                    )}
                    {content.support_hours && (
                      <p className="text-gray-700">
                        <span className="font-medium">Horaires :</span> {content.support_hours}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElisContactPage;
