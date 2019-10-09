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
 
  // const userLogoutBtn1 = document.getElementById("userLogoutBtn1");
  function getCompanyName()
  {

   firebase.firestore().collection("recruiters").where("email","==",getEmail).
   get()
   .then(function(querySnapshot) {
       querySnapshot.forEach(function(doc) {
         console.log("email ka snapshot mila");
         companyName = doc.data().company;
      
         console.log("company name mila");
         console.log(companyName);
         savediv();
         // generateDiv();

        

       });
      // 
   })
   
  }
  function savediv()
  {
    firebase.firestore().collection("PostedProject").doc(companyName).collection("activeProjects").onSnapshot(function(querySnapshot) {
      var cities = []; 
    console.log(getEmail);
      // var titleyo =[];
          querySnapshot.forEach(function(doc) {
          cities.push(doc.data().div);
          console.log(cities);
              document.getElementById("autodiv").innerHTML=cities.join(" ");
              console.log(cities);
             
          });
        
      })
      // .catch(function(error) {
      //     console.log("Error getting documents: ", error);
      // });
  }




 
    


  //Add Logout Event
  // userLogoutBtn1.addEventListener("click", e=>{
  //   firebase.auth().signOut();
  //   // window.location.href = "index.html"
  // })


// console.log(getEmail);


  //Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      getUid = firebaseUser.uid;
      getEmail = firebaseUser.email;
      console.log(getEmail);
      console.log(firebaseUser);
      console.log(firebaseUser.uid);
      getCompanyName();
      // myfunction();
      // pp();
    
      // myfunction1();
      
    }
    else
    {
       
     alert("You are not signed in")
     
     window.location.href = "login.html"
    }
  })

})()