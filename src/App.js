import React from 'react';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
   <div>
      <Header />

      <HelloWorld name="maiyo" />

      <Footer />
   </div>
  );
}

export default App;

