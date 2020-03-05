import React from 'react';
import { Link } from "react-router-dom";
// import './App.css';
const Detail: React.FC<{}> = () => (
    <div className="App">
        Detail
    <Link to='/home'>首页</Link>
        <Link to='/lll'>空页面</Link>
    </div>
);

export default Detail;