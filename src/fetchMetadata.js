import axios from 'axios';

export const fetchMetadata = async (url) => {
  try {
    const response = await axios.get(
      `https://example.com/api?url=${encodeURIComponent(url)}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return null;
  }
};
