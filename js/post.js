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
   
  
  
  
   
  var domain;
  
      
  
    
    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)
      {
        getUid = firebaseUser.uid;
        getEmail =firebaseUser.email;
        console.log(firebaseUser);
        console.log(firebaseUser.uid);
        checkSignedInWithMessage();
       
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
  
    console.log(localStorage.getItem("iot"))
    if(localStorage.getItem("iot").length!=0)
    {
        domain=localStorage.getItem("iot");
document.getElementById("hello").innerHTML=localStorage.getItem("iot");
    }

    else if(localStorage.getItem("machine").length!=0)
    {
        domain=localStorage.getItem("machine");
        document.getElementById("hello").innerHTML=localStorage.getItem("machine");
    }
    else if(localStorage.getItem("web").length!=0)
    {
        domain=localStorage.getItem("web");
        document.getElementById("hello").innerHTML=localStorage.getItem("web");
    }
    else if(localStorage.getItem("cmpnet").length!=0)
    {
        domain=localStorage.getItem("cmpnet");
        document.getElementById("hello").innerHTML=localStorage.getItem("cmpnet");
    }


    var useremail = localStorage.getItem("email")
    console.log(useremail);

  function allposted()
  
  {


      firebase.firestore().collection("Student Portfolio").where("email","==",useremail).where("domain","==",domain).onSnapshot(function(querySnapshot) {
        var cities = [];
        
       console.log("lalalalalala");
     
            querySnapshot.forEach(function(doc) {
            cities.push(doc.data().div1);
           
      
            console.log("lol")
    
          //  console.log( getdate.push(doc.data().expiration)); 
           
            
        
  
          
                document.getElementById("generateDiv").innerHTML=cities;
               
               
            });
            
           
        })
      }
  
  })()