/**
 * Get the API base URL with proper formatting
 * Removes trailing slashes and trims whitespace
 */
export const getApiBaseUrl = () => {
  const url = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  const cleaned = url.trim().replace(/\/+$/, ''); // Remove trailing slashes
  
  // Log in development to help debug
  if (process.env.NODE_ENV === 'development') {
    console.log('API Base URL:', cleaned);
  }
  
  return cleaned;
};

/**
 * Build a full API endpoint URL
 */
export const buildApiUrl = (endpoint) => {
  const baseUrl = getApiBaseUrl();
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${baseUrl}${cleanEndpoint}`;
};
