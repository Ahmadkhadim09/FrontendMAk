import apiService from './api';

// Helper to get properly formatted API URL
const getApiUrl = () => {
  const DEFAULT_API_BASE =
    process.env.NODE_ENV === 'production'
      ? 'https://makdevs-server.onrender.com/api'
      : 'http://localhost:5000/api';

  const url = process.env.REACT_APP_API_URL || DEFAULT_API_BASE;
  return url.trim().replace(/\/+$/, '');
};

class TestimonialService {
  async getAllTestimonials(page = 1, featured = false) {
    try {
      const queryParams = new URLSearchParams({
        page,
        ...(featured && { featured: true })
      }).toString();

      const response = await fetch(`${getApiUrl()}/testimonials?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in testimonialService:', error);
      throw error;
    }
  }

  async getTestimonial(id) {
    try {
      const response = await fetch(`${getApiUrl()}/testimonials/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch testimonial');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in testimonialService:', error);
      throw error;
    }
  }
}

// Create and export instance
const testimonialService = new TestimonialService();
export default testimonialService;