import React, { useState , useEffect } from 'react';

import './App.scss';

//Import Components
import Layout from './Components/Layout/Layout';
import Content from './Components/Content/Content';




function App() {
  

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1")
      .then(res => res.json())
      .then(res => setCarts(res)
    )
  }, [])


  const [carts, setCarts] = useState([
  ])  

   console.log(carts)
  return (
    <div className="app">
      <Layout data={carts}>
        <Content/>
      </Layout>
    </div>
  );
}

export default App;
