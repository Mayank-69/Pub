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
   
  
  
  
   
  var domain,email1;
  
      
  
    
    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)
      {
        getUid = firebaseUser.uid;
        getEmail =firebaseUser.email;
        console.log(firebaseUser);
        console.log(firebaseUser.uid);
        checkSignedInWithMessage();
       
      
        getuseremail();
  
  
        
       
     
        
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
  
   function getuseremail()
   {
    firebase.firestore().collection("Mentor students").where("mentor", "==", getEmail)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log("hello")
            // doc.data() is never undefined for query doc snapshots
           email1=doc.data().email1;
           email2=doc.data().email2;
           email3=doc.data().email3;
           email4=doc.data().email4;
           email5=doc.data().email5;

        });

        allposted();
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
   }

  function allposted()
  
  {
console.log(email1);

      firebase.firestore().collection("Mentor student div").onSnapshot(function(querySnapshot) {
        var cities = [];
        
       console.log("lalalalalala");
     
            querySnapshot.forEach(function(doc) {
            cities.push(doc.data().div2);
           
      
            console.log("lol")
    
          //  console.log( getdate.push(doc.data().expiration)); 
           
            
        
  
          
                document.getElementById("generateDiv").innerHTML=cities;
               
               
            });
            
           
        })
      }
  
  })()