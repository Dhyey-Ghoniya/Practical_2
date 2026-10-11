import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TaskManager from './components/TaskManager';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="container main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Ghoniya Dhyey (24CS024) - CHARUSAT CSPIT. Practical 2 State & Routing.
        </div>
      </footer>
    </div>
  );
}

export default App;