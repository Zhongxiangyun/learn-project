import { action, observable } from 'mobx'
// import { logIn } from '../api/user'
export interface IArray {
    [key: string]: any
}
export interface Cat {
    name: string;
    age?: number | string;
    color?: string;
}
export interface UserInfo {
    username: string;
    password: string;
}
export default class UserStore {

    @observable name: string = 'Clint'
    @observable arr: Cat[] = []

    constructor(initialState: any = { name: 'detail-store', arr: [{ name: 'Tom', color: 'red' }, { name: 'Jerry', age: '3', color: 'blue' }] }) {
        this.name = initialState.name;
        this.arr = initialState.arr;
    }

    @action
    public handleLogin = (userInfo: UserInfo) => {
        console.log(userInfo);
        // this.name = name
    }
    public changeArray = (item: Cat) => {
        // console.log(name, this);
        this.arr.push(item)
    }
}