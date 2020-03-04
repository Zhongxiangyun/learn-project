import React from 'react';
import styles from './index.css';
import { Button } from 'antd';
import { Link } from 'umi';
export default function () {
    return (React.createElement("div", { className: styles.normal },
        React.createElement("div", { className: styles.welcome }),
        React.createElement("li", null,
            "To get started, edit ",
            React.createElement("code", null, "src/pages/index.js"),
            " and save to reload."),
        React.createElement(Button, { type: "primary" }, "home"),
        React.createElement(Button, null, "home"),
        React.createElement(Button, { type: "dashed" }, "home"),
        React.createElement(Button, { type: "link" }, "home"),
        React.createElement(Link, { to: "/" }, "\u8FD4\u56DE33")));
}
//# sourceMappingURL=home.js.map