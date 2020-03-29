import React, { useContext } from 'react';
import { ListContext } from './ListContext'

export default () => {
    const obj = useContext(ListContext)
    return (
        <>
            <h1>我是子组件lll</h1>
            <p>我是子组件的 count：{obj.name}</p>
        </>
    )
}