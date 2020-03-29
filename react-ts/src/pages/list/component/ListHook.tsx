import React, { useState } from 'react';
// 自定义hook
const useDemo = (val: number, num: number) => {
    const [count, setCount] = useState(val);
    // const [num, setNum] = useState(0);
    console.log('自定义hook');
    const add = () => {
        setCount(count + num)
    }
    return { count, add }
}

export default () => {
    const { count, add } = useDemo(10, 2)
    return (
        <>
            <h1>自定义hook</h1>
            <h2>{count}</h2>
            <button onClick={()=>{
                add()
            }}>自定义hook</button>
        </>
    )
}