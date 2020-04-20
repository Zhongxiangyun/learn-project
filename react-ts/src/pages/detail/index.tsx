import React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
type IProps = {
    [key: string]: any;
};

// import './App.css';
const Detail: React.FC<IProps> = inject('detailStore')(
    observer((props: IProps) => (
        <div className="App">
            <h3>Detail</h3>
            <h6>{props.detailStore.name}</h6>
            <ul>
                {props.detailStore.arr.map((v: any) => (
                    <li key={v.name}>{v.name}</li>
                ))}
            </ul>
            <Link to="/home">首页</Link>
            <br />
            <Link to="/lll">空页面</Link>
            <br />
            <Link to="/list">列表</Link>
        </div>
    )),
);

export default Detail;
