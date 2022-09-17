import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import DetailPage from "./Pages/DetailPage";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <nav>
          <h1>My Life</h1>
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: 'none', margin: '1rem' }}>Home</Link>
            </li>
            <li>
              <Link to="/blog" style={{ textDecoration: 'none', margin: '1rem' }}>Blog</Link>
            </li>
            <li>
              <Link to="/contact" style={{ textDecoration: 'none', margin: '1rem' }}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="grid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
