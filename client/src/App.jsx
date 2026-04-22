import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Builder from './pages/Builder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/builder" />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </Router>
  );
}

export default App;
