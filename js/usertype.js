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

  const talentBtn = document.getElementById("talentButton");

  const agencyBtn = document.getElementById("agencyButton");  


   //Add Login Event
   talentBtn.addEventListener("click", e=>{

    window.location.href = "register.html"


  });



  //Add Login Event
  agencyBtn.addEventListener("click", e=>{

    window.location.href = "register1.html"


  });


})()