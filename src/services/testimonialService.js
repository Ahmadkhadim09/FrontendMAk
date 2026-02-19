import apiService from './api';
import { API_ENDPOINTS } from '../config/api';

class TestimonialService {
  async getAllTestimonials(page = 1, featured = false) {
    const queryParams = new URLSearchParams({
      page,
      ...(featured && { featured: true })
    }).toString();

    const response = await apiService.get(`${API_ENDPOINTS.TESTIMONIALS}?${queryParams}`);
    return response;
  }

  async getTestimonial(id) {
    return apiService.get(API_ENDPOINTS.TESTIMONIAL(id));
  }

  async createTestimonial(data) {
    return apiService.post(API_ENDPOINTS.TESTIMONIALS, data);
  }

  async updateTestimonial(id, data) {
    return apiService.patch(API_ENDPOINTS.TESTIMONIAL(id), data);
  }

  async deleteTestimonial(id) {
    return apiService.delete(API_ENDPOINTS.TESTIMONIAL(id));
  }

  async uploadAvatar(id, file) {
    return apiService.uploadFile(`/testimonials/${id}/avatar`, file, 'avatar');
  }

  getAvatarUrl(id) {
    return API_ENDPOINTS.TESTIMONIAL_AVATAR(id);
  }

  async toggleFeatured(id) {
    return apiService.patch(`${API_ENDPOINTS.TESTIMONIAL(id)}/toggle-featured`, {});
  }
}

export default new TestimonialService();