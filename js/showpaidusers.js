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
  var Home= document.getElementById("coffee");
     
     
  Home.style.display="block";


var email=[];
var common = [];
var cities = [];
function unpaidUsers()
{
  console.log("unpaidusers me ghusa");

  firebase.firestore().collection("membership").where("member","==",true).
  get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc)
    {
        email.push(doc.data().email); 
        // email = doc.data().email;
        console.log(email);




    })



  })


}  

function allusers()

{
  console.log("allusers me ghusa");

  for(i=0;i<email.length;i++)
  {
    console.log("for me gussa");
    firebase.firestore().collection("showusers").where("email","==",email[i]).
    get()
    .then(function(querySnapshot) {
   
      // var allemail=[];
      
          querySnapshot.forEach(function(doc) {


          cities.push(doc.data().div);
          console.log(cities);
         
          document.getElementById("generateDiv").innerHTML=cities.join(" ");             
             
          });
          
         
      })
    }

    var Home= document.getElementById("coffee");
     
     
  Home.style.display="none";

   
    }
      

      
     
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      getUid = firebaseUser.uid;
      getEmail = firebaseUser.email;
      unpaidUsers();
      setTimeout(dosomething,5000);
function dosomething()
{
  allusers();

}
     
     
    }
    else
    {
     
     alert("You are not signed in")
     
        window.location.href = "login.html"
      
      
    }
  })

})()








