
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-qlv_ErONyuoHkk4OP2q1yzajmlTe6Uc",
  authDomain: "net-ninja-marioplan-d0d5a.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-d0d5a.firebaseio.com",
  projectId: "net-ninja-marioplan-d0d5a",
  storageBucket: "net-ninja-marioplan-d0d5a.appspot.com",
  messagingSenderId: "515549877140",
  appId: "1:515549877140:web:845ee63a25d3b0b2"
};
// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 