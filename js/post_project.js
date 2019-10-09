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
    var Home;
    var count =0;
      //Add Logout Event
  

    //post job elments from form
    const projName = document.getElementById("projName");
    const projTitle = document.getElementById("projTitle");
    const projLoc = document.getElementById("projLoc");
    const projDecription = document.getElementById("projDecription");
    const age = document.getElementById("age");
    const jlocation = document.getElementById("jlocation");
    const projSkills = document.getElementById("projSkills");
    const gender = document.getElementById("gender");
    const nationality = document.getElementById("nationality");
   
    const complexity = document.getElementById("complexity");
    const numOfArtists = document.getElementById("numOfArtists");
    const audition = document.getElementById("audition");
    const budget = document.getElementById("budget");
    const height = document.getElementById("height");
    const submit = document.getElementById('submit');
    const expiration = document.getElementById('expiration');
    var companyName;
    var getEmail;
    var url1;
    var timedate;
    var datechecks;
    var str7;
    var date5;

     var art;
    $('#jlocation2').change(function(){
      art = $(this).val();
      document.getElementById("damn2").value=art;
        
    
    })
   

    const talentCategory = document.getElementById("damn2");

    submit.addEventListener("click", e=>
     {

     
       console.log("gum",expiration.value);
       if(projName.value.length==0||projTitle.value.length==0||projDecription.value.length==0||numOfArtists.value.length==0||expiration.value.length==0||talentCategory.value.length==0||projLoc.value.length==0)
       {
        alert("please fill the required fields")
       }
       else
       { dateconvert();
       }
      

     });

    function dateconvert()
    {
      Home= document.getElementById("coffee");
      
      
      Home.style.display="block";

    datechecks = expiration.value;

    //2019-06-18

   var date1= datechecks.slice(0,4);
   console.log(date1);
   var date2= datechecks.slice(5,7);
   console.log(date2);

   var date3= datechecks.slice(8,10);
   console.log(date3);
if(date2 == "01")
{ var date4 = date2.replace("01","Jan");

}

else if(date2 == "02")
{
  var date4 = date2.replace("02","Feb");

}
else if(date2 == "03")
{
  var date4 = date2.replace("03","Mar");

}
else if(date2 == "04")
{
  var date4 = date2.replace("04","Apr");

}
else if(date2 == "05")
{
  var date4 = date2.replace("05","May");

}
else if(date2 == "06")
{
  var date4 = date2.replace("06","Jun");

}
else if(date2 == "07")
{
  var date4 = date2.replace("07","Jul");

}
else if(date2 == "08")
{
  var date4 = date2.replace("08","Aug");

}
else if(date2 == "09")
{
  var date4 = date2.replace("09","Sep");

}
else if(date2 == "10")
{
  var date4 = date2.replace("10","Oct");

}
else if(date2 == "11")
{
  var date4 = date2.replace("11","Nov");

}
else if(date2 == "12")
{
  var date4 = date2.replace("12","Dec");

}
 

   console.log(date4);

   date5 = date4+" "+date3+" "+date1;
   console.log(date5);



      checking();
    }


     function checking()
     {
      const usersRef = firebase.firestore().collection('AllPostedProjects').doc(projName.value)

      usersRef.get()
        .then((docSnapshot) => {
          if (docSnapshot.exists) {
          alert("Project name already exist please try again.")
          } else {
          savetemporaray();
          }
      });
     }
