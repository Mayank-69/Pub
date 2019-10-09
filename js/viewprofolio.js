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
  var compkaemail;
  var emailji,url1;
  var ytt1,ytt2,ytt3,ytt4,ytt5,ytt6,ytt7,ytt8,ytt9,ytt10;
  var igtest1,igtest2,igtest3,igtest4,igtest5,igtest6,igtest7,igtest8,igtest9,igtest10,count=0;
  var igtestv1,igtestv2,igtestv3,igtestv4,igtestv5,igtestv6,igtestv7,igtestv8,igtestv9,igtestv10;
  var link1,link2,link3,link4,link5,link6,link7,link8,link9,link10;

  // const userLogoutBtn1 = document.getElementById("userLogoutBtn1");


  //Add Logout Event
  // userLogoutBtn1.addEventListener("click", e=>{
  //   firebase.auth().signOut();
  //   // window.location.href = "index.html"
  // })


  function rok()
    {

                
        firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
        compkaemail = firebaseUser.email;
      console.log("You are logged in 2");
      console.log(compkaemail);
      setTimeout(doSomething, 4000);
   
   function doSomething() { 
    emaillena();
   }
     
     
     
    }
    

    else
    {
      alert("You are not signed in")
     
      window.location.href = "login.html"
    }
  })
            }




    
function  emaillena()
  {

    // firebase.firestore().collection("temporaray1").where("compemail","==",compkaemail).
    //   get()
    //   .then(function(querySnapshot) {
    //                   // var titleyo =[];
    //                       querySnapshot.forEach(function(doc) {
    //                       emailji=doc.data().email;
                       
    //                       console.log(emailji);
                         
                
                            
                        
    //                           console.log("ueueueueueueueueue");
    //                           myfunction();
                             
    //                       });
                          
            
                
                          
                
                            
                
    //                   })

  //  emailji=localStorage.getItem("email");
    // localStorage.getItem("compemail");
    if(emailji != '' || emailji=='')
{
  console.log("i am racist");
  emailji=''; 
// console.log("applied"+companyEmail);
// companyEmail=""; 
//   companyEmail=localStorage.getItem("viewcompanyapplied");
if(localStorage.getItem("paidmal") !='')
{
  emailji=localStorage.getItem("paidmal");
  console.log("emailjiiii",emailji);
}
else if(localStorage.getItem("email") != '')
{
  emailji=localStorage.getItem("email");
}
else if(localStorage.getItem("selectedmal") != '')
{
  console.log("malmalmal")
  emailji=localStorage.getItem("selectedmal");
}
else if(localStorage.getItem("showappliedusermal") != '')
{
  console.log("malmalmal")
  emailji=localStorage.getItem("showappliedusermal");
}


    
    myfunction();

  }
  }



