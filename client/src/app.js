import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/login';

const App = () => (
  <div>
  <Navigation/>
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/login" component={Login}/>
  <Route path="/logout" component={Logout}/>
  </Switch>
  </div>
);

const Home = () => (
  <h1>Home</h1>
);

const Logout = () => (
  <h1>Hmm</h1>
);

const WithRouting = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
  );

ReactDOM.render(<WithRouting />, document.getElementById('root'));