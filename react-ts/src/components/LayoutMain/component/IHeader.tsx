import React from 'react';
// import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react'
import { Menu, Dropdown, Avatar } from 'antd';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
// import Icon from '@ant-design/icons';

// const { SubMenu } = Menu;
// const { Sider } = Layout;

type IProps = {
    [key: string]: any
}

const IHeader: React.FC<IProps> = inject('detailStore')(observer((props: IProps) => {

    const handleClick = (e: any) => {
        console.log('click ', e.keyPath);
    };
    const menu = (
        <Menu onClick={handleClick}>
            <Menu.Item key="0">
                <UserOutlined />
                个人设置
            </Menu.Item>
            <Menu.Item key="1">
                <SettingOutlined />
                个人中心
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <LogoutOutlined />
                退出登录
          </Menu.Item>
        </Menu>
    );
    return ((
        <Dropdown overlay={menu}>
            <span style={{ marginRight: '20px' }}>
                <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                <span>&nbsp;&nbsp;&nbsp;砺小行</span>
            </span>
        </Dropdown>
    ))
}));

export default IHeader;