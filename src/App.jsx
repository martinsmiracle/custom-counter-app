
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './Counter';
import NotFound from './NotFound';
import ErrorBoundaryTest from './ErrorBoundaryTest';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Counter/>} />
        <Route path="/ErrorBoundaryTest" element={<ErrorBoundaryTest/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;

