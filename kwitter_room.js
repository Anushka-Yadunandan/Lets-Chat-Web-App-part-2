
var firebaseConfig = {
    apiKey: "AIzaSyCtj6I0YVoyHjRQFMYoy5mQcoXMYJEQA6A",
    authDomain: "kwitter-a4c43.firebaseapp.com",
    databaseURL: "https://kwitter-a4c43-default-rtdb.firebaseio.com",
    projectId: "kwitter-a4c43",
    storageBucket: "kwitter-a4c43.appspot.com",
    messagingSenderId: "480634299050",
    appId: "1:480634299050:web:b00efecd908fa68815a6d3"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
