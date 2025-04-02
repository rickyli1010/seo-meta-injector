# SEO Meta Injector

A lightweight **NPM module** for injecting SEO metadata dynamically in **React** and **Next.js** (including SSR).  
It fetches metadata from an external API and updates the page's `<head>` using **React Helmet**.

---

## 🚀 Features
- ✅ Works with **React** and **Next.js**
- ✅ Supports **Server-Side Rendering (SSR)**
- ✅ Uses **React Helmet** for dynamic `<head>` updates
- ✅ Watches URL changes and updates metadata automatically
- ✅ Fetches metadata from an external API

---

## 📦 Installation

```sh
npm install seo-meta-injector
```

or with Yarn:

```sh
yarn add seo-meta-injector
```

---

## ⚙️ Usage

### React Example:
```jsx
import MetaInjector from 'seo-meta-injector';

const App = () => (
  <MetaInjector url={window.location.href}>
    <h1>Welcome to My Page</h1>
  </MetaInjector>
);

export default App;
```

---

### Next.js Example (Supports SSR):
```jsx
import MetaInjector from 'seo-meta-injector';

export async function getServerSideProps({ req }) {
  const fullUrl = `https://${req.headers.host}${req.url}`;
  return { props: { url: fullUrl } };
}

const Page = ({ url }) => (
  <MetaInjector url={url}>
    <h1>Welcome to My Page</h1>
  </MetaInjector>
);

export default Page;
```

---

## 🛠️ Configuration
SEO metadata is fetched from an external API:

```
https://example.com/api?url={page_url}
```

The API should return:
```json
{
  "title": "My Page Title",
  "description": "This is a description of my page.",
  "ogTitle": "Open Graph Title",
  "ogDescription": "Open Graph Description",
  "ogImage": "https://example.com/image.jpg"
}
```

---

## 🧪 Running Tests
To run unit tests:

```sh
npm test
```

---

## 📜 License
MIT License

---

### 💡 Contributing
Feel free to submit issues or PRs! 🚀
