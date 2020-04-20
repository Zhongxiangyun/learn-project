import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { observer, inject } from 'mobx-react';
import homeStore from '../../stores/home';
import './home.less';
type IProps = {
    homeStore: homeStore;
    errors?: string;
};
@inject('homeStore')
@observer
// const Home: React.FC<{}> = () =>
class Home extends Component<IProps> {
    private clickHandler = (): void => {
        // const { homeStore } = this.props;
        // homeStore.setName("Bob");
        const { setName } = this.props.homeStore;
        setName('Bob666');
    };
    UNSAFE_componentWillMount(): void {
        console.log(`
        UNSAFE_componentWillMount
        执行场景
        在render()方法之前
        解释
        1 因为componentWillMount是在render之前执行，所以在这个方法中setState不会发生重新渲染(re-render);
        2 这是服务端渲染(server render)中唯一调用的钩子(hook);
        3 通常情况下，推荐用constructor()方法代替;
        `);
    }
    componentDidMount(): void {
        console.log(`
        componentDidMount
        执行场景
        在render()方法之后
        解释
        1 这个方法会在render()之后立即执行；
        2 这里可以对DOM进行操作，这个函数之后ref变成实际的DOM(@TODO 表述可能不清晰);
        3 这里可以加载服务器数据，并且如果使用了redux之类的数据服务，这里可以出发加载服务器数据的action;
        4 这里可以使用setState()方法触发重新渲染(re-render);
        `);
    }
    UNSAFE_componentWillReceiveProps(): void {
        console.log(`
        UNSAFE_componentWillReceiveProps
        执行场景
        在已经挂在的组件(mounted component)接收到新props时触发;
        简单的说是在除了第一次生命周期(componentWillMount -> render -> componentDidMount)之后的生命周期中出发;
        解释
        1 如果你需要在props发生变化(或者说新传入的props)来更新state，你可能需要比较this.props和nextProps, 然后使用this.setState()方法来改变this.state;
        注意
        1 React可能会在porps传入时即使没有发生改变的时候也发生重新渲染, 所以如果你想自己处理改变，请确保比较props当前值和下一次值; 这可能造成组件重新渲染;
        2 如果你只是调用this.setState()而不是从外部传入props, 那么不会触发componentWillReceiveProps(nextProps)函数；这就意味着: this.setState()方法不会触发componentWillReceiveProps(), props的改变或者props没有改变才会触发这个方法;
        `);
    }
    // shouldComponentUpdate: Boolean() {
    //     return true
    // }
    UNSAFE_componentWillUpdate(): void {
        console.log(`
        UNSAFE_componentWillUpdate
        执行场景
        在props或state发生改变或者shouldComponentUpdate(nextProps, nextState)触发后, 在render()之前
        解释
        1 这个方法在组件初始化时不会被调用;
        注意
        1 千万不要在这个函数中调用this.setState()方法.;
        2 如果确实需要响应props的改变，那么你可以在componentWillReceiveProps(nextProps)中做响应操作;
        3 如果shouldComponentUpdate(nextProps, nextState)返回false，那么componentWillUpdate()不会被触发;
        `);
    }
    componentDidUpdate(): void {
        console.log(`
        componentDidUpdate
        执行场景
        在发生更新或componentWillUpdate(nextProps, nextState)后
        解释
        1 该方法不会再组件初始化时触发;
        2 使用这个方法可以对组件中的DOM进行操作;
        3 只要你比较了this.props和nextProps，你想要发出网络请求(nextwork requests)时就可以发出, 当然你也可以不发出网络请求;
        注意
        如果shouldComponentUpdate(nextProps, nextState)返回false, 那么componentDidUpdate(prevProps, prevState)不会被触发;
        `);
    }
    componentWillUnmount(): void {
        console.log(`
        componentWillUnmount
        执行场景
        在组件卸载(unmounted)或销毁(destroyed)之前
        解释
        这个方法可以让你处理一些必要的清理操作，比如无效的timers、interval，或者取消网络请求，或者清理任何在componentDidMount()中创建的DOM元素(elements);
        `);
    }
    render(): JSX.Element {
        console.log(`
        render
        执行场景
        1 在componentWillMount()方法之后
        2 在componentWillReceive(nextProps, nextState)方法之后
        `);

        return (
            <div className="home">
                <h1 className="home-item">Home</h1>
                <h2>{this.props.homeStore.name}</h2>
                <Link to="/detail">详情</Link>
                <Link to="/login">登录</Link>
                <Button onClick={this.clickHandler} type="primary">
                    改名字
                </Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="link">Link</Button>
            </div>
        );
    }
}
// export default observer(Home);
export default Home;
