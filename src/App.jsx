import Header from "./components/header";
import './styles/App.css'
import './styles/header.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
// import { useEffect } from "react";

function App() {


  return <Router>
    <Header/>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/exchanges" element={<Exchanges/>}/>
      <Route path="/coins" element={<Coins/>}/>
      <Route path="/coins/:id" element={<CoinDetails/>}/>
    </Routes>
    <Footer/>
  </Router>
}

export default App;
