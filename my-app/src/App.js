import React from 'react';
import LoginForm from "./components/loginForm";
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const store = createStore(todos, ['Use Redux'])
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
       <Routers />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
