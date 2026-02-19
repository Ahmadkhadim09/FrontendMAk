import apiService from './api';
import { API_ENDPOINTS } from '../config/api';

class IdeaService {
  async submitIdea(ideaData) {
    return apiService.post(API_ENDPOINTS.IDEAS, ideaData);
  }

  async getAllIdeas(page = 1, status = '') {
    const queryParams = new URLSearchParams({
      page,
      ...(status && { status })
    }).toString();

    return apiService.get(`${API_ENDPOINTS.IDEAS}?${queryParams}`);
  }

  async getIdea(id) {
    return apiService.get(`${API_ENDPOINTS.IDEAS}/${id}`);
  }

  async reviewIdea(id, reviewData) {
    return apiService.patch(`${API_ENDPOINTS.IDEAS}/${id}/review`, reviewData);
  }

  async deleteIdea(id) {
    return apiService.delete(`${API_ENDPOINTS.IDEAS}/${id}`);
  }
}

export default new IdeaService();