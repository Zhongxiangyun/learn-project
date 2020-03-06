import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { observer, inject } from 'mobx-react'
import homeStore from '../../stores/home'
import './home.less';
type IProps = {
    homeStore: homeStore
    errors?: string
}
@inject('homeStore')
@observer
// const Home: React.FC<{}> = () => 
class Home extends Component<IProps> {
    private clickHandler = (): void => {
        // const { homeStore } = this.props;
        // homeStore.setName("Bob");
        const {setName}=this.props.homeStore
        setName("Bob666")
    }

    render() {
        console.log(this.props);

        return (
            <div className="home">
                <h1 className='home-item'>Home</h1>
                <h2>{this.props.homeStore.name}</h2>
                <Link to='/detail'>详情</Link>
                <Link to='/login'>登录</Link>
                <Button onClick={this.clickHandler} type="primary">改名字</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
            </div>
        )
    }
}
;

// export default observer(Home);
export default Home;