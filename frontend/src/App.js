import React from 'react'

import Layout from './components/layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';


function App() {
  return (
    <div data-testid="root">
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
