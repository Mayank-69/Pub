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
 
   function check()
   {
    firebase.firestore().collection("Timestampuser").where("email","==",getEmail).
    get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc)
      {
        timedate = doc.data().timestamp.toDate();

        console.log(timedate);
   
        stry = timedate.toString();
   
        strz = stry.slice(4,15);
   
        console.log(strz);
   
      
    
       
      })



    }
    
    )

    allposted();
   }
function allposted()

{
    firebase.firestore().collection("AllPostedProjects").onSnapshot(function(querySnapshot) {
      var cities = [];
       yo =[];
       date=[];
       getdate=[];
     
   
          querySnapshot.forEach(function(doc) {
          cities.push(doc.data().div);
          yo.push(doc.data().title);
         
         

          // date.push(doc.data().timestamp.toDate());
          getdate.push(doc.data().expiration);
    
          
  
        //  console.log( getdate.push(doc.data().expiration));
          console.log(date);
          
      

           console.log(yo);
        
              document.getElementById("generateDiv").innerHTML=cities.join(" ");
             
             
          });
          
         
      })
    }
      
      setTimeout(doSomething, 5000);
   
      function doSomething() {
        console.log("chutiya",getdate)
      console.log("dikha bhaiiiiiiiiiiii",getdate.length);
      for(i=0;i<getdate.length;i++)
      {
        str1 = getdate[i].toString();
        console.log("chumbak",i+str1);

        console.log("zxxcxc",str1);

      

      console.log("lund",str3);
      console.log(getdate);
    
     
      var jobskill_query1 = firebase.firestore().collection('PostedProject').doc().collection('activeProjects').where('expiration','==',strz);
      jobskill_query1.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.ref.delete();

          console.log("huahuahua")
        });
      });
    
    





date1 = new Date(strz);
date2 = new Date(str1);

console.log("ccxc",date1);
console.log("xzxzzx",date2);
      if(date2 == date1 || date2 <= date1)   
      {
          console.log("hio");
          firebase.firestore().collection("AllPostedProjects").where("expiration", "==", strz)
          .onSnapshot(function(querySnapshot) {
             
              querySnapshot.forEach(function(doc) {
                doc.ref.delete();
              });
             
          });


          firebase.firestore().collection("AllPostedProjects").where("expiration", "==", str1)
          .onSnapshot(function(querySnapshot) {
             
              querySnapshot.forEach(function(doc) {
                doc.ref.delete();
              });
             
          });


      }

      else
      {
        console.log("shitfuck")
      }
      }
      
      }

      
     
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      getUid = firebaseUser.uid;
      getEmail = firebaseUser.email;
      check();
      
     
    }
    else
    {
     
     alert("You are not signed in")
     
        window.location.href = "login.html"
      
      
    }
  })

})()








