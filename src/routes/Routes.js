import Login from '../pages/Login/Login';
import Welcome from '../pages/Welcome/Welcome';
import Register from '../pages/Register/Register';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/welcome" component={Welcome}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
