import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard';
import HomePage from './components/homePage';
import Login from './components/login';
import Navigation from './components/navigation';
import Unauthorized from './components/ErrorPages/Unauthorized';
import "./scss/main.scss";
import "./input.css";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Navigation />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/unauthorized" element={<Unauthorized />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
