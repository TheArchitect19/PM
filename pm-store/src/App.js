import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/NavHom";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/AboutUs";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
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
import TC from './pages/TC'
import PP from './pages/PP'

const Layout = () => {
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
      <Route path="/signup" element={<SignUp />}></Route>
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
