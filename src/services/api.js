import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const api = axios.create({
  baseURL: `${API_URL}/public`,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const contentService = {
  async getHomepage() {
    const response = await api.get('/homepage');
    return response.data.data.page;
  },

  async getPageBySlug(slug) {
    const response = await api.get(`/pages/${slug}`);
    return response.data.data.page;
  },

  async getPages() {
    const response = await api.get('/pages');
    return response.data.data.pages;
  },

  async getNavigation(location = 'main') {
    const response = await api.get(`/navigation/${location}`);
    return response.data.data.items;
  },

  async getSettings() {
    const response = await api.get('/settings');
    return response.data.data.settings;
  }
};

export default api;
