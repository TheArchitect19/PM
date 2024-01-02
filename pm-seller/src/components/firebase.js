import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6X84m4WvyltU3FEjCLKSG_UNFgd-5s-M",
  authDomain: "pandri-market.firebaseapp.com",
  projectId: "pandri-market",
  storageBucket: "pandri-market.appspot.com",
  messagingSenderId: "558444297190",
  appId: "1:558444297190:web:fcc5a85557115e35f73427",
  measurementId: "G-C7LY0KKCTD"
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};