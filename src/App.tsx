import React from 'react';
import { Layout } from './Layout';
import TodosProvider from './ProviderApp';

function App() {
  return (
    <div>
      <TodosProvider>
      <Layout/>
      </TodosProvider>
    </div>
  );
}

export default App;
