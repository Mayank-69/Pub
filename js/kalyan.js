// var app_firebase = {};
(function(){

  
    var getUid;
    var name;

    //users elments from form
    const usernameId = document.getElementById("userNameId");
    const emailId = document.getElementById("emailId");
    const passId = document.getElementById("passId");
    const rPassId =  document.getElementById("rPassId");
    const locId = document.getElementById("locId");
    const phoneId = document.getElementById("phoneId");
    const userRegisterBtn = document.getElementById("userRegisterBtn");
   
    //const userLoginBtn = document.getElementById("userLoginBtn");
    //const userLogoutBtn = document.getElementById("userLogoutBtn");

    //recuriter elments from form
    const recUsernameId = document.getElementById("recUsername");
    const recEmailId = document.getElementById("recEmailId");
    const recPassId = document.getElementById("recPass");
    const recRenPassId =  document.getElementById("recRenterPass");
    const recPhoneId = document.getElementById("recPhoneId");
    const recCompNameId = document.getElementById("recCompanyName");
    const recWebId = document.getElementById("recWebsite");
    const recAddressId = document.getElementById("recAddress");
    const recRegisterBtn = document.getElementById("recRegisterBtn");
   
    function saveMessage() {
      // var uid1 = firebase.auth().currentUser;
      // console.log(uid1.uid);
      //var uid1 = user.uid;
      // Add a new message entry to the Firebase database.
      //console.log(uid)
      return firebase.firestore().collection('authenticatedUsers').add({
        username: usernameId.value,
        email: emailId.value,
        location: locId.value,
        userId: getUid,
        phone: phoneId.value,
      }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });
    }


    function saveMessage1() {
      // var uid1 = firebase.auth().currentUser;
      // console.log(uid1.uid);
      //var uid1 = user.uid;
      // Add a new message entry to the Firebase database.
      //console.log(uid)
      return firebase.firestore().collection('recruiters').add({
        username: recUsernameId.value,
        email: recEmailId.value,
        location: recAddressId.value,
        userId: getUid,
        phone: recPhoneId.value,
        company: recCompNameId.value,
        website: recWebId.value,
      }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });
    }

     function authn()
     {
       firebase.auth().onAuthStateChanged(firebaseUser => {
         if(firebaseUser)
         {  getUid = firebaseUser.uid;
           console.log(firebaseUser.uid);
           checkSignedInWithMessage();
           saveMessage();
          
         }
         else
         {
           checkSignedInWithMessage();
           console.log("not logged in");
         }
       })
     }
     
     function authn1()
     {
       firebase.auth().onAuthStateChanged(firebaseUser => {
         if(firebaseUser)
         {  getUid = firebaseUser.uid;
           console.log(firebaseUser.uid);
           checkSignedInWithMessage();
           saveMessage1();
          //  window.location.href="dashboard.html";
         }
         else
         {
           checkSignedInWithMessage();
           console.log("not logged in");
         }
       })
     }
    
   
     userRegisterBtn.addEventListener("click", e=>{
      //Get Email and password
      // TODO CHECK FOR REAL EMAIL
      const email = emailId.value;
      const pass = passId.value;
      const auth = firebase.auth();
      //Signup
      const signUp = auth.createUserWithEmailAndPassword(email, pass);
      signUp.catch(e => console.log(e.message));
      authn();
      setTimeout(doSomething, 4000);

      function doSomething() {
        window.location.href="dashboard.html";
      }
      
      
    //   firebase.firestore().collection("authenticatedUsers").where("username","==",usernameId.value)
    //   .get()
    //   .then(function(querySnapshot) {
    //       querySnapshot.forEach(function(doc) {
    //           // doc.data() is never undefined for query doc snapshots
    //           // console.log(doc.id, " => ", doc.data());
    //           name=doc.data().username;
    //           console.log(name);
           

    //       });
    //      // document.getElementById("khedu").value=name;
    //   })
    //   .catch(function(error) {
    //       console.log("Error getting documents: ", error);
    //   });
      
     });

     recRegisterBtn.addEventListener("click", e=>{
      //Get Email and password
      // TODO CHECK FOR REAL EMAIL
      const recEmail = recEmailId.value;
      const recPass = recPassId.value;
      const rauth = firebase.auth();
      //Signup
      const signUp = rauth.createUserWithEmailAndPassword(recEmail, recPass);
      signUp.catch(e => console.log(e.message));
      authn1();

      setTimeout(doSomething, 4000);

      function doSomething() {
        window.location.href="rdashboard.html";
      }

     });

    // function loadMessages() {
    //   // Create the query to load the last 12 messages and listen for new ones.
    //  //var name1 = getUserName();
      
    //   var query = firebase.firestore()
    //                   .collection('authenticatedUsers');
      
    //   // Start listening to the query.
    //   query.onSnapshot(function(snapshot) {
    //     snapshot.docChanges().forEach(function(change) {
    //       if (change.type === 'removed') {
    //         deleteMessage(change.doc.id);
    //       } else {
    //         var message = change.doc.data();
    //         displayMessage(message.name);
    //       }
    //     });
    //   });
    // }

//     // Delete a Message from the UI.
// function deleteMessage(id) {
//   var div = document.getElementById(id);
//   // If an element for that message exists we delete it.
//   if (div) {
//     div.parentNode.removeChild(div);
//   }
// }

//     // Displays a Message in the UI.
// function displayMessage(name) {
//   var div = document.getElementById(id);
//   // If an element for that message does not exists yet we create it.
// }

//   loadMessages();

    // function print() {
    //   // Add a new message entry to the Firebase database.
    //   //console.log(uid)
    //   return firebase.firestore().collection('authenticatedUsers').get({
    //     username: usernameId.value,
    //     email: emailId.value,
    //     location: locId.value,
    //     phone: phoneId.value,
    //   }).catch(function(error) {
    //     console.error('Error writing new message to Firebase Database', error);
    //   });
    // }


//     // Triggered when the send new message form is submitted.
// function onMessageFormSubmit(e) {
//   e.preventDefault();
//   // Check that the user entered a message and is signed in.
//   if (messageInputElement.value && checkSignedInWithMessage()) {
//     saveMessage(messageInputElement.value).then(function() {
//       // Clear message text field and re-enable the SEND button.
//       resetMaterialTextfield(messageInputElement);
//       toggleButton();
//       loadMessages();
//     });
//   }
  
// }

     //Add Login Event
    //  userLoginBtn.addEventListener("click", e=>{
    //   //Get Email and password
    //   // TODO: CHECK FOR REAL EMAIL
    //   const email = emailId.value;
    //   const pass = passId.value;
    //   const auth = firebase.auth();
    //   //Signup
    //   const signUp = auth.signInWithEmailAndPassword(email, pass);
    //   signUp.catch(e => console.log(e.message));
    // });
    

    //Add Logout Event
    // userLogoutBtn.addEventListener("click", e=>{
    //   firebase.auth().signOut();
    // })


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