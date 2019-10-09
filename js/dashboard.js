// var app_firebase = {};
(function(){
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyAPP4SJfX9CU6UoEEV-Wmn9MRBt9Tg2eB0",
    authDomain: "synergy-hackathon.firebaseapp.com",
    databaseURL: "https://synergy-hackathon.firebaseio.com",
    projectId: "synergy-hackathon",
    storageBucket: "synergy-hackathon.appspot.com",
    messagingSenderId: "838393129858",
    appId: "1:838393129858:web:92409f044f6a4378"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var name;
var machine=document.getElementById("machine");
var iot=document.getElementById("iot")
var compnet=document.getElementById("compnet")
var webtech=document.getElementById("webtech")
  
  

  //Add Logout Event
 



 


    

  
  //Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      getUid = firebaseUser.uid;
      getEmail =firebaseUser.email;
      console.log(firebaseUser);
      console.log(firebaseUser.uid);
      checkSignedInWithMessage();
      getName();
      allposted();



      
     
   
      
    }
    else
    {
      console.log("not logged in");
      window.location.href = "index.html"
    }
  })

  function isUserSignedIn() {
    // TODO 6: Return true if a user is signed-in.
    return !!firebase.auth().currentUser;
  }
  
  function checkSignedInWithMessage() 
  {
    // Return true if the user is signed in Firebase
    if (isUserSignedIn()) {
      console.log(true);
    }
    else
    {
        console.log("false");
    }
  }

  function getName()
  {

    firebase.firestore().collection("authenticatedUsers").where("email", "==", getEmail)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log("hussa");
            name=doc.data().username;
            console.log(name)
            document.getElementById("albin").innerHTML=name;

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }
function allposted()

{
    firebase.firestore().collection("Student Portfolio").where("email","==",getEmail).onSnapshot(function(querySnapshot) {
      var cities = [];
      
     console.log("lalalalalala");
   
          querySnapshot.forEach(function(doc) {
          cities.push(doc.data().div1);
         
    
          
  
        //  console.log( getdate.push(doc.data().expiration));
         
          
      

        
              document.getElementById("generateDiv").innerHTML=cities;
             
             
          });
          
         
      })
    }
  machine.addEventListener("click",machinelearning)
  
 
  

  function machinelearning()
  {
    console.log("machine");

    localStorage.setItem("iot", "");
    localStorage.setItem("cmpnet", "");
    localStorage.setItem("web", "");
    localStorage.setItem("machine", "Machine Learning");
    window.location.href="post.html"

  }
  iot.addEventListener("click",iot1)
  function iot1()
  {
    console.log("iot");

   
    localStorage.setItem("cmpnet", "");
    localStorage.setItem("web", "");
    localStorage.setItem("machine", "");
    localStorage.setItem("iot", "Internet Of Things");
    window.location.href="post.html"

  }
  compnet.addEventListener("click",compnet1)
  function compnet1() 
  {
    console.log("comp");
    localStorage.setItem("iot", "");
   
    localStorage.setItem("web", "");
    localStorage.setItem("machine", "");
    localStorage.setItem("cmpnet", "Computer Networks");
    window.location.href="post.html"

  }
  webtech.addEventListener("click",webtech1)
  function webtech1()
  {
    console.log("web");
    localStorage.setItem("iot", "");
    localStorage.setItem("cmpnet", "");
    localStorage.setItem("machine", "");
    localStorage.setItem("web", "Web Technology");
    window.location.href="post.html"

  }
})()