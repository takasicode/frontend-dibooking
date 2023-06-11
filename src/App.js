import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/home';
import About from './pages/Homepage/about';
import Register from './pages/Register/register';
import Login from './pages/Login/login';
import HomePageAccount from './pages/HomepageAccount/home';
import AboutUs from './pages/HomepageAccount/about';
import FieldDetails from './pages/FieldDetails/detailsProduct';
import PaymentDetails from './pages/Payment/paymentDetails';
import PaymentConfirmation from './pages/Payment/paymentConfirmation';
import AccountDetails from './pages/AccountDetails/accountDetails';
import Booking from './pages/Booking/booking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="account" element={<HomePageAccount />} />
        <Route path="account/about" element={<AboutUs />} />
        <Route path="detail" element={<FieldDetails />} />
        <Route path="payment" element={<PaymentDetails />} />
        <Route path="payment/confirmation" element={<PaymentConfirmation />} />
        <Route path="user" element={<AccountDetails />} />
        <Route path="booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
