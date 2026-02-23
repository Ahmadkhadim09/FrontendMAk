// Base API configuration - ensure URL is properly formatted
const getApiBaseUrl = () => {
  const DEFAULT_API_BASE =
    process.env.NODE_ENV === 'production'
      ? 'https://makdevs-server.onrender.com/api'
      : 'http://localhost:5000/api';

  const url = process.env.REACT_APP_API_URL || DEFAULT_API_BASE;
  return url.trim().replace(/\/$/, ''); // Remove trailing slash and spaces
};

const API_BASE_URL = getApiBaseUrl();

class ApiService {
  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  async get(endpoint) {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }

  async post(endpoint, data) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    
    const responseData = await response.json();
    
    if (!response.ok) {
      throw new Error(responseData.message || `HTTP error! status: ${response.status}`);
    }
    
    return responseData;
  }
}

// Create and export instance
const apiService = new ApiService();
export default apiService;