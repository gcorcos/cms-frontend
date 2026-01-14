const GenericPage = ({ content }) => {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-gray-900">
            {content.title || 'Page Title'}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className={`${content.show_sidebar ? 'grid grid-cols-1 lg:grid-cols-3 gap-12' : 'max-w-4xl mx-auto'}`}>
            {/* Main Content */}
            <div className={content.show_sidebar ? 'lg:col-span-2' : ''}>
              {content.content && (
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
              )}
            </div>

            {/* Sidebar */}
            {content.show_sidebar && content.sidebar_content && (
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-xl sticky top-24">
                  <div
                    className="prose prose-sm"
                    dangerouslySetInnerHTML={{ __html: content.sidebar_content }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenericPage;
