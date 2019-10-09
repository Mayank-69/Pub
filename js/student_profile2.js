// var app_firebase = {};
(function(){
    // Initialize Firebase
    var firebaseConfig = {
      apiKey: "AIzaSyAPP4SJfX9CU6UoEEV-Wmn9MRBt9Tg2eB0",
      authDomain: "synergy-hackathon.firebaseapp.com",
      databaseURL: "https://synergy-hackathon.firebaseio.com",
      projectId: "synergy-hackathon",
      storageBucket: "synergy-hackathon.appspot.com",
      messagingSenderId: "838393129858",
      appId: "1:838393129858:web:92409f044f6a4378"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // app_firebase = firebase; 
  
    //User Form
    
    var video,getEmail;

    var projectname,des,mentor,domain,research,year,branch,report,presentation,video1,github,research,branch,tags,username,rollno;

    var video = document.getElementById("video");
    var report = document.getElementById("report");
    var research = document.getElementById("research");
    var marks = document.getElementById("marks1");
    var smarks = document.getElementById("marks");

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser)
        {
          console.log(firebaseUser);
          getEmail=firebaseUser.email;
        console.log(getEmail);
        getdata1();
       
      download();

      getmarks3();
    
        }
        else
        {
          console.log("not logged in");
          // setTimeout(doSomething, 6000);
          // function doSomething() {
          //   // alert("The password or email is incorrect");
          // } 
 
        }
      })

      function getdata1()
      {
        projectname=localStorage.getItem("projname");
        email=localStorage.getItem("email");
       

        
      

      }

      smarks.addEventListener("click",getmarks);

      

      function getmarks()
      {

        firebase.firestore().collection("marks").doc(email).set({

          marks:marks.value,
          email:email,





        })
      }

      function getmarks3()
      {
        firebase.firestore().collection("marks").where("email","==",email)
        .onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
               
              mks=doc.data().marks;
             
              document.getElementById("marks1").value=mks;
              
            });
        });  



       
      }

      function download()
      {
        firebase.firestore().collection("authenticatedUsers").where("email","==",email)
        .onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
               
              username=doc.data().username;
              rollno=doc.data().rollno;
              document.getElementById("name").innerHTML=username;
              document.getElementById("roll").innerHTML=rollno;
              
            });
        });  



        firebase.firestore().collection("Student Portfolio").where("email","==",email).where("projectname","==",projectname).onSnapshot(function(querySnapshot) {
           
         
                querySnapshot.forEach(function(doc) {
                
          
                console.log("lol")

                projectname=doc.data().projectname;
                des=doc.data().description;
                mentor=doc.data().mentor;
                domain=doc.data().domain;
                year=doc.data().year;
                branch=doc.data().branch;
                tags=doc.data().projecttags;
                
        
                document.getElementById("year").innerHTML=year;
                document.getElementById("branch").innerHTML=branch;
               
                   
                });
                
               
            })
      }


      video.addEventListener("click",send);

      function send()
      {
        console.log("hello")
        localStorage.setItem("projname",projectname);
        localStorage.setItem("email",email);

        window.location.href="VidAndPres.html";


      }

      report.addEventListener("click",rsend);

      function rsend()
      {
        localStorage.setItem("projname",projectname);
        localStorage.setItem("email",email);

        window.location.href="report.html";

      }
   research.addEventListener("click",resend)

   function resend()
   {
    localStorage.setItem("projname",projectname);
    localStorage.setItem("email",email);

    window.location.href="research.html";
   }
   
  
  })()