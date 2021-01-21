import { observable, action } from 'mobx';
import { createContext } from 'react';

class Test {
  @observable radio1: string = 'radio1';
  @observable radio2: string = 'radio2';
  @observable radio3: string = 'radio3';
  @observable radioValue: string = '';

  @observable checkBox1: string = 'checkBox1';
  @observable checkBox2: string = 'checkBox2';
  @observable checkBox3: string = 'checkBox3';
  @observable checkBoxValue: any[] = [];

  @observable select1: string = 'select1';
  @observable select2: string = 'select2';
  @observable select3: string = 'select3';
  @observable selectValue: string = '';

  @action setSelect = (e: any) => {
    this.selectValue = e.target.value;
  };

  @action setValue = (value: string) => {
    this.radioValue = value;
  };

  @action setCheck = (e: any) => {
    const { checked, value } = e.target;
    if (checked) {
      this.checkBoxValue.push(value);
    } else {
      const index = this.checkBoxValue.findIndex(
        (element) => element === value,
      );
      this.checkBoxValue.splice(index, 1);
    }
  };
}

const TestStore = new Test();
export default createContext(TestStore);
