import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Blogs from './pages/BlogPage';
import Blogs2 from './pages/BlogPage2';
import About from './pages/AboutUs';
import Story from './pages/Story';
import Home from './pages/Home';
import Vision from './pages/Vision';
import Community from './pages/Community';
import Login from './pages/Login';
import Signup from './pages/SIgnup';
import RegShop from './pages/RegShop';
import Profile from './pages/Profile';
import UploadProduct from './pages/UploadProduct';

function App() {
  return (
    <>
     <BrowserRouter>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Home />)} />
                <Route path="/about" element={(<About />)} />
                <Route path="/blogs" element={(<Blogs />)} />
                <Route path="/blogs2" element={(<Blogs2 />)} />
                <Route path="/story" element={(<Story />)} />
                <Route path="/vision" element={(<Vision />)} />
                <Route path="/community" element={(<Community />)} />
                <Route path="/login" element={(<Login />)} />
                <Route path="/signup" element={(<Signup />)} />
                <Route path="/ays" element={(<RegShop />)} />
                <Route path="/profile" element={(<Profile/>)} />
                <Route path="/upload-product" element={(<UploadProduct/>)} />
                </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
