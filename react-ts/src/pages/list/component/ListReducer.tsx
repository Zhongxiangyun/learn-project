import React, { useReducer } from 'react';

export default () => {
    // const [state, dispatch] = useReducer(reducer, initialState, init)
    const [state, dispatch] = useReducer((state: any, action: { type: string; name?: string; age?: number; }) => {
        switch (action.type) {
            case "setname":
                return {
                    ...state,
                    name: action.name
                }
            case "setage":
                return {
                    ...state,
                    age: action.age
                }
            default:
                return state
        }
    }, { name: '哈哈', age: '22' })
    return (
        <>
            <h1>我是useReducer</h1>
            <p>我是子组件的 name：{state.name}</p>
            <p>我是子组件的 age：{state.age}</p>
            <button onClick={() => {
                dispatch({
                    type: 'setname',
                    name: '哦哦哦'
                })
            }}>setname</button>
            <button onClick={() => {
                dispatch({
                    type: 'setage',
                    age: 66
                })
            }}>setage</button>
        </>
    )
}