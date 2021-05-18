import firebase from "firebase/app"
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyDYAVJh0jN--3c2_yIuxydZvLq9D5HejBU",
  authDomain: "projeto-rn-6a448.firebaseapp.com",
  projectId: "projeto-rn-6a448",
  storageBucket: "projeto-rn-6a448.appspot.com",
  messagingSenderId: "474719702511",
  appId: "1:474719702511:web:8ae9c9ea74981c7658fa1a",
  measurementId: "G-KRWDC15QMZ"
};

  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
firebase.firestore().settings({ experimentalForceLongPolling: true });


export default {
    firebase,
    db
}