import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
           m  <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;
  