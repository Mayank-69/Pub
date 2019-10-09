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
    
    // var report = document.getElementById("report");
    var presentation = document.getElementById("presentation");
    var video = document.getElementById("video");
    var github = document.getElementById("github");
    var research = document.getElementById("research");
    var upload = document.getElementById("upload");
    var fileButton = document.getElementById("report");
    var fileButton1 = document.getElementById("presentation");
    var fileButton2 = document.getElementById("video");
    var fileButton3 = document.getElementById("research");


    var uploadv = document.getElementById("uploader1");
    var uploadv1 = document.getElementById("uploader2");
    var uploadv2 = document.getElementById("uploader3");
    var uploadv3 = document.getElementById("uploader4");
    var rep1,pres1,vid1,res1;

    var slicevideo,ogvideo,count=0;
var project_name,des,mentor,domain,research1,year,branch,project_tags,slicepresent,ogpresent,name;



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

      project_name=localStorage.getItem("project_name");
      des=localStorage.getItem("project_des");
      mentor=localStorage.getItem("mentor_name");
      domain=localStorage.getItem("Domain");
      research1= localStorage.getItem("research");
      year= localStorage.getItem("year");
        branch=localStorage.getItem("branch");
        project_tags=localStorage.getItem("project_tags");
      fileButton.addEventListener('change',function(e) {
        file = e.target.files[0];
        
        var storageRef = firebase.storage().ref('report/'+getEmail+'/'+project_name+'.pdf');
    
        var task = storageRef.put(file);
    
        task.on('state_changed',function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploadv.value = percentage;
    
        },
        
        function error(err) {
            console.log("errrror");
        },
    
        function complete() { 
            console.log("completeee");
    
        }
    
        )
    })
    

    fileButton1.addEventListener('change',function(e) {
      file = e.target.files[0];
      
      var storageRef = firebase.storage().ref('presentation/'+getEmail+'/'+project_name+'.pdf');
  
      var task = storageRef.put(file);
  
      task.on('state_changed',function progress(snapshot) {
          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploadv1.value = percentage;
  
      },
      
      function error(err) {
          console.log("errrror");
      }, 
  
      function complete() { 
          console.log("completeee");
  
      }
  
      )
  })
  fileButton2.addEventListener('change',function(e) {
    file = e.target.files[0];
    
    var storageRef = firebase.storage().ref('video/'+getEmail+'/'+project_name+'.pdf');

    var task = storageRef.put(file);

    task.on('state_changed',function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploadv2.value = percentage;

    },
    
    function error(err) {
        console.log("errrror");
    },

    function complete() { 
        console.log("completeee");

    }

    )
})
fileButton3.addEventListener('change',function(e) {
  file = e.target.files[0];
  
  var storageRef = firebase.storage().ref('research/'+getEmail+'/'+project_name+'.pdf');

  var task = storageRef.put(file);

  task.on('state_changed',function progress(snapshot) {
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploadv3.value = percentage;

  },
  
  function error(err) {
      console.log("errrror");
  },

  function complete() { 
      console.log("completeee");

  }

  )
})

      upload.addEventListener("click",slice2);

      



      function slice2()
      {
        var storage = firebase.storage();
        var storageRef = storage.ref();

        storageRef.child('report/'+getEmail+'/'+project_name+'.pdf').getDownloadURL().then(function(url1) {
          // `url` is the download URL for 'images/stars.jpg'
        
          // This can be downloaded directly:
          var xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function(event) {
            var blob = xhr.response;
          };
          xhr.open('GET', url1);
          xhr.send();
          console.log(url1);
          rep1=url1;

          localStorage.setItem("project_name",project_name);
          localStorage.setItem("project_des",des);
          localStorage.setItem("mentor_name",mentor);
          localStorage.setItem("Domain",domain);
          localStorage.setItem("research",research1);
          localStorage.setItem("year",year);
          localStorage.setItem("branch",branch);
          localStorage.setItem("tags",project_tags);
          localStorage.setItem("report",report); 
          
          localStorage.setItem("video",video);
          localStorage.setItem("github",github);
          localStorage.setItem("research",research);
          

        



          
        }).catch(function(error) {
          // Handle any errors
        });


        // 

        storageRef.child('presentation/'+getEmail+'/'+project_name+'.pdf').getDownloadURL().then(function(url2) {
          // `url` is the download URL for 'images/stars.jpg'
        
          // This can be downloaded directly:
          var xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function(event) {
            var blob = xhr.response;
          };
          xhr.open('GET', url2);
          xhr.send();
          console.log(url2);
          pres1=url2;


        


          
        }).catch(function(error) {
          // Handle any errors
        });

        // 

        storageRef.child('video/'+getEmail+'/'+project_name+'.pdf').getDownloadURL().then(function(url3) {
          // `url` is the download URL for 'images/stars.jpg'
        
          // This can be downloaded directly:
          var xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function(event) {
            var blob = xhr.response;
          };
          xhr.open('GET', url3);
          xhr.send();
          console.log(url3);
          
        vid1=url3;
          

          
        }).catch(function(error) {
          // Handle any errors
        });

        // 

        storageRef.child('research/'+getEmail+'/'+project_name+'.pdf').getDownloadURL().then(function(url4) {
          // `url` is the download URL for 'images/stars.jpg'
        
          // This can be downloaded directly:
          var xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function(event) {
            var blob = xhr.response;
          };
          
          xhr.open('GET', url4);
          xhr.send();
          console.log(url4);
         
res1=url4;


          

          
getname(rep1,pres1,vid1,res1);
        

         



          
      
}).catch(function(error) {
  // Handle any errors
});


       
      }

      
      function getname(rep1,pres1,vid1,res1)
      {

        console.log("url",rep1)
console.log("getname",pres1);

        console.log("getname",vid1);

        console.log("getname",res1);



        firebase.firestore().collection("authenticatedUsers").where("email", "==", getEmail)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log("hussa");
                name=doc.data().username;
                console.log(name)
                upload1(rep1,pres1,vid1,res1)
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });

        
      }

      function upload1(rep1,pres1,vid1,res1)
      {
        console.log("url",rep1)
        console.log("getname",pres1);
        
                console.log("getname",vid1);
        
                console.log("getname",res1);
firebase.firestore().collection("Student Portfolio").doc(project_name).set({
report:'<iframe width="1300" height="1000" src="'+rep1+'"></iframe>',
presentation:'<iframe width="1300" height="1000" src="'+pres1+'"></iframe>',
video:'<iframe width="1300" height="1000" src="'+vid1+'"></iframe>',
researchp:'<iframe width="1300" height="1000" src="'+res1+'"></iframe>',
email:getEmail,
projectname:project_name,
description:des,
mentor:mentor,
domain:domain,
research:research1,
year:year,
branch:branch,
projecttags:project_tags,



 
div1:'<div style="width:500px;height:320px;margin-top:50px;" class="  card text-white bg-danger o-hidden content">'
+'<div class="card-body">'
  +'<div class="card-body-icon">'
      +'<i class="material-icons" style="font-size:100px;padding-top: 25px;"></i>'
    +'</div>'
  +     '<h4><span id="titlename">Title: '+project_name +'</span></h4>' 
  +    '<p >Email: '+getEmail +'</p>'
   +   '<ul>'
   
      +    '<li >Domain: '+domain+'</li>'
      +    '<li >Branch: '+branch+'</li>'
      +    '<li >Description: '+des+'</li>'
      +    '<li >Project Tags: '+project_tags+'</li>'

      +      '</ul>'
+'</div>'
+'<a class="card-footer text-white clearfix small z-1" onclick=myFunction("'+project_name+'","'+getEmail+'")>'
  +'<span class="float-left">View Details</span>'
  +'<span class="float-right">'
    +'<i class="fas fa-angle-right"></i>'
  +'</span>'
+'</a>'
+'</div>',




})
setTimeout(function(){setdiv(); }, 4000);



      }

