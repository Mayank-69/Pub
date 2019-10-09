// var app_firebase = {}; 
(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdbclC84ra-nSy4dY4Bul_tq1LyubxQLM",
    authDomain: "demoproject-87647.firebaseapp.com",
    databaseURL: "https://demoproject-87647.firebaseio.com",
    projectId: "demoproject-87647",
    storageBucket: "demoproject-87647.appspot.com",
    messagingSenderId: "363673694743",
    appId: "1:363673694743:web:4b2285419e20e609"
  };
  firebase.initializeApp(config);
  // app_firebase = firebase;

  // var getEmail;
  var emailcities=[];
  const mail = document.getElementById('mail');



 
function allusers()
{
  console.log("all users me gaya");

    firebase.firestore().collection("Searched_Selected_Users").doc(getEmail).collection("selecteduserlist").onSnapshot(function(querySnapshot) {
      var cities = [];
      

     
   
          querySnapshot.forEach(function(doc) {
          cities.push(doc.data().div);
          emailcities.push(doc.data().email);
        
              console.log("database me gaya");
              console.log(cities);         
              document.getElementById("generateDiv").innerHTML=cities.join(" ");
              
             
          });
          
         
      })
     
             
    }

  
    mail.addEventListener("click", e=>{

      console.log("hua");
      if(emailcities.length == 0)
      {
        alert("There are no talents");
      }
      else{
        window.open('mailto:'+emailcities+'');
      }
    })
       

 
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
    
      console.log("onauth me gaya");
      getUid = firebaseUser.uid;
      getEmail = firebaseUser.email;

      console.log(getEmail);
      allusers();
     
    }
    else
    {
     
     alert("You are not signed in")
     
        window.location.href = "login.html"
      
      
    }
  })

})()








