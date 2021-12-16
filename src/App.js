import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import News from "./News";
import BlogSingle from "./BlogSingle";
import Contact from "./Contact";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
       <Route path="/services" element={<Services />} /> 
       <Route path="/blog" element={<News />} /> 
       <Route path="/contact" element={<Contact />} /> 
       <Route path="/blog/blog-single" element={<BlogSingle />} /> 
      </Routes>
    </BrowserRouter>
    </> 
  );
}

export default App;
