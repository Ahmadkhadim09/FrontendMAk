class ContactService {
  async submitContact(formData) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit contact form');
      }

      return data;
    } catch (error) {
      console.error('Error in contactService:', error);
      throw error;
    }
  }

  async getAllContacts(page = 1, status = '') {
    try {
      const queryParams = new URLSearchParams({
        page,
        ...(status && { status })
      }).toString();

      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in contactService:', error);
      throw error;
    }
  }

  async getContact(id) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact/${id}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch contact');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in contactService:', error);
      throw error;
    }
  }
}

// Create and export instance
const contactService = new ContactService();
export default contactService;