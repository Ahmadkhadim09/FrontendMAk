import apiService from './api';
import { API_ENDPOINTS } from '../config/api';

class TeamService {
  async getAllTeamMembers(featured = false) {
    const queryParams = new URLSearchParams({
      ...(featured && { featured: true })
    }).toString();

    const response = await apiService.get(`${API_ENDPOINTS.TEAM}?${queryParams}`);
    return response;
  }

  async getTeamMember(id) {
    return apiService.get(API_ENDPOINTS.TEAM_MEMBER(id));
  }

  async createTeamMember(data) {
    return apiService.post(API_ENDPOINTS.TEAM, data);
  }

  async updateTeamMember(id, data) {
    return apiService.patch(API_ENDPOINTS.TEAM_MEMBER(id), data);
  }

  async deleteTeamMember(id) {
    return apiService.delete(API_ENDPOINTS.TEAM_MEMBER(id));
  }

  async uploadAvatar(id, file) {
    return apiService.uploadFile(`/team/${id}/avatar`, file, 'avatar');
  }

  getAvatarUrl(id) {
    return API_ENDPOINTS.TEAM_AVATAR(id);
  }
}

export default new TeamService();