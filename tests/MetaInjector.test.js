import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Helmet } from 'react-helmet';
import MetaInjector from '../src/MetaInjector';
import { fetchMetadata } from '../src/fetchMetadata';

jest.mock('../src/fetchMetadata');

describe('MetaInjector', () => {
  it('should render children and inject metadata', async () => {
    const mockMetadata = {
      title: 'Test Title',
      description: 'Test Description',
      ogTitle: 'Test OG Title',
      ogDescription: 'Test OG Description',
      ogImage: 'https://example.com/image.jpg'
    };

    fetchMetadata.mockResolvedValueOnce(mockMetadata);

    const { getByText } = render(
      <MetaInjector url="https://example.com/page">
        <h1>Page Content</h1>
      </MetaInjector>
    );

    await waitFor(() => {
      const helmet = Helmet.peek();
      expect(helmet.title).toBe(mockMetadata.title);
      expect(helmet.metaTags).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: 'description',
            content: mockMetadata.description
          }),
          expect.objectContaining({
            property: 'og:title',
            content: mockMetadata.ogTitle
          }),
          expect.objectContaining({
            property: 'og:description',
            content: mockMetadata.ogDescription
          }),
          expect.objectContaining({
            property: 'og:image',
            content: mockMetadata.ogImage
          })
        ])
      );
    });

    expect(getByText('Page Content')).toBeInTheDocument();
  });

  it('should not inject metadata if initialMetadata is not provided and fetch fails', async () => {
    fetchMetadata.mockRejectedValueOnce(new Error('API Error'));

    const { getByText } = render(
      <MetaInjector url="https://example.com/page">
        <h1>Fallback Content</h1>
      </MetaInjector>
    );

    await waitFor(() => {
      const helmet = Helmet.peek();
      expect(helmet.title).toBeUndefined();
    });

    expect(getByText('Fallback Content')).toBeInTheDocument();
  });
});
