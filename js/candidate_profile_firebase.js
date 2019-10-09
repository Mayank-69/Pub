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
    var name;
  
    // const usernameId = document.getElementById("userNameId");
    // const emailId = document.getElementById("emailId");
    // const passId = document.getElementById("passId");
    // const rPassId =  document.getElementById("rPassId");
    // const locId = document.getElementById("locId");
    // const phoneId = document.getElementById("phoneId");
    // const userRegisterBtn = document.getElementById("userRegisterBtn");
    //const userLoginBtn = document.getElementById("userLoginBtn");
    const userLogoutBtn1 = document.getElementById("userLogoutBtn1");
  
    // //Add Sign up Event
    // userRegisterBtn.addEventListener("click", e=>{
    //   //Get Email and password
    //   // TODO CHECK FOR REAL EMAIL
    //   const email = emailId.value;
    //   const pass = passId.value;
    //   const auth = firebase.auth();
    //   //Signup
    //   const signUp = auth.createUserWithEmailAndPassword(email, pass);
    //   signUp.catch(e => console.log(e.message));
    // });
  
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
    userLogoutBtn1.addEventListener("click", e=>{
      firebase.auth().signOut();
      // window.location.href = "index.html"
    })
  
    // function loadMessages() {
    //   // Create the query to load the last 12 messages and listen for new ones.
    //  //var name1 = getUserName();
    //   //console.log(uid);
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
  
    function myfunction()
  {
      firebase.firestore().collection("authenticatedUsers").where("userId","==",getUid).
        get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                name=doc.data().username;
              
              // var user = firebase.auth().currentUser;
  
              // if (user) {
              // console.log("signed in");
              // } else {
              //   // No user is signed in
              //   console.log("not");
              // }
              // console.log(getUid);
              
                //console.log(user.uid);
                // console.log(name);
                // getUid = firebaseUser.uid;
                document.getElementById("khedu").innerHTML=name;
  
            });
           // 
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
  }
  
  
  function myfunction1()
  {
      firebase.firestore().collection("portfolio").where("userId","==",getUid).
        get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                name=doc.data().firstname;
              
              // var user = firebase.auth().currentUser;
  
              // if (user) {
              // console.log("signed in");
              // } else {
              //   // No user is signed in
              //   console.log("not");
              // }
              // console.log(getUid);
              
                //console.log(user.uid);
                // console.log(name);
                // getUid = firebaseUser.uid;
                document.getElementById("name").innerHTML=name;
  
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
    
    //Add a realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)
      {
        getUid = firebaseUser.uid;
        console.log(firebaseUser);
        console.log(firebaseUser.uid);
        checkSignedInWithMessage();
        myfunction();
        myfunction1();
        
      }
      else
      {
        console.log("not logged in");
        window.location.href = "index.html"
      }
    })
  
  })()