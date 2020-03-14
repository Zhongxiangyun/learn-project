import React from 'react';
// import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react'
import { Layout, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import routers from '../../../router/router';
console.log((routers));

const { SubMenu } = Menu;
const { Sider } = Layout;

type IProps = {
    collapsed: boolean;
    [key: string]: any
}
export interface PathInfo {
    path: string;
    region: string[];
}
const MDiv = (arr: any[]) => {
    return (arr.map((item: any) => {
        // if (item.children.length > 0) { 
        //     return ({MDiv(item.children)})
        // }
        return (<Menu.Item key={item.path}>{item.title}</Menu.Item>)
    }))
}
const ISider: React.FC<IProps> = inject('detailStore')(observer((props: IProps) => {
    const paths:string|any = localStorage && localStorage.getItem('path')
    // TODO:默认路由显示
    console.log(JSON.parse(paths));

    const handleClick = (e: any) => {
        console.log('click ', e.keyPath);
        const pathContent: PathInfo = {
            path: e.keyPath[0],
            region: e.keyPath.slice(1)
        }
        localStorage.setItem('path', JSON.stringify(pathContent))
    };
    return ((
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" onClick={handleClick} defaultOpenKeys={['sub2', 'sub3']} defaultSelectedKeys={['8']}>
                {routers.length > 0 && routers.map(item => {
                    if (!item.hideInMenu && item.children.length > 0) {
                        return (
                            <SubMenu
                                key={item.path}
                                title={
                                    <span>
                                        <MailOutlined />
                                        <span>{item.title}</span>
                                    </span>
                                }
                            >
                                {MDiv(item.children)}
                            </SubMenu>
                        );
                    } else if (!item.hideInMenu && item.children.length === 0) {
                        return (<Menu.Item key={item.path}>
                            <AppstoreOutlined />
                            {item.title}</Menu.Item>)
                    } else {
                        return null;
                    }
                })}
                {/* <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <MailOutlined />
                            <span>Navigation One</span>
                        </span>
                    }
                >
                    <Menu.ItemGroup key="g1" title="Item 1">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <AppstoreOutlined />
                            <span>Navigation Two</span>
                        </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={
                        <span>
                            <SettingOutlined />
                            <span>Navigation Three</span>
                        </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                </SubMenu> */}
            </Menu>
        </Sider>
    ))
}));

export default ISider;