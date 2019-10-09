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
    var project_name = document.getElementById("project_name");
    var project_des = document.getElementById("project_des");
    var mentor_name = document.getElementById("mentor_name");
    var Domain = document.getElementById("Domain");
    var research = document.getElementById("research");
    var year = document.getElementById("year");
    var branch = document.getElementById("branch");
    var project_tags = document.getElementById("tag-input1");
    var next = document.getElementById("next");
    var getEmail,college,email1,phone,rollno,username;
    
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser)
        {
          console.log(firebaseUser);
          getEmail=firebaseUser.email;
        console.log(getEmail);
        
         auth();
          
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

      function auth()
      {
        
    
        firebase.firestore().collection("authenticatedUsers").where("email","==",getEmail)
    .onSnapshot(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            college = doc.data().college;
           email1 = doc.data().email;
           phone = doc.data().phone;
           rollno = doc.data().rollno;
           username = doc.data().username;
           console.log(email1);
           document.getElementById("college_name").value=college;
           document.getElementById("roll_no").value=rollno;
           document.getElementById("email").value=email1;
           document.getElementById("phone").value=phone;
           document.getElementById("name").value=username;
        });
    });

      }
next.addEventListener("click",local);

function local()
{

    localStorage.setItem("project_name", "");
    localStorage.setItem("project_des", "");
    localStorage.setItem("mentor_name", "");
    localStorage.setItem("Domain", "");
    localStorage.setItem("research", "");
    localStorage.setItem("year", "");
    localStorage.setItem("branch", "");
    localStorage.setItem("project_tags", "");
  

    localStorage.setItem("project_name", project_name.value);
    localStorage.setItem("project_des", project_des.value);
    localStorage.setItem("mentor_name", mentor_name.value);
    localStorage.setItem("Domain", Domain.value);
    localStorage.setItem("research", research);
    localStorage.setItem("year", year.value);
    localStorage.setItem("branch", branch.value);
    localStorage.setItem("project_tags", project_tags.value);
  
window.location.href="upload.html"

}
      
   
  
  })()