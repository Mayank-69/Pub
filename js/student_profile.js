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
    

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser)
        {
          console.log(firebaseUser);
          getEmail=firebaseUser.email;
        console.log(getEmail);
        getdata1();
      download();
          
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
        projectname=localStorage.getItem("project_name");
        des=localStorage.getItem("project_des");
        mentor=localStorage.getItem("mentor_name");
        domain=localStorage.getItem("Domain");
        research=localStorage.getItem("research");
        year=localStorage.getItem("year");
        branch=localStorage.getItem("branch");
        tags=localStorage.getItem("tags");

        
        document.getElementById("projectname").innerHTML=projectname
        document.getElementById("desp").innerHTML=des
        document.getElementById("mentor").innerHTML=mentor
        document.getElementById("domain").innerHTML=domain
        // document.getElementById("").innerHTML=research
        document.getElementById("year").innerHTML=year
        document.getElementById("branch").innerHTML=branch

        document.getElementById("tags").innerHTML=tags

      }

      function download()
      {
        firebase.firestore().collection("authenticatedUsers").where("email","==",getEmail)
        .onSnapshot(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
               
              username=doc.data().username;
              rollno=doc.data().rollno;
              document.getElementById("name").innerHTML=username;
              document.getElementById("roll").innerHTML=rollno;
              
            });
        });  
      }

     

      video.addEventListener("click",send);

      function send()
      {
        localStorage.setItem("projname",projectname);
        localStorage.setItem("email",getEmail);

        window.location.href="VidAndPres.html";


      }

      report.addEventListener("click",rsend);

      function rsend()
      {
        localStorage.setItem("projname",projectname);
        localStorage.setItem("email",getEmail);

        window.location.href="report.html";

      }
   research.addEventListener("click",resend)

   function resend()
   {
    localStorage.setItem("projname",projectname);
    localStorage.setItem("email",getEmail);

    window.location.href="research.html";
   }
  
  })()