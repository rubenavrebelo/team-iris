import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageDemo from './components/demo/PageDemo';
import AdminPanel from './admin/Admin';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path={'/'}>
        <PageDemo/>
      </Route>
      <Route path={'/admin'}>
        <AdminPanel/>
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
