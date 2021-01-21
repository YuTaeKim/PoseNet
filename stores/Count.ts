import { observable, action } from 'mobx';

class Count {
  @observable number: number = 0;

  @action increase = () => {
    this.number++;
  };
  @action decrease = () => {
    this.number--;
  };
}

const countStore = new Count();
export default countStore;
