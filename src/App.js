import React from 'react';
import {Route,Routes,Link,BrowserRouter as Router} from  'react-router-dom';
import './App.css';
import Counter from "./components/counter";
import About from "./components/about";

function App() {
  return (
    <Router>
        <nav className="navbar navbar-expand navbar-brand m-2">
            <ul className="navbar-nav">
                <li className="nav-link"> <Link to="/home">Home</Link></li>
                <li className="nav-link"><Link to="/counter">Counter</Link></li>
                <li className="nav-link"><Link to="/gallery">Gallery</Link></li>
                <li className="nav-link"> <Link to="/about">About</Link></li>
            </ul>
        </nav>
        <div className="container">
            <Routes>
                <Route path="/home"></Route>
                <Route path="/counter" element={<Counter/>}></Route>
                <Route path="/gallery" ></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
