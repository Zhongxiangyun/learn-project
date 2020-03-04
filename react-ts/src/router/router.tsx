import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../home';
import Detail from '../detail';
import Login from '../pages/login/index'
import NoMatch from '../pages/404/index'
import HomeLayout from '../components/HomeLayout'
// HashRouter 哈希路由


const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={HomeLayout}>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail" component={Detail} />
            </Route> */}
            <Route exact path="/login" component={Login} />
            <HomeLayout>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail" component={Detail} />
            </HomeLayout>
            <Route path="*" component={NoMatch} />
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;