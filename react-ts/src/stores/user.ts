import { action, observable } from 'mobx'
import { logIn } from '../api/user'
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
    password?: string;
    employeeId?: string;
    webToken?: string;
    state?: number;
}
export default class UserStore {

    @observable name: string = 'Clint'
    @observable arr: Cat[] = []
    @observable userInfo: UserInfo = {
        username: '',
        password: '',
    }

    constructor(initialState: any = { name: 'detail-store', arr: [{ name: 'Tom', color: 'red' }, { name: 'Jerry', age: '3', color: 'blue' }] }) {
        this.name = initialState.name;
        this.arr = initialState.arr;
    }

    @action
    public handleLogin = async (userInfo: UserInfo) => {
        let res = await logIn(userInfo)
        if (res.state === 1) {
            this.userInfo = { ...this.userInfo,state:res.state, username: res.name_, employeeId: res.employee_id_, webToken: res.web_token }
        }
        // console.log(this.userInfo);
        // this.arr.push(userInfo)
    }
    // public changeLogin = (item: Cat) => {
    //     // console.log(name, this);
    //     this.arr.push(item)
    // }
}