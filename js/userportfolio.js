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
  firebase.firestore().collection("photo").where("emailid","==",getEmail).
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

    firebase.firestore().collection("portfolio").where("emailId","==",getEmail).
      get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log("chal raha hai");
              // doc.data() is never undefined for query doc snapshots
              // console.log(doc.id, " => ", doc.data());
              
              ig1=doc.data().igphotos1;
              ig2=doc.data().igphotos2;
              ig3=doc.data().igphotos3;
              ig4=doc.data().igphotos4;
              ig5=doc.data().igphotos5;
              ig6=doc.data().igphotos6;
              ig7=doc.data().igphotos7;
              ig8=doc.data().igphotos8;
              ig9=doc.data().igphotos9;
              ig10=doc.data().igphotos10;

              igv1=doc.data().igvideo1;
              igv2=doc.data().igvideo2;
              igv3=doc.data().igvideo3;
              igv4=doc.data().igvideo4;
              igv5=doc.data().igvideo5;
              igv6=doc.data().igvideo6;
              igv7=doc.data().igvideo7;
              igv8=doc.data().igvideo8;
              igv9=doc.data().igvideo9;
              igv10=doc.data().igvideo10;
              
              
              yt1=doc.data().ytvideo1;
              yt2=doc.data().ytvideo2;
              yt3=doc.data().ytvideo3;
              yt4=doc.data().ytvideo4;
              yt5=doc.data().ytvideo5;
              yt6=doc.data().ytvideo6;
              yt7=doc.data().ytvideo7;
              yt8=doc.data().ytvideo8;
              yt9=doc.data().ytvideo9;
              yt10=doc.data().ytvideo10;
               
              sc1=doc.data().soundtrack1;
              sc2=doc.data().soundtrack2;
              sc3=doc.data().soundtrack3;
              sc4=doc.data().soundtrack4;
              sc5=doc.data().soundtrack5;
              sc6=doc.data().soundtrack6;
              sc7=doc.data().soundtrack7;
              sc8=doc.data().soundtrack8;
              sc9=doc.data().soundtrack9;
              sc10=doc.data().soundtrack10;



              // getUid = firebaseUser.uid; 
              document.getElementById("firstName").innerHTML=doc.data().firstname;
              // document.getElementById("lastName").innerHTML=doc.data().lastname;
              
              document.getElementById("talents").innerHTML=doc.data().artisttype;
              document.getElementById("description").innerHTML=doc.data().description;
              document.getElementById("ethinicity").innerHTML=doc.data().ethinicity;
              document.getElementById("bodytype").innerHTML=doc.data().bodytype;
              document.getElementById("gender").innerHTML=doc.data().gender;
              document.getElementById("ylocation").innerHTML=doc.data().ylocation;
              document.getElementById("jlocation").innerHTML=doc.data().jlocation;
              document.getElementById("nationality").innerHTML=doc.data().nationality;
              document.getElementById("complexity").innerHTML=doc.data().complexity;
              document.getElementById("height").innerHTML=doc.data().height;
              document.getElementById("skills").innerHTML=doc.data().skills;
              document.getElementById("experiences").innerHTML=doc.data().experiences;

              document.getElementById("email").innerHTML= 'Email:'+ getEmail ;

              document.getElementById("igphotosid1").innerHTML=ig1;
              document.getElementById("igphotosid2").innerHTML=ig2;
              document.getElementById("igphotosid3").innerHTML=ig3;
              document.getElementById("igphotosid4").innerHTML=ig4;
              document.getElementById("igphotosid5").innerHTML=ig5;
              document.getElementById("igphotosid6").innerHTML=ig6;
              document.getElementById("igphotosid7").innerHTML=ig7;
              document.getElementById("igphotosid8").innerHTML=ig8;
              document.getElementById("igphotosid9").innerHTML=ig9;
              document.getElementById("igphotosid10").innerHTML=ig10;

              document.getElementById("igvideos1").innerHTML=igv1;
              document.getElementById("igvideos2").innerHTML=igv2;
              document.getElementById("igvideos3").innerHTML=igv3;
              document.getElementById("igvideos4").innerHTML=igv4;
              document.getElementById("igvideos5").innerHTML=igv5;
              document.getElementById("igvideos6").innerHTML=igv6;
              document.getElementById("igvideos7").innerHTML=igv7;
              document.getElementById("igvideos8").innerHTML=igv8;
              document.getElementById("igvideos9").innerHTML=igv9;
              document.getElementById("igvideos10").innerHTML=igv10;
              
              document.getElementById("ytviddeoid1").innerHTML=yt1;
              document.getElementById("ytviddeoid2").innerHTML=yt2;
              document.getElementById("ytviddeoid3").innerHTML=yt3;
              document.getElementById("ytviddeoid4").innerHTML=yt4;
              document.getElementById("ytviddeoid5").innerHTML=yt5;
              document.getElementById("ytviddeoid6").innerHTML=yt6;
              document.getElementById("ytviddeoid7").innerHTML=yt7;
              document.getElementById("ytviddeoid8").innerHTML=yt8;
              document.getElementById("ytviddeoid9").innerHTML=yt9;
              document.getElementById("ytviddeoid10").innerHTML=yt10;
              
              document.getElementById("sc1").innerHTML=sc1;
              document.getElementById("sc2").innerHTML=sc2;
              document.getElementById("sc3").innerHTML=sc3;
              document.getElementById("sc4").innerHTML=sc4;
              document.getElementById("sc5").innerHTML=sc5;
              document.getElementById("sc6").innerHTML=sc6;
              document.getElementById("sc7").innerHTML=sc7;
              document.getElementById("sc8").innerHTML=sc8;
              document.getElementById("sc9").innerHTML=sc9;
              document.getElementById("sc10").innerHTML=sc10;
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


// function myfunction1()
// {
//     firebase.firestore().collection("recruiters").where("userId","==",getUid).
//       get()
//       .then(function(querySnapshot) {
//           querySnapshot.forEach(function(doc) {
//               // doc.data() is never undefined for query doc snapshots
//               // console.log(doc.id, " => ", doc.data());
//               name=doc.data().username;
            
//               // getUid = firebaseUser.uid;
//               document.getElementById("khedu").innerHTML=name;

//           });
//          // 
//       })
//       .catch(function(error) {
//           console.log("Error getting documents: ", error);
//       });
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
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      getUid = firebaseUser.uid;
      getEmail=firebaseUser.email;
      console.log(firebaseUser);
      console.log(firebaseUser.uid);
      checkSignedInWithMessage();
      myfunction();
      // pp();
    
      // myfunction1();
      
    }
    else
    {
      console.log("not logged in");
      // window.location.href = "index.html"
    }
  })

})()