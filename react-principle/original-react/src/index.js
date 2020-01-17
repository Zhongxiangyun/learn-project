// import React from 'react';
// import ReactDOM from 'react-dom';

import React from './s-react';
import ReactDOM from './s-react-dom';

import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
/*
class AA extends React.Component {
    render (){
        return <h1 id='aa'>44444</h1>
    }
}
*/
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<AA />, document.getElementById('root'));
ReactDOM.render(<h1 id='aa'>44444</h1>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
