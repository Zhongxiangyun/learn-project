import React, { useContext } from 'react';
import { MyContext } from './Reducer'
export default () => {
    const { state, dispatch } = useContext(MyContext)
    // useReducer useContext createContext 实现redux
    return (
        <>
            <h1>ListRedux2</h1>
            <p>名字：{state.name}--年龄：{state.age}</p>
            <button onClick={() => {
                dispatch({
                    type: 'setname',
                    name: 'ListRedux2'
                })
            }}>setname</button>
            <button onClick={() => {
                dispatch({
                    type: 'setage',
                    age: 1599
                })
            }}>setage</button>
        </>
    )
}