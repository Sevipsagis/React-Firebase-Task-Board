// Required for side-effects
const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
	apiKey: 'AIzaSyBQjSlDI6GRuWf0AJNuMMpWQWQsct6Bd1U',
	authDomain: 'web-app-01-3500.firebaseapp.com',
	databaseURL: 'https://web-app-01-3500.firebaseio.com',
	projectId: 'web-app-01-3500',
	storageBucket: 'web-app-01-3500.appspot.com',
	messagingSenderId: '722907794678',
	appId: '1:722907794678:web:ac8ac1a8d124214461b0d7'
});

const db = firebase.firestore();

module.exports = db;
