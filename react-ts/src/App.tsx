import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home/index';
import Detail from './pages/detail/index';
import HomeLayout from './components/HomeLayout'
import NoMatch from './pages/nomatch/index'

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <HomeLayout></HomeLayout>
      {/* <HashRouter > */}
        {/* <Switch> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/detail" component={Detail} />
          {/* <Route component={NoMatch} /> */}

        {/* </Switch> */}
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
