import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyD3dB8L07bQF5uhQYS5KMoJsoXTuVNs3Fw",
  authDomain: "new-project-learning-e27af.firebaseapp.com",
  databaseURL: "https://new-project-learning-e27af.firebaseio.com",
  projectId: "new-project-learning-e27af",
  storageBucket: "new-project-learning-e27af.appspot.com",
  messagingSenderId: "864740331378",
  appId: "1:864740331378:web:72b3ccea8fa2301b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// firebaseApp.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore();
