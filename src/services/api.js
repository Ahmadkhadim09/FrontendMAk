// Get the API URL from environment variables
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Helper function to handle responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Something went wrong');
  }
  return response.json();
};

// Helper function to handle errors
const handleError = (error) => {
  console.error('API Error:', error);
  throw error;
};

export const api = {
  // Projects
  getProjects: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  getProject: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  // Services
  getServices: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/services`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  // Contact
  sendContactForm: async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  // Testimonials
  getTestimonials: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/testimonials`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  },

  // Submit Idea
  submitIdea: async (ideaData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/ideas`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ideaData),
      });
      return handleResponse(response);
    } catch (error) {
      handleError(error);
    }
  },
};

export default api;