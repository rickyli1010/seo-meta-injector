import axios from 'axios';
import { fetchMetadata } from '../src/fetchMetadata';

jest.mock('axios');

describe('fetchMetadata', () => {
  it('should fetch metadata successfully', async () => {
    const mockData = {
      title: 'Test Title',
      description: 'Test Description',
      ogTitle: 'Test OG Title',
      ogDescription: 'Test OG Description',
      ogImage: 'https://example.com/image.jpg'
    };

    axios.get.mockResolvedValueOnce({ data: mockData });

    const url = 'https://example.com/page';
    const metadata = await fetchMetadata(url);

    expect(metadata).toEqual(mockData);
    expect(axios.get).toHaveBeenCalledWith(
      `https://example.com/api?url=${encodeURIComponent(url)}`
    );
  });

  it('should return null if the API call fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'));

    const url = 'https://example.com/page';
    const metadata = await fetchMetadata(url);

    expect(metadata).toBeNull();
  });
});