function myfunction()
{
  console.log("1sdfdfds");
  console.log(emailji);
  // firebase.firestore().collection("photo").where("emailid","==",emailji).
  //     get()
  //     .then(function(querySnapshot) {
  //         querySnapshot.forEach(function(doc) { 
  //           // console.log("2"); 
  //           //   url1='<img src='+doc.data().url+' height="500px" width="1500px" style ="padding-right: 0em">';
  //           url1='<div  class="ratio img-responsive img-circle"  style="background-image: url('+doc.data().url+');"></div>'
  //             console.log("jata hu ab pakka");
  //           document.getElementById("pranay").innerHTML=url1;
  //           console.log("2");
  //           // location.reload();

  //           // document.getElementById("pranay").innerHTML= getEmail ;
  //           console.log("hua ki nahi bc");   
  //         });
  //        // 
  //     })

  firebase.firestore().collection("portfolio").where("emailId","==",emailji).
  get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          igtest1=doc.data().igpurl1;
          igtest2=doc.data().igpurl2;
          igtest3=doc.data().igpurl3;
          igtest4=doc.data().igpurl4;
          igtest5=doc.data().igpurl5;
          igtest6=doc.data().igpurl6;
          igtest7=doc.data().igpurl7;
          igtest8=doc.data().igpurl8;
          igtest9=doc.data().igpurl9;
          igtest10=doc.data().igpurl10;



          
          ////////////////////////////
          igtestv1=doc.data().igpurlv1;
          igtestv2=doc.data().igpurlv2;
          igtestv3=doc.data().igpurlv3;
          igtestv4=doc.data().igpurlv4;
          igtestv5=doc.data().igpurlv5;
          igtestv6=doc.data().igpurlv6;
          igtestv7=doc.data().igpurlv7;
          igtestv8=doc.data().igpurlv8;
          igtestv9=doc.data().igpurlv9;
          igtestv10=doc.data().igpurlv10;








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
          
         
          ytt1=doc.data().ytvideo1;
          ytt2=doc.data().ytvideo2;
          ytt3=doc.data().ytvideo3;
          ytt4=doc.data().ytvideo4;
          ytt5=doc.data().ytvideo5;
          ytt6=doc.data().ytvideo6;
          ytt7=doc.data().ytvideo7;
          ytt8=doc.data().ytvideo8;
          ytt9=doc.data().ytvideo9;
          ytt10=doc.data().ytvideo10;

          yt1=doc.data().youtubeiframe1;
          yt2=doc.data().youtubeiframe2;
          yt3=doc.data().youtubeiframe3;
          yt4=doc.data().youtubeiframe4;
          yt5=doc.data().youtubeiframe5;
          yt6=doc.data().youtubeiframe6;
          yt7=doc.data().youtubeiframe7;
          yt8=doc.data().youtubeiframe8;
          yt9=doc.data().youtubeiframe9;
          yt10=doc.data().youtubeiframe10;
           
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

          link1 = doc.data().soundtrack1;
          link2 = doc.data().soundtrack2;
          link3 =doc.data().soundtrack3;
          link4 =doc.data().soundtrack4;
          link5 = doc.data().soundtrack5;
          link6 = doc.data().soundtrack6;
          link7 =doc.data().soundtrack7;
          link8 = doc.data().soundtrack8;
          link9 = doc.data().soundtrack9;
          link10 = doc.data().soundtrack10;

          // getUid = firebaseUser.uid; 
          document.getElementById("firstName").innerHTML=doc.data().firstname;
          
         
          // document.getElementById("lastName").innerHTML=doc.data().lastname;
          document.getElementById("age").innerHTML=doc.data().age;
          document.getElementById("language").innerHTML=doc.data().language;
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

          document.getElementById("email").innerHTML= 'Email:'+ emailji ;

          if(igtest1=="" && igtest2==""  && igtest3=="" && igtest4=="" && igtest5=="" && igtest6=="" && igtest7=="" && igtest8=="" && igtest9=="" && igtest10==""  && igtestv1 =='' && igtestv2 =='' &&igtestv3 =='' &&igtestv4 =='' &&igtestv5 =='' &&igtestv6 =='' &&igtestv7 =='' &&igtestv8 =='' &&igtestv9 =='' &&igtestv10 =='' && ytt1 =='' && ytt2 =='' &&ytt3 =='' &&ytt4 =='' &&ytt5 =='' &&ytt6 =='' &&ytt7 =='' &&ytt8 =='' &&ytt9 =='' &&ytt10 =='' && link1 =='' && link2 =='' &&link3=='' &&link4 =='' &&link5 =='' &&link6 =='' &&link7 =='' &&link8 =='' &&link9 =='' &&link10 =='' )
          {
            console.log("if me guussse hi nahi raha")
            var Home1= document.getElementById("title");
           
           
            Home1.style.display="none";
          }
          if(igtest1=="" && igtest2==""  && igtest3=="" && igtest4=="" && igtest5=="" && igtest6=="" && igtest7=="" && igtest8=="" && igtest9=="" && igtest10==""  )
          {
            var Home1= document.getElementById("instagramhello");
            var Home2= document.getElementById("igp1");
            var Home3= document.getElementById("igp");


            Home1.style.display="none";
            Home2.style.display="none";
            Home3.style.display="none";


          }
          if(igtest1 =='')
          {
            var Home1= document.getElementById("igphotosid1");


Home1.style.display="none";
            // document.getElementById("igphotosid1").innerHTML="Upload Your instagram photos!!";
          }
          else
          {
            console.log("kuch mila");
            document.getElementById("igphotosid1").innerHTML=ig1;

          }
          if(igtest2 =='')
          {
           
            var Home1= document.getElementById("igphotosid2");


            Home1.style.display="none";              }
          else
          {
            console.log("kuch mila");
            document.getElementById("igphotosid2").innerHTML=ig2;

          }
          if(igtest3 =='')
          {
           
            var Home1= document.getElementById("igphotosid3");


            Home1.style.display="none";              }
          else
          {
            console.log("kuch mila");
            document.getElementById("igphotosid3").innerHTML=ig3;

          }
          if(igtest4 =='')
          {
           
            var Home1= document.getElementById("igphotosid4");


            Home1.style.display="none";              }
          else
          {
            console.log("kuch mila");
            document.getElementById("igphotosid4").innerHTML=ig4;

          }
          if(igtest5 =='')
          {
            
            var Home1= document.getElementById("igphotosid5");


            Home1.style.display="none";              }
          else
          {
            console.log("kuch mila");
            document.getElementById("igphotosid5").innerHTML=ig5;

          }
          if(igtest6 =='')
          {
           
            var Home1= document.getElementById("igphotosid6");


            Home1.style.display="none";              }
          else
          {
            console.log("kuch mila");
            document.getElementById("igphotosid6").innerHTML=ig6;

          }
          if(igtest7=='')
          {
           
            var Home1= document.getElementById("igphotosid7");


            Home1.style.display="none";              }
          else
          {
            console.log("kuch mila");
            document.getElementById("igphotosid7").innerHTML=ig7;

          }
          if(igtest8 =='')
          {
           
            var Home1= document.getElementById("igphotosid8");


            Home1.style.display="none";              }
          else
          {
            console.log("kuch mila");
            document.getElementById("igphotosid8").innerHTML=ig8;

          }
          if(igtest9 =='')
          {
           
            var Home1= document.getElementById("igphotosid9");


            Home1.style.display="none";              }
          else
          {
            console.log("kuch mila");
            document.getElementById("igphotosid9").innerHTML=ig9;

          }
          if(igtest10 =='')
          {
           
            var Home1= document.getElementById("igphotosid10");


            Home1.style.display="none";              }
          else
          {
            console.log("kuch mila");
            document.getElementById("igphotosid10").innerHTML=ig10;

          }

////////////////////////////////////////////////instagram videos////////////////////////////////////////////////////////////////////////
if(igtestv1 =='' && igtestv2 =='' &&igtestv3 =='' &&igtestv4 =='' &&igtestv5 =='' &&igtestv6 =='' &&igtestv7 =='' &&igtestv8 =='' &&igtestv9 =='' &&igtestv10 =='' )
{
var Home1= document.getElementById("videohello");
var Home2= document.getElementById("iv1");
var Home3= document.getElementById("iv");


Home1.style.display="none";
Home2.style.display="none";
Home3.style.display="none";

}
if(igtestv1 =='')
{

var Home1= document.getElementById("igvideos1");


Home1.style.display="none";  

}
else
{
console.log("kuch mila");
document.getElementById("igvideos1").innerHTML=igv1;

}
if(igtestv2 =='')
{

var Home1= document.getElementById("igvideos2");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("igvideos2").innerHTML=igv2;

}
if(igtestv3 =='')
{

var Home1= document.getElementById("igvideos3");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("igvideos3").innerHTML=igv3;

}
if(igtestv4 =='')
{

var Home1= document.getElementById("igvideos4"); 


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("igvideos4").innerHTML=igv4;

}
if(igtestv5 =='')
{

var Home1= document.getElementById("igvideos5");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("igvideos5").innerHTML=igv5;

}
if(igtestv6 =='')
{

var Home1= document.getElementById("igvideos6");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("igvideos6").innerHTML=igv6;

}
if(igtestv7=='')
{

var Home1= document.getElementById("igvideos7");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("igvideos7").innerHTML=igv7;

}
if(igtestv8 =='')
{

var Home1= document.getElementById("igvideos8");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("igvideos8").innerHTML=igv8;

}
if(igtestv9 =='')
{

var Home1= document.getElementById("igvideos9");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("igvideos9").innerHTML=igv9;

}
if(igtestv10 =='')
{

var Home1= document.getElementById("igvideos10");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("igvideos10").innerHTML=igv10;

}



///////////////////////////////////////////////////youtube videos/////////////////////////////////////////////////////////////////////////////////////////

if(ytt1 =='' && ytt2 =='' &&ytt3 =='' &&ytt4 =='' &&ytt5 =='' &&ytt6 =='' &&ytt7 =='' &&ytt8 =='' &&ytt9 =='' &&ytt10 =='')
{
var Home1= document.getElementById("yvideohello");
var Home2= document.getElementById("yiv1");
var Home3= document.getElementById("yiv");


Home1.style.display="none";
Home2.style.display="none";
Home3.style.display="none";
}

if(ytt1 =='')
{
var Home1= document.getElementById("ytviddeoid1");


Home1.style.display="none";  
}
else
{
console.log("kuch mila");
document.getElementById("ytviddeoid1").innerHTML=yt1;

}

if(ytt2 =='')
{

var Home1= document.getElementById("ytviddeoid2");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("ytviddeoid2").innerHTML=yt2;

}
if(ytt3 =='')
{

var Home1= document.getElementById("ytviddeoid3");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("ytviddeoid3").innerHTML=yt3;

}
if(ytt4 =='')
{

var Home1= document.getElementById("ytviddeoid4");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("ytviddeoid4").innerHTML=yt4;

}
if(ytt5 =='')
{

var Home1= document.getElementById("ytviddeoid5");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("ytviddeoid5").innerHTML=yt5;

}
if(ytt6 =='')
{

var Home1= document.getElementById("ytviddeoid6");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("ytviddeoid6").innerHTML=yt6;

}
if(ytt7 =='')
{

var Home1= document.getElementById("ytviddeoid7");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("ytviddeoid7").innerHTML=yt7;

}
if(ytt8 =='')
{

var Home1= document.getElementById("ytviddeoid8");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("ytviddeoid8").innerHTML=yt8;

}
if(ytt9 =='')
{

var Home1= document.getElementById("ytviddeoid9");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("ytviddeoid9").innerHTML=yt9;

}
if(ytt10 =='')
{

var Home1= document.getElementById("ytviddeoid10");


Home1.style.display="none";  }
else
{
console.log("kuch mila");
document.getElementById("ytviddeoid10").innerHTML=yt10;

}  
        

          
          // document.getElementById("ytviddeoid1").innerHTML=yt1;
          // document.getElementById("ytviddeoid2").innerHTML=yt2;
          // document.getElementById("ytviddeoid3").innerHTML=yt3;
          // document.getElementById("ytviddeoid4").innerHTML=yt4;
          // document.getElementById("ytviddeoid5").innerHTML=yt5;
          // document.getElementById("ytviddeoid6").innerHTML=yt6;
          // document.getElementById("ytviddeoid7").innerHTML=yt7;
          // document.getElementById("ytviddeoid8").innerHTML=yt8;
          // document.getElementById("ytviddeoid9").innerHTML=yt9;
          // document.getElementById("ytviddeoid10").innerHTML=yt10;

         

          if(link1 =='' && link2 =='' &&link3=='' &&link4 =='' &&link5 =='' &&link6 =='' &&link7 =='' &&link8 =='' &&link9 =='' &&link10 =='')
          {
            console.log("gussna")
            var Home1= document.getElementById("one");
var Home2= document.getElementById("two");
var Home3= document.getElementById("three");


Home1.style.display="none";
Home2.style.display="none";
Home3.style.display="none";
          }
          if(link1 =='')
          {
            var Home1= document.getElementById("sc1");


            Home1.style.display="none";
          }
          else
          {
            document.getElementById("sc1").innerHTML=sc1;

          }
          if(link2 =='')
          {
            var Home1= document.getElementById("sc2");


            Home1.style.display="none";
          }
          else
          {
            document.getElementById("sc2").innerHTML=sc2;

          }
          if(link3 =='')
          {
            var Home1= document.getElementById("sc3");


            Home1.style.display="none";
          }
          else
          {
            document.getElementById("sc3").innerHTML=sc3;

          }
          if(link4 =='')
          {
            var Home1= document.getElementById("sc4");


            Home1.style.display="none";
          }
          else
          {
            document.getElementById("sc4").innerHTML=sc4;

          }
          if(link5 =='')
          {
            var Home1= document.getElementById("sc5");


            Home1.style.display="none";
          }
          else
          {
            document.getElementById("sc5").innerHTML=sc5;

          }
          if(link6 =='')
          {
            var Home1= document.getElementById("sc6");


            Home1.style.display="none";
          }
          else
          {
            document.getElementById("sc6").innerHTML=sc6;

          }
          if(link7 =='')
          {
            var Home1= document.getElementById("sc7");


            Home1.style.display="none";
          }
          else
          {
            document.getElementById("sc7").innerHTML=sc7;

          }
          if(link8 =='')
          {
            var Home1= document.getElementById("sc8");


            Home1.style.display="none";
          }
          else
          {
            document.getElementById("sc8").innerHTML=sc8;

          }
          if(link9 =='')
          {
            var Home1= document.getElementById("sc9");


            Home1.style.display="none";
          }
          else
          {
            document.getElementById("sc9").innerHTML=sc9;

          }
          if(link10 =='')
          {
            var Home1= document.getElementById("sc10");


            Home1.style.display="none";
          }
          else
          {
            document.getElementById("sc10").innerHTML=sc10;

          }
      //     return firebase.firestore().collection('photo').doc(getEmail).set({
      //       url:url,
      //       emailid:getEmail
      //  })
      //  .catch(function(error) {
      //   console.error('Error writing new message to Firebase Database', error);
      // });
      //  var Home= document.getElementById("coffee");


      //   Home.style.display="none";//To display the div

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
      // var Home= document.getElementById("coffee");


      // Home.style.display="block";//To display the div
      getUid = firebaseUser.uid;
      getEmail=firebaseUser.email;
      console.log(firebaseUser);
      console.log(firebaseUser.uid);
      console.log(getEmail);
      checkSignedInWithMessage();
      rok();
      // pp();
    
      // myfunction1();
      
    }
    else
    {
      alert("You are not signed in")
     
      window.location.href = "login.html"
    }
  })

})()