const AboutPage = ({ content }) => {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-gray-900">
            {content.title || 'About Us'}
          </h1>
        </div>
      </section>

      {/* Introduction */}
      {content.intro_text && (
        <section className="py-16">
          <div className="container max-w-4xl">
            <div
              className="prose prose-lg"
              dangerouslySetInnerHTML={{ __html: content.intro_text }}
            />
          </div>
        </section>
      )}

      {/* Mission & Vision */}
      {(content.mission || content.vision) && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {content.mission && (
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: content.mission }}
                  />
                </div>
              )}
              {content.vision && (
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
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

      {/* Team Members */}
      {content.team_members && content.team_members.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {content.team_members.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary-600 mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* History */}
      {content.history && (
        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
            <div
              className="prose prose-lg mx-auto"
              dangerouslySetInnerHTML={{ __html: content.history }}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutPage;