function setdiv()
{
  console.log(name)
  firebase.firestore().collection("Mentor student div").doc(getEmail).set({
    
    email:getEmail,
   

    
    
    div2:'<div style="width:500px;height:290px;margin-top:50px;" class="  card text-white bg-danger o-hidden content">'
    +'<div class="card-body">'
      +'<div class="card-body-icon">'
          +'<i class="material-icons" style="font-size:100px;padding-top: 25px;"></i>'
        +'</div>'
      +     '<h4><span id="titlename">Name: '+name +'</span></h4>' 
      +    '<p >Email: '+getEmail +'</p>'
       +   '<ul>'
       
          +    '<li >Mentor: '+mentor+'</li>'
          +    '<li >Branch: '+branch+'</li>'
   
          +      '</ul>'
    
          +'</div>'
          +'<a class="card-footer text-white clearfix small z-1" onclick=myFunction1("'+project_name+'","'+getEmail+'")>'
            +'<span class="float-left">View Project</span>'
            +'<span class="float-right">'
              +'<i class="fas fa-angle-right"></i>'
            +'</span>'
          +'</a>'

          +'<a class="card-footer text-white clearfix small z-1" onclick=myFunction2("'+project_name+'","'+getEmail+'")>'
          +'<span class="float-left">View All Report</span>'
          +'<span class="float-right">' 
            +'<i class="fas fa-angle-right"></i>'
          +'</span>'
        +'</a>'
          +'</div>'
  })
  intent();
        }
function intent()
      {
          console.log("gussa")
        
        setTimeout(function(){window.location.href="Student_profile.html"; }, 5000);
      }
     
  
  })()