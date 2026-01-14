import HomePage from '../components/templates/HomePage';
import ServicePage from '../components/templates/ServicePage';
import AboutPage from '../components/templates/AboutPage';
import ContactPage from '../components/templates/ContactPage';
import GenericPage from '../components/templates/GenericPage';

// Map template names from database to React components
const TEMPLATE_MAP = {
  'home': HomePage,
  'service': ServicePage,
  'about': AboutPage,
  'contact': ContactPage,
  'generic': GenericPage
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
