import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Sidebar2 from './pages/Sidebar2';
import Sidebar3 from './pages/Sidebar3';
import Sidebar4_1 from './pages/Sidebar4_1';
import Form1Page from './pages/Form1Page';
import Form2Page from './pages/Form2Page';
import Dashboard from './pages/Dashboard';
import DragCardPage from './pages/DragCardPage';




export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/sidebar2" element={<Sidebar2/>} />
        <Route path="/sidebar3" element={<Sidebar3/>} />
        <Route path="/sidebar4_1" element={<Sidebar4_1/>} />
        <Route path="/form1" element={<Form1Page/>} />
        <Route path="/form2" element={<Form2Page/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/drag" element={<DragCardPage/>} />


        
      </Routes>
    </Router>
  );
}
