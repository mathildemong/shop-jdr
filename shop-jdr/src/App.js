import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
     
    <Router>
<NavBar/>
<Routes>
  <Route path="/" exact Component={Home}/>
  <Route path="/menu" exact Component={Menu}/>
  <Route path="/about" exact Component={About}/>
  <Route path="/about" exact Component={Contact}/>
 
</Routes>
<Footer/>
</Router>
 
    </div>
  );
}

export default App;