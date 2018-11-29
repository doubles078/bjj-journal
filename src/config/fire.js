import firebase from "firebase";

var config = {
  apiKey: process.env.FBAPIKEY,
  authDomain: "little-fighter-dude.firebaseapp.com",
  databaseURL: "https://little-fighter-dude.firebaseio.com",
  projectId: "little-fighter-dude",
  storageBucket: "little-fighter-dude.appspot.com",
  messagingSenderId: process.env.MSGSENDERID
};

const fire = firebase.initializeApp(config);

export default fire;
