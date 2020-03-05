import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { observer, inject } from 'mobx-react'
import homeStore from '../../stores/home'
import './home.less';

@inject('homeStore')
@observer
const Home: React.FC<{}> = () => (
    <div className="home">
        <h1 className='home-item'>Home</h1>
        <Link to='/detail'>详情</Link>
        <Link to='/login'>登录</Link>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="link">Link</Button>
    </div>
);

// export default observer(Home);
export default Home;