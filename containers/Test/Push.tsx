import React, { useEffect, useState } from 'react';
import firebase from 'firebase'; //firebase모듈을 import해줘야 합니다.
import axios from 'axios';

const Push = () => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const config = {
      apiKey: 'AIzaSyAxMTpdwVls1Wfemj0FIDeP-bLG8OKZYGI',
      authDomain: 'familynote-66409.firebaseapp.com',
      databaseURL: 'https://familynote-66409.firebaseio.com',
      projectId: 'familynote-66409',
      storageBucket: 'familynote-66409.appspot.com',
      messagingSenderId: '1095494284612',
      appId: '1:1095494284612:web:cb4a71a79bbbdcad1c5311',
    };
    console.log('check');
    firebase.initializeApp(config);
    console.log('check2');

    // const messaging = firebase.messaging();

    // Notification.requestPermission().then((flag) => {
    //   if (flag === 'granted') {
    //     messaging
    //       .getToken()
    //       .then((token) => {
    //         if (token) {
    //           console.log(token);
    //           setToken(token);
    //           localStorage.setItem('token', token);
    //         }
    //       })
    //       .catch((err) => {
    //         console.log('fcm에러 : ', err);
    //       });
    //   }
    // });

    // messaging.onMessage((payload) => {
    //   console.log('Message received. ', payload);
    //   // ...

    //   var notify = new Notification(payload.notification.title, {
    //     body: payload.notification.body,
    //   });
    // });
  }, []);

  return <div>{token ? token : null}</div>;
};

export default Push;
