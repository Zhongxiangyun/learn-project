import React from 'react';
import styles from './index.css';
const BasicLayout = props => {
    return (React.createElement("div", { className: styles.normal },
        React.createElement("h1", { className: styles.title }, "Yay! Welcome to umi!"),
        props.children));
};
export default BasicLayout;
//# sourceMappingURL=index.js.map