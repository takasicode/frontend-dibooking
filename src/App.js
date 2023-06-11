import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Register from './pages/Register/register';
import Login from './pages/Login/login';
import HomePageAccount from './pages/HomepageAccount';
import AboutUs from './pages/AboutUs';
import FieldDetails from './pages/FieldDetails';
import PaymentDetails from './pages/PaymentDetails';
import PaymentConfirmation from './pages/PaymentConfirmation';
import AccountDetails from './pages/AccountDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="account" element={<HomePageAccount />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="details" element={<FieldDetails />} />
        <Route path="payments" element={<PaymentDetails />} />
        <Route path="payments/confirmation" element={<PaymentConfirmation />} />
        <Route path="user" element={<AccountDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
