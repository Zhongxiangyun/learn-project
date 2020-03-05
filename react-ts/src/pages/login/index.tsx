import React from 'react';
import { Link } from "react-router-dom";
const Login: React.FC<{}> = () => (
    <div>
        Login
    <Link to='/'>登录 /</Link>
    <br/>
    <Link to='/home'>登录 /home</Link>
    </div>
);

export default Login;