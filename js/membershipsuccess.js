// // var app_firebase = {}; 
// (function(){
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyBL5AeQumm9cvjo3jdv9Iqj1ckg9jRauc4",
//     authDomain: "steptofame-228cc.firebaseapp.com",
//     databaseURL: "https://steptofame-228cc.firebaseio.com",
//     projectId: "steptofame-228cc",
//     storageBucket: "steptofame-228cc.appspot.com",
//     messagingSenderId: "239180085251"
//   };
//   firebase.initializeApp(config);

//   firebase.auth().onAuthStateChanged(firebaseUser => {
//     if(firebaseUser)
//     {
//       getUid = firebaseUser.uid;
//       getEmail = firebaseUser.email;
//       set();
      
     
//     }
//     else
//     {
     
//      alert("You are not signed in")
     
//         window.location.href = "login.html"
      
      
//     }
//   })


//   function set()
//   {
//     firebase.firestore().collection("membership").doc(getEmail).set({

//       email:getEmail,
//       member:true,
    
    
//     })

    

//   }
  

   

// })()