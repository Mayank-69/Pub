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



  var getUid;
  var title;
  var divl;
  var div2;
  var getEmail;
  var yo;
  var date;
  var str3;
  var str1;
  var getdate;
  var currentdate;
  var stry;
  var strz;
  var date1;
  var date2;
const categories = document.getElementById("categories");
  const location = document.getElementById("location");
  const search = document.getElementById("search");
  filter = document.getElementById("filters");
  filt_comp ="Recent Projects";
 
function allposted()

{
    firebase.firestore().collection("Tranasactions").doc(getEmail).collection("mereTransactions").orderBy('paymentdate','desc').onSnapshot(function(querySnapshot) {
      var cities = [];
       yo =[];
       date=[];
       getdate=[];
     
   
          querySnapshot.forEach(function(doc) {
          cities.push(doc.data().div);
        
              document.getElementById("generateDiv").innerHTML=cities.join(" ");
             
             
          });
          
         
      })
    }
      
      
      
     
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      getUid = firebaseUser.uid;
      getEmail = firebaseUser.email;
      allposted();
      
      
    }
    else
    {
     
     alert("You are not signed in")
     
        window.location.href = "login.html"
      
      
    }
  })

})()








