import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Home from './home';
import Detail from './detail';
const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <HashRouter >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
