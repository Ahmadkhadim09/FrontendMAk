// Helper to get properly formatted API URL
const getApiUrl = () => {
  const url = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  return url.trim().replace(/\/+$/, '');
};

class TeamService {
  async getAllTeamMembers(featured = false) {
    try {
      const queryParams = new URLSearchParams({
        ...(featured && { featured: true })
      }).toString();

      const response = await fetch(`${getApiUrl()}/team?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch team members');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in teamService:', error);
      throw error;
    }
  }

  async getTeamMember(id) {
    try {
      const response = await fetch(`${getApiUrl()}/team/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch team member');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in teamService:', error);
      throw error;
    }
  }
}

// Create and export instance
const teamService = new TeamService();
export default teamService;