import React from 'react';
import { Link } from "react-router-dom";
const NoMatch: React.FC<{}> = () => (
    <div style={{ backgroundColor: '#f00' }}>
        404
    <Link to='/'>首页</Link>
    </div>
);

export default NoMatch;