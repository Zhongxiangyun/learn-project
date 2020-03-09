import React from 'react';
import LoginForm from './LoginForm'
// import { Link } from "react-router-dom";
// import { observer, inject } from 'mobx-react'
import { Row, Col, Card } from 'antd';
import logo from '../../../assets/logo.png';
// type IProps = {
//     [key: string]: any
// }

// const LoginLayout: React.FC<{}> = inject('detailStore')(observer((props: IProps) => (
const LoginLayout: React.FC<{}> = () => (
    <Row>
        <Col xs={0} md={8} lg={8} xl={8} xxl={8}></Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
            <div className='login-company'>
                <div className='login-name'>
                    <img src={logo} alt="" />
                    <span>登岸教育</span>
                </div>
                <Card title="欢迎登录" className={'logincard'}>
                    <LoginForm></LoginForm>
                </Card>
            </div>
        </Col>
        <Col xs={0} md={8} lg={8} xl={8} xxl={8}></Col>
    </Row>
);

export default LoginLayout;