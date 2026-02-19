import apiService from './api';
import { API_ENDPOINTS } from '../config/api';

class ProjectService {
  async getAllProjects(page = 1, limit = 9, filters = {}) {
    const queryParams = new URLSearchParams({
      page,
      limit,
      ...filters
    }).toString();

    return apiService.get(`${API_ENDPOINTS.PROJECTS}?${queryParams}`);
  }

  async getProjectBySlug(slug) {
    return apiService.get(API_ENDPOINTS.PROJECT(slug));
  }

  async createProject(projectData) {
    return apiService.post(API_ENDPOINTS.PROJECTS, projectData);
  }

  async updateProject(id, projectData) {
    return apiService.patch(API_ENDPOINTS.PROJECT(id), projectData);
  }

  async deleteProject(id) {
    return apiService.delete(API_ENDPOINTS.PROJECT(id));
  }

  async uploadProjectImages(projectId, files) {
    return apiService.uploadFiles(`/projects/${projectId}/images`, files, 'images');
  }

  getProjectImageUrl(projectId, imageIndex) {
    return API_ENDPOINTS.PROJECT_IMAGE(projectId, imageIndex);
  }
}

export default new ProjectService();