import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import App from './App';
import './style.css';
import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL0alovLIu0LbmNGaLc1v7-EyZWymC980",
  authDomain: "scale-24890.firebaseapp.com",
  databaseURL: "https://scale-24890.firebaseio.com",
  projectId: "scale-24890",
  storageBucket: "scale-24890.appspot.com",
  messagingSenderId: "626563255849",
  appId: "1:626563255849:web:4f4372620f49a2cf"
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

const db = firebase.firestore();

db.collection("parametri").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().costoScale}`);
  });
});

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      costoScale: 11
    };
  }

  componentDidMount() {
    /*
    const rootRef = firebase.database().ref().child('parametri');
    const costoScaleRef = rootRef.child('costoScale');
    console.log(costoScaleRef);
    costoScaleRef.on('value', snap => {
      this.setState({
        costoScale: snap.val()
      });
    });
    */
    const this_ = this;
    const parametriRef = db.collection("parametri").doc("1");
    parametriRef.get().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        this_.setState({ costoScale: doc.data().costoScale });
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.costoScale}</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
