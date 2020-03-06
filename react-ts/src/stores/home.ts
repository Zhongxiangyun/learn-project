// home.ts
import { action, observable } from 'mobx'

export default class HomeStore {

  @observable name: string = 'Clint'

  constructor(initialState: any = { name: 'store' }) {
    this.name = initialState.name;
  }

  @action
  public setName = (name: string) => {
    // console.log(name, this);
    this.name = name
  }
}
