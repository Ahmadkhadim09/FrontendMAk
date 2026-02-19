import { useState, useCallback } from 'react';
import apiService from '../services/api';

export const useApi = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (method = 'GET', body = null) => {
    setLoading(true);
    setError(null);

    try {
      let response;
      switch (method.toUpperCase()) {
        case 'GET':
          response = await apiService.get(endpoint);
          break;
        case 'POST':
          response = await apiService.post(endpoint, body);
          break;
        case 'PUT':
          response = await apiService.put(endpoint, body);
          break;
        case 'PATCH':
          response = await apiService.patch(endpoint, body);
          break;
        case 'DELETE':
          response = await apiService.delete(endpoint);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      setData(response.data);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  return { data, loading, error, execute };
};