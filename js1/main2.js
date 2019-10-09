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
var getUid, getEmail;
var name;

// yo();
    const firstname = document.getElementById("first_name");
    const submitbutton = document.getElementById("submit");
    const ethinicity = document.getElementById("ethinicity");
    const bodytype = document.getElementById("bodytype");
    const skills = document.getElementById("skills");
    const experiences = document.getElementById("experiences");
    const description = document.getElementById("description");
    const gender = document.getElementById("gender");
    const ylocation = document.getElementById("ylocation");
    const jlocation = document.getElementById("jlocation");
    const nationality = document.getElementById("nationality");
    const artisttype = document.getElementById("artist_type");
    const complexity = document.getElementById("complexity");
    const height = document.getElementById("height");
    
    
    function saveMessage() {
      // var uid1 = firebase.auth().currentUser;
      // console.log(uid1.uid);
      //var uid1 = user.uid;
      // Add a new message entry to the Firebase database.
      //console.log(uid)
      // console.log("hi");
      return firebase.firestore().collection('rportfolio').doc(getEmail).set({
        firstname: firstname.value,
        ethinicity: ethinicity.value,
        bodytype: bodytype.value,
        description: description.value,
        gender: gender.value,
        ylocation: ylocation.value,
        jlocation: jlocation.value,
        nationality: nationality.value,
        artisttype: artisttype.value,
        complexity: complexity.value,
        height: height.value,
        skills: skills.value,

        experiences: experiences.value,
       
        emailId: getEmail,
      }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });


    }

    function yo()
    { firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)
      {  getUid = firebaseUser.uid;
         getEmail = firebaseUser.email;
         getEmail1=firebaseUser.email;
        console.log(firebaseUser.uid);
        // checkSignedInWithMessage();
        
        // saveMessage();
        
        console.log("hello");
         
       
      }
      else
      {
        // checkSignedInWithMessage();
        console.log("not logged in");
      }
    
      console.log("plokokiji");
      // var getEmail1;
      // var getEmail2=getEmail;
       firebase.firestore().collection("rportfolio").where("emailId","==",getEmail).
      get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // console.log("2");
            //   url1='<img src='+doc.data().url+' height="500px" width="1500px" style ="padding-right: 0em">';
            // url1='<div  class="ratio img-responsive img-circle"  style="background-image: url('+doc.data().url+');"></div>'
        name=doc.data().firstname;

        

        console.log("hana na ana an ana an ana an anaq");
            // console.log("jata hu ab pakka");
            document.getElementById("first_name").value=name;
            
           
          });
         // 
      })
    })
    }
   
     function authn()
     {
       firebase.auth().onAuthStateChanged(firebaseUser => {
         if(firebaseUser)
         {  getUid = firebaseUser.uid;
            getEmail = firebaseUser.email;
            getEmail1=firebaseUser.email;
           console.log(firebaseUser.uid);
           checkSignedInWithMessage();
           
           saveMessage();
           
           console.log("hello");
           
          
         }
         else
         {
           checkSignedInWithMessage();
           console.log("not logged in");
         }
       })
     }
    
     yo();
     submitbutton.addEventListener("click", e=>{
       
      authn();

      // doSomething();

      setTimeout(doSomething, 4000);

      function doSomething() {
        window.location.href="agency_profile.html";
      }
      
     });
    //  button.onclick = function () {
    //   document.getElementById('container').scrollLeft += 20;
    // };
    //  function doSomething() {
    //   window.location.href="candidate_profile.html";
    // }

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

    
    //Add a realtime listener
    

})()