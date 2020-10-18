import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../pages/Home/Home';
import Favorites from '../pages/Favorites/Favorites';
import SelectedFruit from '../components/SelectedFruit/SelectedFruit';
const Layout = () => {

    return <div>
       <Header></Header>
       <Switch>
       <Route path='/' exact component={Home}></Route>
       <Route path="/favorites" exact component={Favorites}></Route>
       <Route path="/selected-fruit/:fruit" exact component={SelectedFruit}></Route>
       </Switch>
  </div>;
};

export default Layout;
