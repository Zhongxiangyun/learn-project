import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Home from '../pages/home/index';
// import Detail from '../pages/detail/index';
import Login from '../pages/login/index'
import NoMatch from '../pages/nomatch/index'
// import HomeLayout from '../components/HomeLayout'
import App from '../App'
// HashRouter 哈希路由


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/detail" component={Detail} /> */}
            {/* <Route exact path="/" component={HomeLayout}>
                <Route exact path="/home" component={Home} />
                <Route exact path="/detail" component={Detail} />
            </Route> */}
            {/* <HomeLayout>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail" component={Detail} />
            </HomeLayout> */}
            <Route path="/" component={App} />
            {/* <Route render={ () => <App /> } /> */}
            {/* <Route component={NoMatch} /> */}
            <Route path="*" component={NoMatch} />
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;