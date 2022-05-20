import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PageDemo from './components/demo/PageDemo';
import AdminPanel from './admin/Admin';

function App() {
  return (
    <Router>
    <Routes>
      <Route path={'/'} element={<PageDemo/>}/>
      <Route path={'/admin'} element={<AdminPanel />}/>
    </Routes>
    </Router>
  );
}

export default App;
