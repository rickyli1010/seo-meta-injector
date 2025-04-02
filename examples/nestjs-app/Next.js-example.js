import MetaInjector from 'seo-meta-injector';
import { fetchMetadata } from 'seo-meta-injector';

const NextPage = ({ url, initialMetadata }) => {
  return (
    <MetaInjector url={url} initialMetadata={initialMetadata}>
      <h1>Next.js SSR Page</h1>
    </MetaInjector>
  );
};

export async function getServerSideProps({ req }) {
  const fullUrl = `https://${req.headers.host}${req.url}`;
  const metadata = await fetchMetadata(fullUrl);

  return { props: { url: fullUrl, initialMetadata: metadata } };
}

export default NextPage;
