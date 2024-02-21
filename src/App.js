import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";

import Header from "./Components1/Header";
import Inventory from "./Components1/Inventory";
import Channel from "./Components1/Channel";
import Orders from "./Components1/Orders";
import Shopping from "./Components1/Shopping";
import Dashbord from "./Components1/Dashbord";
import Navbar from "./Components2/Navbar";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />

        <nav className="navigation-bar">
          <NavLink to="/dashbord" className="nav-item" activeClassName="active">
            Dashboard
          </NavLink>

          <NavLink
            to="/inventory"
            className="nav-item"
            activeClassName="active"
          >
            Inventory
          </NavLink>
          <NavLink to="/channel" className="nav-item" activeClassName="active">
            Channel
          </NavLink>
          <NavLink to="/orders" className="nav-item" activeClassName="active">
            Orders
          </NavLink>
          <NavLink to="/shopping" className="nav-item" activeClassName="active">
            Shopping
          </NavLink>
        </nav>

        <Routes>
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
