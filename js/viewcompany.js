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
  var ig; 
  var getEmail;
  var companyEmail;
  var khem=1;
  
  // const userLogoutBtn1 = document.getElementById("userLogoutBtn1");


  //Add Logout Event
  // userLogoutBtn1.addEventListener("click", e=>{
  //   firebase.auth().signOut();
  //   // window.location.href = "index.html"
  // })





function myfunction()
{
  console.log("1sdfdfds");
  firebase.firestore().collection("rphoto").where("emailid","==",companyEmail).
      get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // console.log("2");  
            //   url1='<img src='+doc.data().url+' height="500px" width="1500px" style ="padding-right: 0em">';
            url1='<div  class="ratio img-responsive img-circle"  style="background-image: url('+doc.data().url+');"></div>'
              console.log("jata hu ab pakka");
            document.getElementById("pranay").innerHTML=url1;
            console.log("2");
            // location.reload();

            // document.getElementById("pranay").innerHTML= getEmail ;
            console.log("hua ki nahi bc");    
          });
         // 
      })

    firebase.firestore().collection("recruiters").where("email","==",companyEmail).
      get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log("chal raha hai");
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data());
              
               
  // getUid = firebaseUser.uid; 
  document.getElementById("company").innerHTML=doc.data().company;
  // document.getElementById("lastName").innerHTML=doc.data().lastname;
  
  document.getElementById("email").innerHTML=doc.data().email;
  document.getElementById("location").innerHTML=doc.data().location;
  document.getElementById("website").innerHTML=doc.data().website;
  document.getElementById("description").innerHTML=doc.data().cmpnDescription;
  
              
              console.log("ueueueueueueueueue");
          //     return firebase.firestore().collection('photo').doc(getEmail).set({
          //       url:url,
          //       emailid:getEmail
          //  })
          //  .catch(function(error) {
          //   console.error('Error writing new message to Firebase Database', error);
          // });

          });
         // 
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });

    
}



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


//Active projects START


function getCompanyName()
{

 firebase.firestore().collection("recruiters").where("email","==",companyEmail).
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
  firebase.firestore().collection("PostedProject").doc(companyName).collection("activeProject_profile").onSnapshot(function(querySnapshot) {
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

    myfunction();

    
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });
}



//aCTIVE PROJECTS END

// function  myDick()
//   {

//       firebase.firestore().collection("temporaray3").onSnapshot(function(querySnapshot) { 
       
        
//           // var titleyo =[];
//               querySnapshot.forEach(function(doc) {
//               companyEmail=doc.data().email;
           
//               console.log(companyEmail);
             
    
               
            
//                   console.log("ueueueueueueueueue");
                 
//               });
              

//               getCompanyName();
              
    
                
    
//           })
//   }

function rok()
{

    
    firebase.auth().onAuthStateChanged(firebaseUser => {
if(firebaseUser)
{
userkaemail = firebaseUser.email;
console.log("You are logged in 2");
console.log(userkaemail);
setTimeout(doSomething, 4000);

function doSomething() {
myDick();
}



}


else
{
  alert("You are not signed in");
     
  window.location.href = "login.html";
}
})
}


function  myDick()
  {


      
//         firebase.firestore().collection("temporaray3").where("useremail","==",userkaemail).get()
// .then(function(querySnapshot) {
//           // var titleyo =[];
//               querySnapshot.forEach(function(doc) {
//               companyEmail=doc.data().email;
           
//               console.log(companyEmail);
             
    
                
            
//                   console.log("ueueueueueueueueue");
//                  getCompanyName();
                 
//               });
              

    
              
    
                
    
//           })


if(companyEmail != '')
{
companyEmail=''; 
console.log("applied"+companyEmail);
// companyEmail="";
//   companyEmail=localStorage.getItem("viewcompanyapplied");
if(localStorage.getItem("viewcompanyemail") != '')
{
  companyEmail=localStorage.getItem("viewcompanyemail");
}
else if(localStorage.getItem("viewcompanyapplied") != '')
{
  companyEmail=localStorage.getItem("viewcompanyapplied");

}
else if(localStorage.getItem("viewcompanyshortlisted") != '')
{
  companyEmail=localStorage.getItem("viewcompanyshortlisted");

}
else if(localStorage.getItem("viewcompanysearchpage") != '')
{
  companyEmail=localStorage.getItem("viewcompanysearchpage");

}
else if(localStorage.getItem("appliedpagecompany") != '')
{
  companyEmail=localStorage.getItem("appliedpagecompany");

}
else if(localStorage.getItem("shortlistedpagecompany") != '')
{
  companyEmail=localStorage.getItem("shortlistedpagecompany");

}
}

console.log("local",companyEmail);
getCompanyName();
          
  } 


  
  //Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      getUid = firebaseUser.uid;
      getEmail=firebaseUser.email;
      console.log(firebaseUser);
      console.log(firebaseUser.uid);
      checkSignedInWithMessage();
      rok();
      
     
      // pp();
    
      // myfunction1();
      
    }
    else
    {
      alert("You are not signed in");
     
  window.location.href = "login.html";
    }
  })

})()