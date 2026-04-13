importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAk8sJuPI1N4EL1hD3CisVRoEs4nmudvP0", 
    authDomain: "damdymdb.firebaseapp.com", 
    projectId: "damdymdb", 
    storageBucket: "damdymdb.firebasestorage.app", 
    messagingSenderId: "43924470905", 
    appId: "1:43924470905:web:0310c5298da38d7f56a8a8" 
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Получено фоновое сообщение: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/apple-touch-icon.png' // Укажи путь к иконке
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
