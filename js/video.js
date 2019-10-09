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
  
  
    
  
    //Add Logout Event
   
  
  
  
   
  
  var projname,email,video,presentation;
      
  
     
    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)
      {
        getUid = firebaseUser.uid;
        getEmail =firebaseUser.email;
        console.log(firebaseUser);
        console.log(firebaseUser.uid);
        checkSignedInWithMessage();
        getlocal();
       
  
  
  
        
       
     
        
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
  
    function getlocal()
    {
  projname = localStorage.getItem("projname");
  email = localStorage.getItem("email");
  allposted();
     
    }
  function allposted()
  
  {
      firebase.firestore().collection("Student Portfolio").where("email","==",email).where("projectname","==",projname).onSnapshot(function(querySnapshot) {
        
        
       console.log("lalalalalala");
     
            querySnapshot.forEach(function(doc) {
           
           video=doc.data().video;
           presentation=doc.data().presentation;
           console.log(presentation)
      
            
    
          //  console.log( getdate.push(doc.data().expiration));
           
            
        
  
          
                document.getElementById("video").innerHTML=video;
                document.getElementById("pi").innerHTML=presentation;
               
               
            });
            
           
        })
      }
   
  })()