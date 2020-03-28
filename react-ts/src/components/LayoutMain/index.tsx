import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom';

import './layoutMain.less'
import ISider from './component/ISider'
import IHeader from './component/IHeader'

const { Header, Footer, Content } = Layout;
interface IProps {
    // history?:any;
    // userStore?: userStoreType;
    errors?: string;
    [key: string]: any
}

const initialState = {
    collapsed: false,
};
type State = typeof initialState;

@(withRouter as any)
class HomeLayout extends Component<IProps, State> {
    state: State = initialState;
    private toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    public handleRouter = (e: string = '/login') => {
        this.props.history.replace(e)
    }
    render() {
        const { children } = this.props;

        return (
            <Layout className='main'>
                <ISider handleRouter={this.handleRouter} collapsed={this.state.collapsed}></ISider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                        <IHeader handleLogOut={this.handleRouter}></IHeader>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            backgroundColor: '#fff'
                        }}
                    >
                        {children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Copyright © 2014-2020 浙江砺行教育科技有限公司版权所有 浙ICP备19037603号</Footer>
                </Layout>
            </Layout>
        )
    }
};

export default HomeLayout;