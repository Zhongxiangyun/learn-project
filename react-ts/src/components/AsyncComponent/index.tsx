// 分包加载
import React, { Component } from "react";
const initialState = {
    component: null,
};
type State = typeof initialState;
export default function asyncComponent(importComponent: () => PromiseLike<{ default: any; }> | { default: any; }) {
    class AsyncComponent extends Component {
        state: State = initialState;

        async componentDidMount() {
            const { default: component } = await importComponent();

            this.setState({
                component: component
            });
        }

        render() {
            const C: any = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}