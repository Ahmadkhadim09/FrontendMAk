import apiService from './api';

class TestimonialService {
  async getAllTestimonials(page = 1, featured = false) {
    try {
      const queryParams = new URLSearchParams({
        page,
        ...(featured && { featured: true })
      }).toString();

      const response = await fetch(`${process.env.REACT_APP_API_URL}/testimonials?${queryParams}`);
      
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
      const response = await fetch(`${process.env.REACT_APP_API_URL}/testimonials/${id}`);
      
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