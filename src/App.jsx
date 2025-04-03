// src/App.jsx

import React from 'react';
import Home from './Home';
import AddBook from './components/addBook';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import global styles

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-book" element={<AddBook />} />
            </Routes>
        </Router>
  );
}

export default App;
