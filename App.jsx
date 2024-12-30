import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TitlePage from './pages/TitlePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
