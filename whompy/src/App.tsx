import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/component';
import CataloguePage from './pages/catalogue/component';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<CataloguePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
