import React from 'react';
import {Route,Routes,Link,BrowserRouter as Router} from  'react-router-dom';
import './App.css';
import Counter from "./components/counter";
import About from "./components/about";
import Gallery from "./components/gallery";
import HitDetails from "./components/hitDetails";

function App() {
  return (
    <Router>
        <nav className="navbar navbar-expand navbar-brand m-2">
            <ul className="navbar-nav">
                <li className="nav-link"> <Link to="/home">Home</Link></li>
                <li className="nav-link"><Link to="/counter">Counter</Link></li>
                <li className="nav-link"><Link to="/gallery">Gallery</Link></li>
                <li className="nav-link"><Link to="/about">About</Link></li>
            </ul>
        </nav>
        <div className="m-4">
            <Routes>
                <Route path="/home"></Route>
                <Route path="/counter" element={<Counter/>}></Route>
                <Route path="/gallery" element={<Gallery/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/hitDetails/:id" element={<HitDetails/>}></Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
