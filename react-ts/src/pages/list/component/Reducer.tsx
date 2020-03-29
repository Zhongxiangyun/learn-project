// 实现数据共享 ListRedux1.tsx  ListRedux2.tsx
// 1. 实现reducer
// 2. 创建context

import React, { createContext, useReducer } from 'react';
const data = { name: '啊啊', age: 88 }
export const MyContext:any = createContext(data)
const reducer = (state: { name?: string; age?: number;[key: string]: any } | any, action: { type: string; name?: string; age?: number; }) => {
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
}
export const Reducer = (props: { children: React.ReactNode; } | any) => {
    // useReducer useContext createContext 实现redux
    const [state, dispatch] = useReducer(reducer, data)
    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MyContext.Provider>
    )
}