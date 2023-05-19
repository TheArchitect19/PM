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

function App() {
  return (
    <>
     <BrowserRouter>
              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Blogs />)} />
                <Route path="/about" element={(<About />)} />
                {/* <Route path="/blogs" element={(<Blogs />)} /> */}
                <Route path="/blogs2" element={(<Blogs2 />)} />
                <Route path="/story" element={(<Story />)} />
                <Route path="/vision" element={(<Vision />)} />
                <Route path="/community" element={(<Community />)} />
                </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
