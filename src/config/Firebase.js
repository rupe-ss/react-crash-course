import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyCqAzLXDuvGfFptMAkX8CbzYVwuHVHDOBo',
    authDomain: 'react-crash-course-acade-d96f7.firebaseapp.com',
    databaseURL:
        'https://react-crash-course-acade-d96f7-default-rtdb.firebaseio.com',
    projectId: 'react-crash-course-acade-d96f7',
    storageBucket: 'react-crash-course-acade-d96f7.appspot.com',
    messagingSenderId: '998697666182',
    appId: '1:998697666182:web:a1fdfbd8823ef895947307',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };
