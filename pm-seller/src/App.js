import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, createRoutesFromElements, Route, ScrollRestoration } from "react-router-dom";
import Footer from "./components/Git";
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
import Blogs from "./pages/BlogPage";
import Blogs2 from "./pages/BlogPage2";
import Story from "./pages/Story";
import Vision from "./pages/Vision";
import Community from "./pages/Community";
// import Login from './pages/Login';
import Signup from "./pages/SIgnup";
import RegShop from "./pages/RegShop";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import Upload1 from "./pages/Upload1";
import Impact from "./pages/Impact";
import Product from "./pages/Product/Product";
import TC from "./pages/TC";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
ReactGA.initialize("G-2QME7DHRZ4");


const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div>
      <Header />
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
        <Route index element={<Home />} />
        <Route path="/muklava" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs2" element={<Blogs2 />} />
        <Route path="/story" element={<Story />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reg-shops" element={<Upload />} />
        <Route path="/upload" element={<Upload1 />} />
        <Route path="/products" element={<Product />} />
        <Route path="/ays" element={<RegShop />} />
        <Route path="/terms&conditions" element={<TC />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/journal" element={<Journal />} />
        {/* ==================== Header Navlink End here ===================== */}
        <Route path="/offer" element={<Offer />} />
        <Route path="/product/:_id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/paymentgateway" element={<Payment />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
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
