import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import MyWork from '../../Pages/MyWork/MyWork';
import MoreThanCode from '../../Pages/MoreThanCode/MoreThanCode';
import Contact from '../../Pages/Contact/Contact';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/MyWork' component={MyWork}></Route>
      <Route exact path='/MoreThanCode' component={MoreThanCode}></Route>
      <Route exact path='/Contact' component={Contact}></Route>
    </Switch>
  );
}

export default Main;