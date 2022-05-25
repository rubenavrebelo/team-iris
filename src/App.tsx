import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import PageDemo from './components/demo/PageDemo';
import AdminPanel from './admin/Admin';

function App() {
  return (
    <Router>
    <Routes>
      <Route path={'/'} element={<PageDemo/>}/>
      <Route path={'/admin/*'} element={<AdminPanel />}/>
      <Route path={'/login'} element={<Navigate replace to={'/admin/login'}/>}/>
    </Routes>
    </Router>
  );
}

export default App;
