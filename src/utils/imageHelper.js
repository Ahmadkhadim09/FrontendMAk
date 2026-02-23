const getImageUrl = (type, id, imageIndex = 0) => {
  const DEFAULT_API_BASE =
    process.env.NODE_ENV === 'production'
      ? 'https://makdevs-server.onrender.com/api'
      : 'http://localhost:5000/api';

  const baseUrl =
    process.env.REACT_APP_API_URL?.trim().replace(/\/+$/, '') || DEFAULT_API_BASE;
  
  switch (type) {
    case 'project':
      return `${baseUrl}/projects/${id}/images/${imageIndex}`;
    case 'team':
      return `${baseUrl}/team/${id}/avatar`;
    case 'testimonial':
      return `${baseUrl}/testimonials/${id}/avatar`;
    default:
      return null;
  }
};

export default getImageUrl;