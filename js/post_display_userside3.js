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
    var codename,getEmail,projtitle,location,discription,talenttype,vaccany,audition,budget,gender,age,jlocation,skills,nationality,complexity,height,email,url1;
    const title = document.getElementById('title');
   
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)
      {
        getEmail = firebaseUser.email;
        console.log("You are logged in");
        getTemporaray();
      }
      else
      {
        alert("You are not signed in")
     
        window.location.href = "login.html"
      
      }
    })
  
  function getTemporaray()
  {
    firebase.firestore().collection("temporaray8").where("email","==",getEmail).
    get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          
          codename= doc.data().codename;
          console.log(codename);
          getEverythhing();
       
        });
       // 
    })
     
  }
  
  
  function getEverythhing()
  {
    firebase.firestore().collection("AllPostedProjects").where("projectname","==",decodeURI(codename)).
    get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          
            email=doc.data().email;
          projtitle= doc.data().title;
          location= doc.data().location;
          discription= doc.data().description;
          talenttype= doc.data().talent_type;
          vaccany= doc.data().numberof_artists;
          audition= doc.data().audition;
          gender= doc.data().gender;
          age= doc.data().age;
          jlocation= doc.data().jlocation;
          skills= doc.data().skills;
          nationality= doc.data().nationality;
          complexity= doc.data().complexity;
          height= doc.data().height;
          budget= doc.data().budget;
          document.getElementById("title").innerHTML=projtitle;
          document.getElementById("location").innerHTML=location;
          document.getElementById("discription").innerHTML=discription;
          document.getElementById("talenttype").innerHTML=talenttype;
          document.getElementById("vaccany").innerHTML=vaccany;
          document.getElementById("audition").innerHTML=audition;
          document.getElementById("budget").innerHTML=budget;
  
          document.getElementById("gender").innerHTML=gender;
          document.getElementById("age").innerHTML=age;
          document.getElementById("jlocation").innerHTML=jlocation;
          document.getElementById("skills").innerHTML=skills;
          document.getElementById("nationality").innerHTML=nationality;
          document.getElementById("complexity").innerHTML=complexity;
          document.getElementById("height").innerHTML=height;
    
         console.log(projtitle);
        
        });
       // 
    })
    setTimeout(doSomething, 3000);
   
    function doSomething() {
        getphoto();
    }
 
  }
  function getphoto()
  {
    firebase.firestore().collection("rphoto").where("emailid","==",email).
    get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            url1='<div  class="ratio img-responsive img-circle"  style="background-image: url('+doc.data().url+');"></div>'
            console.log("jata hu ab pakka");
          document.getElementById("pranay").innerHTML=url1;

     
     
     
        })})



    }
  
  })()