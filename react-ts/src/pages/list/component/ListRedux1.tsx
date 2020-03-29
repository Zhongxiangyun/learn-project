import React, { useContext } from 'react';
import { MyContext } from './Reducer'
export default () => {
    const { state, dispatch } = useContext(MyContext)
    // useReducer useContext createContext 实现redux
    return (
        <>
            <h1>ListRedux1</h1>
            <p>名字：{state.name}--年龄：{state.age}</p>
            <button onClick={() => {
                dispatch({
                    type: 'setname',
                    name: 'ListRedux1'
                })
            }}>setname</button>
            <button onClick={() => {
                dispatch({
                    type: 'setage',
                    age: 15
                })
            }}>setage</button>
        </>
    )
}