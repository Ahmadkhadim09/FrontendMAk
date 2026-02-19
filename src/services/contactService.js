import apiService from './api';
import { API_ENDPOINTS } from '../config/api';

class ContactService {
  async submitContact(formData) {
    return apiService.post(API_ENDPOINTS.CONTACT, formData);
  }

  async getAllContacts(page = 1, status = '') {
    const queryParams = new URLSearchParams({
      page,
      ...(status && { status })
    }).toString();

    return apiService.get(`${API_ENDPOINTS.CONTACT}?${queryParams}`);
  }

  async getContact(id) {
    return apiService.get(`${API_ENDPOINTS.CONTACT}/${id}`);
  }

  async updateContact(id, data) {
    return apiService.patch(`${API_ENDPOINTS.CONTACT}/${id}`, data);
  }

  async deleteContact(id) {
    return apiService.delete(`${API_ENDPOINTS.CONTACT}/${id}`);
  }
}

export default new ContactService();