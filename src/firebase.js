import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyBTUnmJH4JAGOk9eXXeM4BN1rGeqorqK3I',
	authDomain: 'todolistpr-f0a2c.firebaseapp.com',
	projectId: 'todolistpr-f0a2c',
	storageBucket: 'todolistpr-f0a2c.appspot.com',
	messagingSenderId: '525748736667',
	appId: '1:525748736667:web:a9a34a4e575912f6476c3e',
	databaseURL:
		'https://todolistpr-f0a2c-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
