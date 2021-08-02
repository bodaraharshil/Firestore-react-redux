import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './component/layout/navbar';
import Dashboard from './component/dashboard/dashboard';
import Projectdetail from './component/projects/projectdetail';
import Signin from './component/auth/signin';
import Signup from './component/auth/signup';
import CreateProject from './component/projects/createproject';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/project/:id" component={Projectdetail}/>
        <Route path="/signin" component={Signin}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/createproject" component={CreateProject}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
