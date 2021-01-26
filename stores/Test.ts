import Router from 'next/router';
import { ChangeEvent, createContext } from 'react';
import { observable, action } from 'mobx';

class Test {
  @observable name: string = '';
  @observable nameError: string = '';
  @observable password: string = '';
  @observable passwordError: string = '';
}

const testStore = new Test();
export default createContext(testStore);
