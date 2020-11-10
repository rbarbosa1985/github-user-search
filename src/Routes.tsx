import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';

const Routes = ()  => {
     return (
     <BrowserRouter>
          <Header/>
          <Switch>
               <Route path="/" exact> <Home /> </Route>
               <Route path="/search" exact> <Search /> </Route>
          </Switch>
     </BrowserRouter>
     );
};

export default Routes;