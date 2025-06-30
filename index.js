import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import { v4 as uuidV4 } from 'uuid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} />} />
      <Route path="/documents/:id" element={<App />} />
    </Routes>
  </Router>
);
