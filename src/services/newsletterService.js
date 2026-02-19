import apiService from './api';
import { API_ENDPOINTS } from '../config/api';

class NewsletterService {
  async subscribe(email, name = '', preferences = {}) {
    return apiService.post(API_ENDPOINTS.NEWSLETTER_SUBSCRIBE, {
      email,
      name,
      preferences
    });
  }

  async unsubscribe(email) {
    return apiService.post(API_ENDPOINTS.NEWSLETTER_UNSUBSCRIBE, { email });
  }

  async getAllSubscribers(page = 1, status = '') {
    const queryParams = new URLSearchParams({
      page,
      ...(status && { status })
    }).toString();

    return apiService.get(`${API_ENDPOINTS.NEWSLETTER}?${queryParams}`);
  }

  async deleteSubscriber(id) {
    return apiService.delete(`${API_ENDPOINTS.NEWSLETTER}/${id}`);
  }
}

export default new NewsletterService();