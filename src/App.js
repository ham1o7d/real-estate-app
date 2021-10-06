

import './App.css';
// components 
import Navbar from './components/Navbar';
import Header from './components/Header';
import Hero from './components/Hero';

import { sliderData } from './data/sliderData';

function App() {

  


  return (
    <div className="App" >
      <Navbar />
      <Header />
      <Hero slides={sliderData} /> 
      
    </div>
  );
}

export default App;
