import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { RouteProps, withRouter } from 'react-router-dom';

import '../login.less'
import { logIn } from '../../../api/user'
import userStoreType from '../../../stores/user'

interface IProps {
    // history?:any;
    userStore?: userStoreType;
    errors?: string;
    [key: string]: any
}
const initialState = {
    username: process.env.NODE_ENV === 'development' ? 'admin000' : '',
    password: process.env.NODE_ENV === 'development' ? 'admin123456' : ''
};
type State = Readonly<typeof initialState>;

@(withRouter as any)
@observer
@inject('userStore')
class LoginForm extends Component<IProps & RouteProps, State> {

    // static defaultProps = { userStore: {} }
    readonly state: State = initialState;

    private onFinish = async (values: any) => {
        const res = await logIn(values)
        // console.log('Received values of form: ', values);
        const { userStore, history } = this.props
        userStore && userStore.handleLogin(res)

        if (res.state === 1) {
            message.info('登录成功！');
            setTimeout(() => {
                history.push('/home')
            }, 1000)
        }
        // const { handleLogin } = this.props.userStore
        // handleLogin(values)
    };

    render() {
        // console.log(process.env.NODE_ENV, this.props)
        const { username, password } = this.state
        return (
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true, username, password }}
                onFinish={this.onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入正确的登录名!' }]}
                >
                    <Input value={username} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入登录名" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入正确的密码!' }]}
                >
                    <Input
                        value={password}
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

// export default withRouter(LoginForm);
export default LoginForm;