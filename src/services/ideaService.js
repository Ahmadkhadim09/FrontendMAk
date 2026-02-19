class IdeaService {
  async submitIdea(ideaData) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/ideas`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ideaData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit idea');
      }

      return data;
    } catch (error) {
      console.error('Error in ideaService:', error);
      throw error;
    }
  }

  async getAllIdeas(page = 1, status = '') {
    try {
      const queryParams = new URLSearchParams({
        page,
        ...(status && { status })
      }).toString();

      const response = await fetch(`${process.env.REACT_APP_API_URL}/ideas?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch ideas');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in ideaService:', error);
      throw error;
    }
  }
}

// Create and export instance
const ideaService = new IdeaService();
export default ideaService;