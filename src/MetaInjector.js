import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { fetchMetadata } from './fetchMetadata';

const MetaInjector = ({ url, initialMetadata, children }) => {
  const router = typeof window !== 'undefined' ? useRouter() : null;
  const [metadata, setMetadata] = useState(initialMetadata || null);

  useEffect(() => {
    const updateMetadata = async (url) => {
      const data = await fetchMetadata(url);
      setMetadata(data);
    };

    if (!initialMetadata && typeof window !== 'undefined') {
      updateMetadata(window.location.href);

      if (router) {
        router.events.on('routeChangeComplete', updateMetadata);
        return () => router.events.off('routeChangeComplete', updateMetadata);
      }
    }
  }, [router, initialMetadata]);

  if (!metadata) return children;

  return (
    <>
      {typeof window === 'undefined' ? (
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta property="og:title" content={metadata.ogTitle} />
          <meta property="og:description" content={metadata.ogDescription} />
          <meta property="og:image" content={metadata.ogImage} />
        </Head>
      ) : (
        <Helmet>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta property="og:title" content={metadata.ogTitle} />
          <meta property="og:description" content={metadata.ogDescription} />
          <meta property="og:image" content={metadata.ogImage} />
        </Helmet>
      )}
      {children}
    </>
  );
};

export default MetaInjector;
