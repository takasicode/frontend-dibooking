import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import HomePageAccount from './pages/HomepageAccount';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="account" element={<HomePageAccount />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
