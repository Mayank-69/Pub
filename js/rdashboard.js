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
 



 var company;


    
var name1,name2,name3,name4,name5,rollno1,rollno2,rollno3,rollno4,rollno5,email1,email2,email3,email4,email5,submit;
  
name1=document.getElementById("name1");
name2=document.getElementById("name2");
name3=document.getElementById("name3");
name4=document.getElementById("name4");
name5=document.getElementById("name5");

rollno1=document.getElementById("roll_no1");
rollno2=document.getElementById("roll_no2");
rollno3=document.getElementById("roll_no3");
rollno4=document.getElementById("roll_no4");
rollno5=document.getElementById("roll_no5");

email1=document.getElementById("email1");
email2=document.getElementById("email2");
email3=document.getElementById("email3");
email4=document.getElementById("email4");
email5=document.getElementById("email5");

submit=document.getElementById("submit");



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
    console.log(getEmail);

    firebase.firestore().collection("recruiters").where("email", "==", getEmail)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log("hussa");
            company=doc.data().company;
            console.log(name)
            document.getElementById("albin").innerHTML=company;

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
  }


  submit.addEventListener("click",setstudents)

  function setstudents()

  {

    console.log("gussa");
    firebase.firestore().collection("Mentor students").doc(getEmail).set({

      name1:name1.value,
      name2:name2.value,
      name3:name3.value,
      name4:name4.value,
      name5:name5.value,
   
   
      rollno1:rollno1.value,
      rollno2:rollno2.value,
      rollno3:rollno3.value,
      rollno4:rollno4.value,
      rollno5:rollno5.value,
   
      email1:email1.value,
      email2:email2.value,
      email3:email3.value,
      email4:email4.value,
      email5:email5.value,
   
      mentor:getEmail,
   
   
   
   
   
   
     });

    intent();

  }


  function intent()
  {


    setTimeout(function(){
      
      
      window.location.href="mystudent.html" 
    
    }, 3000);

  }
 
  
    
  })()