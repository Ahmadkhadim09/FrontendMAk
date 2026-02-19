class ProjectService {
  async getAllProjects(page = 1, limit = 9, filters = {}) {
    try {
      const queryParams = new URLSearchParams({
        page,
        limit,
        ...filters
      }).toString();

      const response = await fetch(`${process.env.REACT_APP_API_URL}/projects?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in projectService:', error);
      throw error;
    }
  }

  async getProjectBySlug(slug) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/projects/${slug}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch project');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in projectService:', error);
      throw error;
    }
  }
}

// Create and export instance
const projectService = new ProjectService();
export default projectService;