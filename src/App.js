import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Checkout from "./components/Pages/Checkout";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";
import Carousel from './components/Carousel';
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import Profile from "./components/Pages/Profile";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <div>
      <Carousel />
      <ItemList />
      <Footer />
      
    </div>
  );
};


export default App;
