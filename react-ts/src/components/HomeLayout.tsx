import React from 'react';
// import { Link } from "react-router-dom";
const HomeLayout: React.FC<{}> = props => {
    const {
        children,
        // location = {
        //     pathname: '',
        // },
    } = props;
    return (
        <div>
            公共组件
        {children}
        </div>
    )
};

export default HomeLayout;