import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './About';
import Service from './Service';
import Search from './Search';
import Contact from './Contact'
import Error from './Error';
import Menu from './Menu';
import User from './User';

const App = () => {
   const Name = () => {
     return <h1> I am a Name Page...</h1>
   };

  return (
    <>
    <Menu/>
    <Switch>
      <Route exact path='/' component={About} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/search' component={Search} />
      <Route exact path='/contact' component={Contact} />  
      <Route path='/contact/Name' component={Name} />
      <Route path='/user/:fname/:lname' component={User} />
      {/* <Route component={Error} /> */}
      <Redirect to='/' />
    </Switch>


    {/* <About/>
    <Contact/> */}
    </>
  )
};

export default App;