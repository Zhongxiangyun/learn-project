// home.ts
import {action, observable} from 'mobx'

export default class HomeStore {

  @observable name: string = 'Clint'
  
  constructor (initialState: any = {}) {
    this.name = initialState.name;
  }

  @action setName(name: string) {
    this.name = name
  }
}
