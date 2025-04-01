import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CMSLayout from './components/CMSLayout';
import ComplaintList from './components/ComplaintList';
import ASETTPage from './components/ASETTPage';
import './App.css';

function App() {
  return (
    <Router>
      <CMSLayout>
        <Routes>
          <Route path="/complaints" element={<ComplaintList />} />
          <Route path="/asett" element={<ASETTPage />} />
          <Route path="/" element={<h1>Welcome to the CMS Dashboard</h1>} exact />
        </Routes>
      </CMSLayout>
    </Router>
  );
}

export default App; 