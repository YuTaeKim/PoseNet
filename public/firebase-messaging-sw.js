importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');
const config = {
  apiKey: 'AIzaSyAxMTpdwVls1Wfemj0FIDeP-bLG8OKZYGI',
  authDomain: 'familynote-66409.firebaseapp.com',
  databaseURL: 'https://familynote-66409.firebaseio.com',
  projectId: 'familynote-66409',
  storageBucket: 'familynote-66409.appspot.com',
  messagingSenderId: '1095494284612',
  appId: '1:1095494284612:web:cb4a71a79bbbdcad1c5311',
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload,
  );
  // Customize notification here
  //   const notificationTitle = 'Background Message Title';
  //   const notificationOptions = {
  //     body: 'Background M body.',
  //     icon: '/firese-l.p'
  //   };

  self.registration.showNotification(
    payload.notification.title,
    payload.notification.body,
  );
});
