import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './components/Home/Home/Home'
import AdminPanel from './components/AdminPanel/AdminPanel/AdminPanel';
  
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/adminPanel">
          <AdminPanel />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
