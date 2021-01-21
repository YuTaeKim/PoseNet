import { createContext } from 'react';
// import Router from 'next/router';
import { observable, action } from 'mobx';
// import * as AuthAPI from 'api/Auth';

class Signup {
  @observable access: string = '';

  @observable phone: string = '';
  @observable phoneToken: string = '';
  @observable phoneError: string = '';

  @observable code: string = '';
  @observable codeError: string = '';

  @observable count: number = 180;

  @observable nickname: string = '';
  @observable nicknameLoading: boolean = false;
  @observable nicknameError: string = '';

  @observable image: any = { file: null, preview: null };

  @action setPhone = (e: any) => {
    var reg = /^\d+$/;
    if (e.target.value && !reg.test(e.target.value)) {
      this.phoneError = '숫자만 입력해주세요';
    } else {
      this.phone = e.target.value;
      this.phoneError = '';
    }
  };

  @action setCode = (e: any) => {
    var reg = /^\d+$/;
    const value = e.target.value;
    if (value && !reg.test(value)) {
      this.codeError = '숫자만 입력해주세요';
    } else {
      if (value.length < 7) {
        this.code = value;
      }
      this.codeError = '';
    }
  };

  @action setNickname = (e: any) => {
    const value = e.target.value;
    this.nickname = e.target.value;
    this.nicknameError = '';
    if (value.length > 2) {
      const data = {
        nickname: e.target.value,
      };
      console.log(data);
      this.nicknameLoading = true;
      // setTimeout(() => {
      //   AuthAPI.nicknameConfirm(data)
      //     .then()
      //     .catch((e) => {
      //       const error = e.response.data;
      //       this.nicknameError = error?.nickname;
      //     })
      //     .finally(() => {
      //       this.nicknameLoading = false;
      //     });
      // }, 800);
    }
  };

  @action sendSMS = () => {
    const data = {
      phone: this.phone,
    };
    console.log(data);
    // return AuthAPI.phoneVerifier(data);
  };

  @action confirmSMS = () => {
    const data = {
      phone: this.phone,
      code: this.code,
    };
    console.log(data);
    // return AuthAPI.phoneConfirm(data);
  };

  @action register = async () => {
    const formdata = new FormData();
    formdata.append('phone', this.phone);
    formdata.append('phone_token', this.phoneToken);
    formdata.append('nickname', this.nickname);
    formdata.append('access', this.access);
    if (this.image.file) {
      formdata.append('avatar', this.image.file);
    }
    // AuthAPI.register(formdata)
    //   .then(() => {
    //     Router.push('/');
    //   })
    //   .catch(() => {
    //     alert('회원가입 중 오류가 발생했습니다.\n처음부터 다시 진행해주세요.');
    //     Router.push('/login');
    //   });
  };
}
const signupStore = new Signup();
export default createContext(signupStore);
