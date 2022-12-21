import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HomePage from './Components/HomePage';
import ContactPage from "./Components/ContactPage";
import AboutUs from "./Components/AboutPage";
import LoginBtn from "./Components/LoginBtn";

import './App.css';
import ErrorPage from './Components/ErrorPage';



function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
            <li>
              <Link to="AboutUs">AboutUs</Link>
            </li>
            <li class = "btn">
            
            <button onClick ="displayLogin">Log In</button>
        
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="*" element={<>{<ErrorPage />}</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
