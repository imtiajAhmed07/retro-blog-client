import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './components/Home/Home/Home'
import AdminPanel from './components/AdminPanel/AdminPanel/AdminPanel';
import AdminHome from "./components/AdminPanel/Pages/AdminHome/AdminHome";
import Blog from './components/AdminPanel/Pages/Blog/Blog';
import BlogList from './components/AdminPanel/Pages/BlogList/BlogList/BlogList';
  
function App() {

  const pathName = window.location.pathname

  return (
    <Router>
      { pathName.includes("admin") ? <AdminPanel /> : null }
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/admin">
          <AdminHome />
        </Route>
        <Route path="/admin/post-blog">
          <Blog />
        </Route>
        <Route path="/admin/blog-list" >
          <BlogList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
