import React from 'react';
import MetaInjector from 'seo-meta-injector';

const App = () => {
  return (
    <MetaInjector url={window.location.href}>
      <h1>React Page</h1>
    </MetaInjector>
  );
};

export default App;
