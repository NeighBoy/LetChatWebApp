// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAgM-ptiNg63_jsQq6xBHNLCcHg7JW5B8k",
    authDomain: "social-media-9f255.firebaseapp.com",
    databaseURL: "https://social-media-9f255-default-rtdb.firebaseio.com",
    projectId: "social-media-9f255",
    storageBucket: "social-media-9f255.appspot.com",
    messagingSenderId: "271751894266",
    appId: "1:271751894266:web:e07ba51055361da124e543"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room name - " + Room_names)
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
          });
    });
}

getData();

function redirectToRoomName() {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}