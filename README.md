<h1>SEO Meta Injector</h1>
A lightweight NPM module to fetch and inject SEO metadata dynamically for React and Next.js applications (including SSR support).

<h2>Features</h2>
✅ Fetches metadata from an external API based on the current page URL
✅ Supports React and Next.js (including Server-Side Rendering (SSR))
✅ Injects SEO metadata using React Helmet
✅ Watches URL changes and updates metadata dynamically

Installation
Run the following command in your project:
```
npm install seo-meta-injector
```
or using Yarn:

sh
Copy
Edit
yarn add seo-meta-injector
Usage
React Example
javascript
Copy
Edit
import React from 'react';
import MetaInjector from 'seo-meta-injector';

const App = () => {
  return (
    <MetaInjector url={window.location.href}>
      <h1>My React Page</h1>
    </MetaInjector>
  );
};

export default App;
Next.js Example (With SSR Support)
Modify your pages/index.js:

javascript
Copy
Edit
import MetaInjector from 'seo-meta-injector';

export async function getServerSideProps({ req }) {
  const fullUrl = `https://${req.headers.host}${req.url}`;
  const metadata = await fetchMetadata(fullUrl);
  
  return { props: { url: fullUrl, initialMetadata: metadata } };
}

export default function Home({ url, initialMetadata }) {
  return (
    <MetaInjector url={url} initialMetadata={initialMetadata}>
      <h1>My Next.js Page</h1>
    </MetaInjector>
  );
}
Configuration
Environment Variables
If your API requires authentication, you can set environment variables:

sh
Copy
Edit
API_BASE_URL=https://example.com/api
Testing
Run tests using Jest:

sh
Copy
Edit
npm test
or

sh
Copy
Edit
yarn test
Project Structure
graphql
Copy
Edit
seo-meta-injector/
│── src/
│   │── fetchMetadata.js       # Fetch metadata from API
│   │── MetaInjector.js        # Component to inject SEO metadata
│
│── tests/                     # Unit and integration tests
│   │── fetchMetadata.test.js  # Tests for fetchMetadata function
│   │── MetaInjector.test.js   # Tests for MetaInjector component
│   │── setupTests.js          # Jest setup file
│
│── .nvmrc                     # Node.js version config (18.x)
│── babel.config.js             # Babel configuration for Jest
│── jest.config.js              # Jest configuration
│── package.json                # Project dependencies
│── README.md                   # Project documentation
Contributing
Fork the repository

Create a feature branch (git checkout -b feature-branch)

Commit changes (git commit -m "Added new feature")

Push to the branch (git push origin feature-branch)

Submit a Pull Request

License
This project is MIT Licensed.