function savetemporaray()
{
  // firebase.firestore().collection("temporaray4").doc(getEmail).set({
  //   codename:projName.value,
  //   email:getEmail,
  // })
  localStorage.setItem("postprojectcodename",projName.value);
  localStorage.setItem("detailsemail1",'');
  localStorage.setItem("appliedmoredetails",'');
  localStorage.setItem("shortlistedmoredetails",'');
  localStorage.setItem("searchdetails",'');
  localStorage.setItem("appliedpagedetails",'');
  localStorage.setItem("shortlistedpagedetails",'');
  getCompanyName();
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
            
            // saveMessage();
            // saveMessage1();
            allProjects();
            // someprojects();
            setTimeout(doSomething, 5000);
   
            function doSomething() {
              intent();
            }
           
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
      var tnumberof_artists= numOfArtists.value;
      var des1 = projDecription.value;
      
      var tage = age.value;
      var tjlocation = jlocation.value;
      var tgender = gender.value;
      var tcomplexity = complexity.value;
      var taudition = audition.value;
      var tbudget = budget.value;
      var theight = height.value;
      var tnationality = nationality.value; 
      
      var ttime = firebase.firestore.FieldValue.serverTimestamp();
      
      console.log(ttime);

      console.log("allProjects() me gaya");
      return firebase.firestore().collection('ReviewPostedProjects').doc(projName.value).set({
        email:getEmail,
        projectname: projName.value,
        title: projTitle.value,
        location:  projLoc.value,
        talent_type: talent,
        skills: projSkills.value,
        numberof_artists: numOfArtists.value,
        description: projDecription.value,
         age : age.value,
         jlocation:jlocation.value,
         gender:gender.value,
         complexity:complexity.value,
         audition:audition.value,
         budget:budget.value,
         height:height.value,
         nationality:nationality.value,
         expiration:date5,
        company: companyName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
        div:'<div  class="khem content" id="maindiv" >'  
        +'<div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">'
           + '<div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">' 
           +        '<div  class="ratio1"  style="background-image: url('+url1+');"></div>'
              + '<div class="row">'
                
              +  '<div>'
               +     '<div class="jp_job_post_side_img">'
             
                 +   '</div>'
                  +  '<div class="jp_job_post_right_cont jp_job_post_grid_right_cont">'
                   +     '<h4><span id="titlename">Titlename: '+projTitle.value +'</span></h4>' 
                    +    '<p >Talent Needed: '+talentCategory.value +'</p>'
                     +   '<ul>'
                      +      '<li></li>'
                       +     '<li >Company Name :'+companyName +'</li>'
                        +    '<li >Job Location: '+projLoc.value+'</li>'
                        +    '<li >Skills Required: '+projSkills.value +'</li>'
                        +    '<li >Expiration date: '+date5+'</li>'
 
                        +      '</ul>'
                      + '</div>'  
             +   '</div>' 
              +  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
               +     '<div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">'
   +'<ul>'
   +'<li><a class="fuckit1" id="viewbtn" value='+projTitle.value+' onclick=myFunction1("'+getEmail+'")>Company Profile</a></li>'
 
                  +      '</ul>'
                  +'<ul>'
   +'<li><a class="fuckit1" id="viewbtn" value='+projTitle.value+' onclick=myFunction2("'+projName.value+'")>More details</a></li>'
 
                  +      '</ul>'
                  +        '<ul>'
                  +'<li><a class="fuckit" style="color: green" id="'+projName.value+'" value='+projTitle.value+' onclick=myFunction("'+encodeURI(tits)+'","'+encodeURI(tits2)+'","'+encodeURI(tits1)+'","'+encodeURI(talent)+'","'+encodeURI(loc)+'","'+encodeURI(skills)+'","'+encodeURI(getEmail)+'","'+encodeURI(tnumberof_artists)+'","'+encodeURI(des1)+'","'+encodeURI(tage)+'","'+encodeURI(tjlocation)+'","'+encodeURI(tgender)+'","'+encodeURI(tcomplexity)+'","'+encodeURI(taudition)+'","'+encodeURI(tbudget)+'","'+encodeURI(theight)+'","'+encodeURI(tnationality)+'","'+encodeURI(firebase.firestore.FieldValue.serverTimestamp())+'","'+encodeURI(date5)+'")>Accept</a></li>'
                  +'</ul>'
                  
                  +        '<ul>'
                  +'<li><a class="fuckit" style="color: red" id="'+projName.value+"reject"+'" value='+projTitle.value+' onClick=myFunction4("'+encodeURI(getEmail)+'","'+encodeURI(tits1)+'","'+encodeURI(tits)+'")>Reject</a></li>'
                  +'</ul>'
                 +   '</div>'
               + '</div>'
          +  '</div>' 
       + '</div>'
      +  '<div class="jp_job_post_keyword_wrapper">'
       +     '<ul>'
        +        '<li><i class="fa fa-tags"></i>Description:</li>'
         +       '<li >'+projDecription.value +'<a href="#"></a></li>'
          +  '</ul>'
       + '</div>'
    +'</div>'
    +'</div>',


      }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });


     }
    
           
           function intent()
           {
            alert("The project you have posted is under review.You will be notified once it is reviewed.");

            window.location.href = "post_display_userside.html"
           }

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser)
    {
      getEmail = firebaseUser.email;
      console.log("You are logged icxxcn");

      timedate();
    }
    else
    {
      console.log("not logged in");
      window.location.href = "index.html"
    }
  })


  function timedate()
  {
    firebase.firestore().collection("Timestamp").where("email","==",getEmail).
get()
.then(function(querySnapshot) {
  querySnapshot.forEach(function(doc)
  {
     
     timedate = doc.data().timestamp.toDate();

     console.log(timedate);

     str1 = timedate.toString();

     str3 = str1.slice(4,15);

     console.log(str3);

    var str4 = str3.slice(0,3);
    console.log("hula",str4);
    if(str4 =="Jun")
    { var str9= str4.replace("Jun", "06");
  
  }
  else  if(str4 =="Jul")
  { var str9= str4.replace("Jul", "07");

}
else  if(str4 =="Aug")
  { var str9= str4.replace("Aug", "08");

}

   
    console.log("vio",str9);
    
    var str5 = str3.slice(4,6);
    console.log(str5);

    var str6 = str3.slice(7,11);
    console.log(str6);

    str7 = str6+"-"+str9+"-"+str5;
    console.log(str7);
    
    
    document.getElementById("expiration").setAttribute("min",str7);
    document.getElementById("expiration").setAttribute("value",str7);
  })



}

)

  }


})()