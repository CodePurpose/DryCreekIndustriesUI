import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";

const title = { name: "DRY CREEK INDUSTRIES", subTitle: "General Contracting" };

const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Testimonials",
    path: "/"
  },
  {
    name: "Gallery",
    path: "/"
  },
  {
    name: "Contact Us",
    path: "/"
  }
];

function App() {
  return (
    <div className="App">
      <NavBar links={links} title={title} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
      </header>
    </div>
  );
}

export default App;
