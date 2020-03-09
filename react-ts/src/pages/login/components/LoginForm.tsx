import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../login.less'
import userStore from '../../../stores/user'
interface IProps {
    userStore: userStore
    errors?: string
    [key: string]: any
}
@inject('userStore')
@observer
class LoginForm extends Component<IProps> {
    private onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        const {handleLogin}=this.props.userStore
        handleLogin(values)
    };

    render() {
        console.log(this.props)
        return (
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入正确的登录名!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入登录名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入正确的密码!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="请输入密码"
                    />
                </Form.Item>
                {/* <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                </Form.Item> */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登 录
              </Button>
                </Form.Item>
            </Form>

        );
    }
}

export default LoginForm;