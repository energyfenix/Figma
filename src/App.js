import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from "./components/banner/Banner"
import Footer from './components/footer/Footer';
import { useState } from 'react';
function App() {
  const [bg, setBg] = useState(false)
  return (
    <div className={`App ${bg? "show_App" : ""}`}>
      <button onClick={() => setBg(!bg)}>BACKGROUND</button>
      <Navbar/>
      <Banner/>
      <Footer/>

 
    </div>
  );
}

export default App;
