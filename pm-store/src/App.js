import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/NavHom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/AboutUs";
import SignIn from "./pages/Account/SignIn";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import Blogs from './pages/BlogPage';
import Blogs2 from './pages/BlogPage2';
import Story from './pages/Story';
import Vision from './pages/Vision';
import Community from './pages/Community';
import Login from './pages/Login';
import Signup from './pages/SIgnup';
import RegShop from './pages/RegShop';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import Impact from './pages/Impact';
import Product from "./pages/Product/Product";
import TC from './pages/TC'
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';
ReactGA.initialize('G-2QME7DHRZ4');

import urls from './url.json';


const Layout = () => {
  const location = useLocation();
  const [log, setLog] = useState(false);

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.post(`${urls.server}/api/auth/check`, { token: localStorage.getItem('user'), type: 'buyer' });
        if (res.data.ok) {
          setLog(true);
        }
        else {
          setLog(false);
          localStorage.removeItem('user');
        }
      }
      catch (error) {
        console.log(error);
        localStorage.removeItem('user');
      }
    }
    checkLogin();
  }, []);

  return (
    <div>
      <Header log={log} />
      <SpecialCase />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      {/* <FooterBottom /> */}
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        {/* ==================== Header Navlink Start here =================== */}
        <Route index element={<Home />}></Route>
        <Route path="/muklava" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blogs2" element={<Blogs2 />}></Route>
        <Route path="/story" element={<Story />}></Route>
        <Route path="/vision" element={<Vision />}></Route>
        <Route path="/impact" element={<Impact />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/ays" element={<RegShop />}></Route>
        <Route path="/terms&conditions" element={<TC />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/journal" element={<Journal />}></Route>
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
      </Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
