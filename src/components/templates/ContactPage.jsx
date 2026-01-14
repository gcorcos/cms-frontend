import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = ({ content }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submission would be handled by the backend API');
    // TODO: Implement form submission to backend
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {content.title || 'Contact Us'}
          </h1>
          {content.intro_text && (
            <p className="text-xl text-gray-600">{content.intro_text}</p>
          )}
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {content.address && (
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">{content.address}</p>
                    </div>
                  </div>
                )}
                {content.phone && (
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">{content.phone}</p>
                    </div>
                  </div>
                )}
                {content.email && (
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">{content.email}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            {content.show_form !== false && (
              <div>
                <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
