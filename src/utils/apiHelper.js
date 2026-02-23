/**
 * Get the API base URL with proper formatting
 * In production, default to the deployed backend URL.
 * In development, default to localhost.
 */
export const getApiBaseUrl = () => {
  const DEFAULT_API_BASE =
    process.env.NODE_ENV === 'production'
      ? 'https://makdevs-server.onrender.com/api'
      : 'http://localhost:5000/api';

  const url = process.env.REACT_APP_API_URL || DEFAULT_API_BASE;
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
