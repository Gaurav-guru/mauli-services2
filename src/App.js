import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainApp from './MainApp'; // Renamed the previous App component to MainApp


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainApp />} />
        
      </Routes>
    </Router>
  );
};

export default App;
