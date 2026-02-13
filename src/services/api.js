const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Projects
  getProjects: async () => {
    const response = await fetch(`${API_BASE_URL}/projects`);
    return response.json();
  },

  getProject: async (id) => {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`);
    return response.json();
  },

  // Services
  getServices: async () => {
    const response = await fetch(`${API_BASE_URL}/services`);
    return response.json();
  },

  // Contact
  sendContactForm: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    return response.json();
  },

  // Testimonials
  getTestimonials: async () => {
    const response = await fetch(`${API_BASE_URL}/testimonials`);
    return response.json();
  },
};

export default api;