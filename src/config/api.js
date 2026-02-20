const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  // Auth
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  ME: `${API_BASE_URL}/auth/me`,
  
  // Projects
  PROJECTS: `${API_BASE_URL}/projects`,
  PROJECT: (id) => `${API_BASE_URL}/projects/${id}`,
  PROJECT_IMAGE: (projectId, imageIndex) => `${API_BASE_URL}/projects/${projectId}/images/${imageIndex}`,
  
  // Services
  SERVICES: `${API_BASE_URL}/services`,
  SERVICE: (id) => `${API_BASE_URL}/services/${id}`,
  
  // Testimonials
  TESTIMONIALS: `${API_BASE_URL}/testimonials`,
  TESTIMONIAL: (id) => `${API_BASE_URL}/testimonials/${id}`,
  TESTIMONIAL_AVATAR: (id) => `${API_BASE_URL}/testimonials/${id}/avatar`,
  
  // Team
  TEAM: `${API_BASE_URL}/team`,
  TEAM_MEMBER: (id) => `${API_BASE_URL}/team/${id}`,
  TEAM_AVATAR: (id) => `${API_BASE_URL}/team/${id}/avatar`,
  
  // Contact
  CONTACT: `${API_BASE_URL}/contact`,
  
  // Ideas
  IDEAS: `${API_BASE_URL}/ideas`,
  
  // Newsletter
  NEWSLETTER: `${API_BASE_URL}/newsletter`,
  NEWSLETTER_SUBSCRIBE: `${API_BASE_URL}/newsletter/subscribe`,
  NEWSLETTER_UNSUBSCRIBE: `${API_BASE_URL}/newsletter/unsubscribe`,
  
  // Health
  HEALTH: `${API_BASE_URL}/health`
};

export default API_BASE_URL;