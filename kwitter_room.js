
const firebaseConfig = {
      apiKey: "AIzaSyBDuRyUaZEElJ1GezFEiplEP0PNtm9hJ40",
      authDomain: "class-test-bba74.firebaseapp.com",
      databaseURL: "https://class-test-bba74-default-rtdb.firebaseio.com",
      projectId: "class-test-bba74",
      storageBucket: "class-test-bba74.appspot.com",
      messagingSenderId: "136619554148",
      appId: "1:136619554148:web:3eb6ec4610c9de0bf97671"
    };

  user_name = localStorage.getItem("user_name");


  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
  
      localStorage.setItem("room_name", room_name);
     
      window.location = "kwitter_page.html";
  }
  
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  
  }
  
  
  getData();
  
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  