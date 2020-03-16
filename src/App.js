import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Main from './components/pages/Main'
import { MyContext } from './myContext'
import NotFound from './components/pages/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <MyContext>
          <Route path='/' component={Main} />
        </MyContext>
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
