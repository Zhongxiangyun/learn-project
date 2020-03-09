import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LoginLayout from './components/LoginLayout'
import './login.less'
class Login extends Component {
    // private onFinish = (values: any) => {
    //     console.log('Received values of form: ', values);
    // };

    render() {
        return (
            <div className='login'>
                <LoginLayout></LoginLayout>
            </div>
        );
    }
}

export default Login;