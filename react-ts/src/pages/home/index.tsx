import React from 'react';
import { Link } from "react-router-dom";
// import './App.css';
const Home: React.FC<{}> = () => (
  <div className="App">
    Home
    <Link to='/detail'>详情</Link>
    <Link to='/login'>登录</Link>
  </div>
);

export default Home;