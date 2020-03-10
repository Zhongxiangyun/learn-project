import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../login.less'
import userStore from '../../../stores/user'
// interface userStore {
//     handleLogin: ()=>void
//     errors?: string
//     [key: string]: any
// }
interface IProps {
    userStore?: userStore
    errors?: string
    [key: string]: any
}
const initialState = {
    username: process.env.NODE_ENV === 'development' ? 'admin000' : '',
    password: process.env.NODE_ENV === 'development' ? 'admin123456' : ''
};
type State = Readonly<typeof initialState>;

@observer
@inject('userStore')
class LoginForm extends Component<IProps, {}> {
    static defaultProps = { userStore: {} }
    readonly state: State = initialState;

    private onFinish = (values: any) => {
        // console.log('Received values of form: ', values);
        const { userStore } = this.props
        userStore && userStore.handleLogin(values)
        setTimeout(()=>{
            console.log(userStore && userStore.userInfo.state);
        },0)
        
        // const { handleLogin } = this.props.userStore
        // handleLogin(values)
    };

    render() {
        console.log(process.env.NODE_ENV, this.props.userStore)
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

export default LoginForm;