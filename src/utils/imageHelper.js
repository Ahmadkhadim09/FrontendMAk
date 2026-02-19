const getImageUrl = (type, id, imageIndex = 0) => {
  const baseUrl = process.env.REACT_APP_API_URL;
  
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