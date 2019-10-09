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
    const userLogoutBtn1 = document.getElementById("userLogoutBtn1");
    var count =0;
      //Add Logout Event
    userLogoutBtn1.addEventListener("click", e=>
    {
    firebase.auth().signOut();
    //window.location.href = "index.html" 
    })
    //post job elments from form
    const projTitle = document.getElementById("projTitle");
    const projLoc = document.getElementById("projLoc");
    const projDate = document.getElementById("projDate");
    const talentCategory =  document.getElementById("talentCategory");
    const projSkills = document.getElementById("projSkills");
    const numOfArtists = document.getElementById("numOfArtists");
    const projBanner = document.getElementById("projBanner");
    const projDecription = document.getElementById("projDecription");
    const projUploadBtn = document.getElementById("projUploadBtn");
    const projName = document.getElementById("projName");
    var companyName;
    var getEmail,url1;
    

    projUploadBtn.addEventListener("click", e=>
     {
      var count = 0;                
      console.log(count);  
                        
      var projname= document.getElementById("projName").value;
      console.log(projname);
   //var  re = /^\S+$/g
   //var re = /^[0-9]/;
   var re1 = /^(?=.*[a-zA-Z])+\S+$/g
  // var re1 = /^(?=.*[a-zA-Z])+\S+$/g
   
      if(projname.match(re1))
{
  count=0;
  console.log("yaha"+count);
  checkingMechanism();
} 
else{

  alert("no");
}



});


console.log("yaha se pehle"+count);

