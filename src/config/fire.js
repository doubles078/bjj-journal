import firebase from "firebase";

var config = {
  apiKey: "AIzaSyBfVdzJkt_c18FuztSXQStBXDhin7EnqhE",
  authDomain: "little-fighter-dude.firebaseapp.com",
  databaseURL: "https://little-fighter-dude.firebaseio.com",
  projectId: "little-fighter-dude",
  storageBucket: "little-fighter-dude.appspot.com",
  messagingSenderId: 183304479147
};

const fire = firebase.initializeApp(config);

export default fire;
