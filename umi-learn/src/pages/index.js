import React from 'react';
import styles from './index.css';
import { Button } from 'antd';
import { Link } from 'umi';
export default function () {
    return (React.createElement("div", { className: styles.normal },
        React.createElement("div", { className: styles.welcome }),
        React.createElement(Button, { type: "primary" }, "Primar11y"),
        React.createElement(Button, null, "Default"),
        React.createElement(Button, { type: "dashed" }, "Dashed"),
        React.createElement(Button, { type: "link" }, "Link"),
        React.createElement(Link, { to: "/home" }, "home"),
        React.createElement("ul", { className: styles.list },
            React.createElement("li", null,
                React.createElement("a", { href: "https://umijs.org/guide/getting-started.html" }, "Getting Started")))));
}
//# sourceMappingURL=index.js.map