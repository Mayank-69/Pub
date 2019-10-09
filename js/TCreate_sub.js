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
  
  var sub = document.getElementById("subname");
  var year = document.getElementById("year");
  var branch = document.getElementById("branch");
  


  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)
      {
        console.log(firebaseUser);
        getEmail=firebaseUser.email;
      console.log(getEmail);
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

    next.addEventListener("click",getname);


    function getname()
    {

      firebase.firestore().collection("authenticatedUsers").where("email", "==", getEmail)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              console.log("hussa");
              name=doc.data().username;
              console.log(name)
  
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });

      upload1();
    }

    function upload1()
    {


      firebase.firestore().collection("Subject").doc(sub.value).set({
        subject:sub.value,
        year:year.value,
        branch:branch.value,

})
setTimeout(function(){setdiv(); }, 4000);
}
})()