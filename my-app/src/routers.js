import React  from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import LoginForm from "./components/loginForm";
import Registr from './components/registr'

export default () => (
  <Switch>
    <Route path="/" exact component={LoginForm}/>
    <Route path="/registr"  component={Registr}/>
  </Switch>
)
