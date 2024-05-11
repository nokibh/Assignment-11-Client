// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDqNWLa77dVpwQlfccYbZkDZPtK3j53-Rs',
  authDomain: 'assignment-11-89f3b.firebaseapp.com',
  projectId: 'assignment-11-89f3b',
  storageBucket: 'assignment-11-89f3b.appspot.com',
  messagingSenderId: '579588569314',
  appId: '1:579588569314:web:ddce78d57ce57e911346bb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
