import React from 'react';
import { Link } from "react-router-dom";
import { observer, inject } from 'mobx-react'
type IProps = {
    [key: string]: any
}

// import './App.css';
const List: React.FC<IProps> = inject('detailStore')(observer((props: IProps) => {
    console.log(props);

    return (
        <div className="App">
            <h3>List</h3>
            <h6>{props.detailStore.name}</h6>
            <ul>
                {props.detailStore.arr.map((v: any) => <li key={v.name}>{v.name}</li>)}
            </ul>
            <Link to='/home'>首页</Link>
            <Link to='/lll'>空页面</Link>
        </div>
    )
}));

export default List;