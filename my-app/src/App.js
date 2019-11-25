import React from 'react';
import LoginForm from "./components/loginForm";
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers'

function App() {
  return (
    <BrowserRouter>
       <Routers />
    </BrowserRouter>
  );
}

export default App;
