// Original templates
import HomePage from '../components/templates/HomePage';
import ServicePage from '../components/templates/ServicePage';
import AboutPage from '../components/templates/AboutPage';
import ContactPage from '../components/templates/ContactPage';
import GenericPage from '../components/templates/GenericPage';

// ELIS templates
import ElisHomePage from '../components/templates/ElisHomePage';
import ElisServiceLandingPage from '../components/templates/ElisServiceLandingPage';
import ElisIndustryPage from '../components/templates/ElisIndustryPage';
import ElisCompanyPage from '../components/templates/ElisCompanyPage';
import ElisContactPage from '../components/templates/ElisContactPage';

// Map template names from database to React components
const TEMPLATE_MAP = {
  // Original templates
  'home': HomePage,
  'service': ServicePage,
  'about': AboutPage,
  'contact': ContactPage,
  'generic': GenericPage,

  // ELIS templates
  'elis-homepage': ElisHomePage,
  'elis-service-landing': ElisServiceLandingPage,
  'elis-industry': ElisIndustryPage,
  'elis-company': ElisCompanyPage,
  'elis-contact': ElisContactPage
};

/**
 * Get the React component for a given template name
 * @param {string} templateName - The template name from the database
 * @returns {React.Component} - The corresponding React component
 */
export const getTemplate = (templateName) => {
  const template = TEMPLATE_MAP[templateName];

  if (!template) {
    console.warn(`Template "${templateName}" not found, using GenericPage`);
    return GenericPage;
  }

  return template;
};

export default { getTemplate };
