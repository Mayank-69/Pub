// var app_firebase = {};
(function(){
  // Initialize Firebase
 // Your web app's Firebase configuration
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

 

//   var getUid;
//   var title;
//   var divl;
//   var div2;
//   var getEmail;
//   // var yo;
//   var projname;
//   var companyName;
 
//   // const userLogoutBtn1 = document.getElementById("userLogoutBtn1");
//   function getCompanyName()
//   {

//    firebase.firestore().collection("recruiters").where("email","==",getEmail).
//    get()
//    .then(function(querySnapshot) {
//        querySnapshot.forEach(function(doc) {
//          console.log("email ka snapshot mila");
//          companyName = doc.data().company;
      
//          console.log("company name mila");
//          console.log(companyName);
 
//          // generateDiv();
//        });
//       // 
//    })
//   jha1();
//   //  jha1();
//   // jha1();

//   }
//   function jha1()
//   {

  
//     firebase.firestore().collection("temporaray").doc(companyName).
//     get()
//     .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
         
//           projname = doc.data().projname;
       
//          console.log("jha1");
//           console.log(projname);
  
//           // generateDiv();
//  jha2();
         
 
//         });
//        // 
//     })

    
// }
//   // function jha1()
//   // {
    
//   // }
//   function jha2()
//   {
//     firebase.firestore().collection("PostedProject").doc(companyName).collection("activeProjects").doc(projname).collection("appliedusers").onSnapshot(function(querySnapshot)
//     {
//       var cities = [];
  
//       // var titleyo =[];
//           querySnapshot.forEach(function(doc) {
//           cities.push(doc.data().div);
//           console.log(cities);
//           document.getElementById("autodiv").innerHTML=cities.join(" ");
          
             
//           });
          
//       })


//   }

//   //Add Logout Event
//   // userLogoutBtn1.addEventListener("click", e=>{
//   //   firebase.auth().signOut();
//   //   // window.location.href = "index.html"
//   // })


// // console.log(getEmail);


//   //Add a realtime listener
//   firebase.auth().onAuthStateChanged(firebaseUser => {
//     if(firebaseUser)
//     {
//       getUid = firebaseUser.uid;
//       getEmail = firebaseUser.email;
//       console.log(getEmail);
//       console.log(firebaseUser);
//       console.log(firebaseUser.uid);
//       getCompanyName();
   
//       // myfunction();
//       // pp();
    
//       // myfunction1();
      
//     }
//     else
//     {
//       console.log("not logged in");
//       // window.location.href = "index.html"
//     }
//   })

})()