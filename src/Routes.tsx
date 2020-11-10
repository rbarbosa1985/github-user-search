import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

const Routes = ()  => {
     return (
     <BrowserRouter>
          <Header/>
          <Switch>
               <Route path="/" exact> <Home /> </Route>
          </Switch>
     </BrowserRouter>
     );
};

export default Routes;