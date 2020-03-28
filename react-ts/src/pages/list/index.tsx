import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react'
import { companyList } from '../../api/company'
type IProps = {
    name: string;
    [key: string]: any
}
const useFetch = (props: { name?: string | undefined; status?: string | undefined; desc?: string | undefined; startTime?: string | undefined; endTime?: string | undefined; pageNumber?: number | undefined; sidx?: string | undefined; sort?: string | undefined; pageSize?: number | undefined; } | undefined) => {
    const [data, updateData] = useState({});

    // empty array as second argument equivalent to componentDidMount
    // useEffect(() => {
    companyList({ ...props }).then(res => {
        // console.log(res);
        updateData(res)
    })
    // }, [props]);

    return data;
};
// import './App.css';
const List: React.FC<IProps> = inject('detailStore')(observer((props: IProps) => {
    // 初始化 init
    const handleInit = React.useCallback(() => {
        companyList({ ...props }).then(res => {
            console.log(res.state, res.page);
            setCount(res.state)
        })
        // const res = useFetch(props)
        // console.log(res);
    }, [props])

    useEffect(() => {
        // const res = useFetch(props)
        console.log(props);
        handleInit()
    }, [handleInit, props]) // 第二个参数设置为[], 表示不必对任何数据， 所以只在首次渲染时调用
    // 渲染
    // const res = useFetch(props)
    // console.log(res);
    // 
    const [count, setCount] = useState(0);
    const [hide, setHide] = React.useState(false);
    // 所有 Function Component 内函数必须用 React.useCallback 包裹，以保证准确性与性能
    const handleClick = React.useCallback(() => {
        setHide(isHide => !isHide)
    }, [])

    return React.useMemo(() =>
        <div className="App">
            <button onClick={handleInit}>
                请求参数
            </button>
            <button onClick={handleClick}>
                {hide ? '隐藏' : '显示'}  标题
            </button>
            {hide && <h3>List</h3>}
            <h6>{props.detailStore.name}</h6>
            <ul>
                {props.detailStore.arr.map((v: any) => <li key={v.name}>{v.name}</li>)}
            </ul>
            <Link to='/home'>首页</Link>
            <Link to='/lll'>空页面</Link>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>, [count, handleClick, handleInit, hide, props.detailStore.arr, props.detailStore.name]
    )
}));
List.defaultProps = {
    name: ''
}
export default List;