function checkingMechanism()
{
  firebase.firestore().collection("AllPostedProjects").where("projectname","==",projName.value).onSnapshot(function(querySnapshot){
    var cities = [];
    querySnapshot.forEach(function(doc){
      // cities.push(doc.data().projectname);
      // console.log(cities);
      console.log("trueeeeeeeeeeee");
      count=1;
      console.log(projName.value);
      // if(projName.value == cities)
      // {
      //   count = 0;
      // }
      // else{
      //   count = 1;
      // }
      if(count == 0)
      {
        getCompanyName();
      }
      else
      {
        console.log(count);
        console.log("Project Codename is already present");
        // count=0;
        // count=2;
      }
    });
  })
console.log("yeh console"+count);
  setTimeout(doSomething, 4000);
   
   function doSomething() {
    
if(count==0)
{
  console.log(count);
  console.log("ruka hua hu bc");
  getCompanyName();
}

else{
  console.log(count);
  console.log("nahi gusssa  one wala");
}
   }


}

     function getCompanyName()
     {
      firebase.firestore().collection("rphoto").where("emailid","==",getEmail).
      get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc)
        {
            url1=doc.data().url;


        })



      }
      
      )
      
      firebase.firestore().collection("recruiters").where("email","==",getEmail).
      get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log("email ka snapshot mila");
            companyName = doc.data().company;
         
            console.log("company name mila");
            console.log(companyName);
            
            saveMessage();
            saveMessage1();
            allProjects();
            someprojects();
            // generateDiv();
          });
         // 
      })
      
     }

     function allProjects()
     {
      var tits  = projTitle.value;
      var tits1  = projName.value;
      var tits2 = companyName;
      var talent = talentCategory.value;
      var loc = projLoc.value;
      var skills = projSkills.value;

      console.log("allProjects() me gaya");
      return firebase.firestore().collection('AllPostedProjects').doc(projName.value).set({
        
        projectname: projName.value,
        title: projTitle.value,
        location: loc,
        date: projDate.value,
        talent_type: talent,
        skills: skills,
        numberof_artists: numOfArtists.value,
        description: projDecription.value,
        banner: projBanner.value,
        company: companyName,
        
        div: '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="maindiv" >' 
        +'<div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">'
           + '<div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">' 
              + '<div class="row">'

                
              +  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
               +     '<div class="jp_job_post_side_img">'
                +        '<div  class="ratio1 img-responsive1 img-circle1"  style="background-image: url('+url1+');"></div>'
                 +   '</div>'
                  +  '<div class="jp_job_post_right_cont jp_job_post_grid_right_cont">'
                   +     '<h4><span id="titlename">'+projTitle.value +'</span></h4>' 
                    +    '<p >'+talentCategory.value +'</p>'
                     +   '<ul>'
                      +      '<li></li>'
                       +     '<li >'+companyName +'</li>'
                        +    '<li >'+projLoc.value +'</li>'
                        +      '</ul>'
                      + '</div>'
             +   '</div>'
              +  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
               +     '<div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">'
                +        '<ul>'
   +'<li><button class="fuckit" id="applybtn" value='+projTitle.value+' onclick=myFunction("'+tits+'","'+tits2+'","'+tits1+'","'+talent+'","'+loc+'","'+skills+'","'+getEmail+'")>&nbsp; Apply</button></li>'
   +'<li><button class="fuckit1" id="viewbtn" value='+projTitle.value+' onclick=myFunction1("'+getEmail+'")>&nbsp; View</button></li>'
 
                  +      '</ul>'
                 +   '</div>'
               + '</div>'
          +  '</div>' 
       + '</div>'
      +  '<div class="jp_job_post_keyword_wrapper">'
       +     '<ul>'
        +        '<li><i class="fa fa-tags"></i>Skills :</li>'
         +       '<li >'+projSkills.value +'<a href="#"></a></li>'
          +  '</ul>'
       + '</div>'
    +'</div>'
    +'</div>',


      }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });


     }
    
     function saveMessage() {
      var tits  = projTitle.value;
      var tits1  = projName.value;
      console.log("saveMessages() me gaya");
      console.log(companyName);
      const db = firebase.firestore();
      console.log(projName.value);
      const activeProj = db.collection('PostedProject').doc(companyName).collection('activeProjects').doc(projName.value);
      return activeProj.set({
        projectname: projName.value,
        title: projTitle.value,
        location: projLoc.value,
        date: projDate.value,
        talent_type: talentCategory.value,
        skills: projSkills.value,
        numberof_artists: numOfArtists.value,
        description: projDecription.value,
        banner: projBanner.value,
        company: companyName,
        div: '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="maindiv" >' 
        +'<div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">'
           + '<div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">' 
              + '<div class="row">'

                
              +  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
               +     '<div class="jp_job_post_side_img">'
               +        '<div  class="ratio1 img-responsive1 img-circle1"  style="background-image: url('+url1+');"></div>'
                 +   '</div>'
                  +  '<div class="jp_job_post_right_cont jp_job_post_grid_right_cont">'
                   +     '<h4><span id="titlename">'+projTitle.value +'</span></h4>' 
                     +    '<p >'+talentCategory.value +'</p>'
                     +   '<ul>'
                      +      '<li></li>'
                       +     '<li >'+companyName +'</li>'
                        +    '<li >'+projLoc.value +'</li>'
                        +      '</ul>'
                      + '</div>'
             +   '</div>'
              +  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
               +     '<div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">'
               +        '<ul>'
               +'<li><a class="fuckit" id="applybtn" value='+projTitle.value+' onclick=myFunction1("'+companyName+'","'+projName.value+'","'+getEmail+'","'+projTitle.value+'","'+projLoc.value+'","'+talentCategory.value+'","'+projSkills.value+'")>&nbsp; View</a></li>'
                              +      '</ul>'
                              +        '<ul>'
                              +'<li><a class="fuckit" id="deletebtn" value='+projTitle.value+' onClick=deleteProject("'+companyName+'","'+projName.value+'","'+projTitle.value+'")>&nbsp; Delete</a></li>'
                                             +      '</ul>'
                 +   '</div>'
               + '</div>'
          +  '</div>' 
           
       + '</div>'
      +  '<div class="jp_job_post_keyword_wrapper">'
       +     '<ul>'
        +        '<li><i class="fa fa-tags"></i>Skills :</li>'
         +       '<li >'+projSkills.value +'<a href="#"></a></li>'
          +  '</ul>'
       + '</div>'
    +'</div>'
    +'</div>',
      }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });
    }




    //profile active projects

    function saveMessage1() {
      var tits  = projTitle.value;
      var tits1  = projName.value;
      console.log("saveMessages() me gaya");
      console.log(companyName);
      const db = firebase.firestore();
      console.log(projName.value);
      const activeProj = db.collection('PostedProject').doc(companyName).collection('activeProject_profile').doc(projName.value);
      return activeProj.set({
        projectname: projName.value,
        title: projTitle.value,
        location: projLoc.value,
        date: projDate.value,
        talent_type: talentCategory.value,
        skills: projSkills.value,
        numberof_artists: numOfArtists.value,
        description: projDecription.value,
        banner: projBanner.value,
        company: companyName,
        div: '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="maindiv" >' 
        +'<div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">'
           + '<div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">' 
              + '<div class="row">'

                
              +  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
               +     '<div class="jp_job_post_side_img">'
               +        '<div  class="ratio1 img-responsive1 img-circle1"  style="background-image: url('+url1+');"></div>'
                 +   '</div>'
                  +  '<div class="jp_job_post_right_cont jp_job_post_grid_right_cont">'
                   +     '<h4><span id="titlename">'+projTitle.value +'</span></h4>' 
                     +    '<p >'+talentCategory.value +'</p>'
                     +   '<ul>'
                      +      '<li></li>'
                       +     '<li >'+companyName +'</li>'
                        +    '<li >'+projLoc.value +'</li>'
                        +      '</ul>'
                      + '</div>'
             +   '</div>'
              +  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
               +     '<div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">'
               
                 +   '</div>'
               + '</div>'
          +  '</div>' 
           
       + '</div>'
      +  '<div class="jp_job_post_keyword_wrapper">'
       +     '<ul>'
        +        '<li><i class="fa fa-tags"></i>Skills :</li>'
         +       '<li >'+projSkills.value +'<a href="#"></a></li>'
          +  '</ul>'
       + '</div>'
    +'</div>'
    +'</div>',
      }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });
    }


           function someprojects()
           {
          
            var tits  = projTitle.value;
            var tits1  = projName.value;
            console.log("saveMessages() me gaya");
            console.log(companyName);
            const db = firebase.firestore();
            console.log(projName.value);
            const activeProj = db.collection('All Selected Projects').doc(tits);
            return activeProj.set({
              companyname:companyName,
              div: '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12" id="maindiv" >' 
              +'<div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">'
                 + '<div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">' 
                    + '<div class="row">'
      
                      
                    +  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
                     +     '<div class="jp_job_post_side_img">'
                     +        '<div  class="ratio1 img-responsive1 img-circle1"  style="background-image: url('+url1+');"></div>'
                       +   '</div>'
                        +  '<div class="jp_job_post_right_cont jp_job_post_grid_right_cont">'
                         +     '<h4><span id="titlename">'+projTitle.value +'</span></h4>' 
                           +    '<p >'+talentCategory.value +'</p>'
                           +   '<ul>'
                            +      '<li></li>'
                             +     '<li >'+companyName +'</li>'
                              +    '<li >'+projLoc.value +'</li>'
                              +      '</ul>'
                            + '</div>'
                   +   '</div>'
                    +  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
                     +     '<div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">'
                      +        '<ul>'
         +'<li><a class="fuckit" id="applybtn" value='+projTitle.value+' onclick=myFunction1("'+companyName+'","'+projName.value+'","'+getEmail+'")>&nbsp; View</a></li>'
                        +      '</ul>'
                       +   '</div>'
                     + '</div>'
                +  '</div>' 
             + '</div>'
            +  '<div class="jp_job_post_keyword_wrapper">'
             +     '<ul>'
              +        '<li><i class="fa fa-tags"></i>Skills :</li>'
               +       '<li >'+projSkills.value +'<a href="#"></a></li>'
                +  '</ul>'
             + '</div>'
          +'</div>'
          +'</div>',
            }).catch(function(error) {
              console.error('Error writing new message to Firebase Database', error);
            });
            
           }            
           
           






    // function generateDiv()
    // {
    //   console.log("generateDiv() me gaya");
    //   // function create(htmlStr) {
    //   //   var frag = document.createDocumentFragment(),
    //   //       temp = document.createElement('div');
    //   //   temp.innerHTML = htmlStr;
    //   //   while (temp.firstChild) {
    //   //       frag.appendChild(temp.firstChild);
    //   //     }
    //   //       return frag;
    //   // }
    //   // var fragment = create('<div class="someclass"><a href="www.example.com"><p>some text</p></a></div>'); 
    //   // var generateHere = document.getElementById("generateDiv");
    //   // generateHere.insertBefore(fragment, generateHere.firstChild);
    //   var generateHere = document.getElementById("generateDiv");
    //   generateHere.innerHTML = '<div class="someclass"><a href="www.example.com"><p>some text</p></a></div>';
    // }
 //Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      getEmail = firebaseUser.email;
      console.log("You are logged in");
    }
    else
    {
      console.log("not logged in");
      window.location.href = "index.html"
    }
  })


})()