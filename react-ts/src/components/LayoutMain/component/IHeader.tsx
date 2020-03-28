import React from 'react';
// import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react'
import { Menu, Dropdown, Avatar } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
// import Icon from '@ant-design/icons';
import { logOut } from '../../../api/user'

type IProps = {
    [key: string]: any
}

const IHeader: React.FC<IProps> = inject('userStore')(observer((props: IProps) => {
    const loginName: string = props.userStore.userInfo.username || JSON.parse(localStorage.getItem('jyuser') || '').username || '砺小行'
    const handleClick = (e: any) => {
        e.keyPath[0] === 'logout' && logOut().then(res => {
            if (res.state === 1) {
                props.handleLogOut()
                // localStorage && localStorage.removeItem('path')
            }
        })
    };
    const menu = (
        <Menu onClick={handleClick}>
            {/* <Menu.Item key="setting">
                <UserOutlined />
                个人设置
            </Menu.Item>
            <Menu.Item key="center">
                <SettingOutlined />
                个人中心
            </Menu.Item>
            <Menu.Divider /> */}
            <Menu.Item key="logout">
                <LogoutOutlined />
                退出登录
          </Menu.Item>
        </Menu>
    );
    return ((
        <Dropdown overlay={menu}>
            <span style={{ marginRight: '20px' }}>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                <span>&nbsp;&nbsp;&nbsp;{loginName}</span>
            </span>
        </Dropdown>
    ))
}));

export default IHeader;