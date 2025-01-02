import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Sidebar2 from './pages/Sidebar2';
import Sidebar3 from './pages/Sidebar3';




export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/sidebar2" element={<Sidebar2/>} />
        <Route path="/sidebar3" element={<Sidebar3/>} />
<></>

        
      </Routes>
    </Router>
  );
}
