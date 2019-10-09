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
var name,sub,ethini,btype,skill,experience,descript,gend,yloc,nation,artist,complex,heights,insta1,insta2,insta3,insta4,insta5,insta6,insta7,insta8,insta9,insta10,instav1,instav2,instav3,instav4,instav5,instav6,instav7,instav8,instav9,instav10,ytt1,ytt2,ytt3,ytt4,ytt5,ytt6,ytt7,ytt8,ytt9,ytt10,sct1,sct2,sct3,sct4,sct5,sct6,sct7,sct8,sct9,sct10,newa,newb,newd,ylocationnaya;
var arr,lang,art,age1,Home;
var cities = [];
var jloc=[];
var languages,displayjloc;
var count =0,ytslice1,index1,ytslice2,index2,ytslice3,index3,ytslice4,index4,ytslice5,index5,ytslice6,index6,ytslice7,index7,ytslice8,index8,ytslice9,index9,ytslice10,index10;

var ig1url,ig2url,ig3url,ig4url,ig5url,ig6url,ig7url,ig8url,ig9url,ig10url;
var ig1urlv,ig2urlv,ig3urlv,ig4urlv,ig5urlv,ig6urlv,ig7urlv,ig8urlv,ig9urlv,ig10urlv,myId1,myId2,myId3,myId4,myId5,myId6,myId7,myId8,myId9,myId10,settings,url1;
// yo();
    const firstname = document.getElementById("first_name");
    const submitbutton = document.getElementById("submit");
    const ethinicity = document.getElementById("ethnicity");
    const bodytype = document.getElementById("bodytype");
    const skills = document.getElementById("skills");
    const experiences = document.getElementById("experiences");
    const description = document.getElementById("description");
    const gender = document.getElementById("gender");
    const ylocation = document.getElementById("ylocation");
    var age = document.getElementById("age");

    var arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr10,location, username, email, phone;

    $('#youtube_videos1').change(
      function(){
       arr1 = $(this).val(); 
      
       
      
      document.getElementById("youtube_videos1").value=arr1;

      console.log(arr1);
      
  })  
  $('#youtube_videos2').change(
    function(){
     arr2 = $(this).val(); 
    
     
    
    document.getElementById("youtube_videos2").value=arr2;

    console.log(arr2);
    
})  
$('#youtube_videos3').change(
  function(){
   arr3 = $(this).val(); 
  
   
  
  document.getElementById("youtube_videos3").value=arr3;

  console.log(arr3);
  
})  
$('#youtube_videos4').change(
  function(){
   arr4 = $(this).val(); 
  
   
  
  document.getElementById("youtube_videos4").value=arr4;

  console.log(arr4);
  
})  
$('#youtube_videos5').change(
  function(){
   arr5 = $(this).val(); 
  
   
  
  document.getElementById("youtube_videos5").value=arr5;

  console.log(arr5);
  
})  
$('#youtube_videos6').change(
  function(){
   arr6 = $(this).val(); 
  
   
  
  document.getElementById("youtube_videos6").value=arr6;

  console.log(arr6);
  
})  
$('#youtube_videos7').change(
  function(){
   arr7 = $(this).val(); 
  
   
  
  document.getElementById("youtube_videos7").value=arr7;

  console.log(arr7);
  
})  
$('#youtube_videos8').change(
  function(){
   arr8 = $(this).val(); 
  
   
  
  document.getElementById("youtube_videos8").value=arr8;

  console.log(arr8);
  
})  
$('#youtube_videos9').change(
  function(){
   arr9 = $(this).val(); 
  
   
  
  document.getElementById("youtube_videos9").value=arr9;

  console.log(arr9);
  
})  
$('#youtube_videos10').change(
  function(){
   arr10 = $(this).val(); 
  
   
  
  document.getElementById("youtube_videos10").value=arr10;

  console.log(arr10);
  
})  
// https://www.youtube.com/watch?v=nDPzZSgJVvU&t=80s

   
    $('#jlocation').change(
      function(){
       arr = $(this).val(); 
      
       
      
      document.getElementById("damn").value=arr;
      
      
  })
  $('#jlocation1').change(function(){
    lang = $(this).val();
    document.getElementById("damn1").value=lang;
    console.log(lang);
      
  
})
$('#jlocation2').change(function(){
  art = $(this).val();
  document.getElementById("damn2").value=art;
  console.log(art);


})

 const jlocationreal = document.getElementById("damn");
 const jlanguage = document.getElementById("damn1");
 const artist1 = document.getElementById("damn2");

    const nationality = document.getElementById("nationality");
    const artisttype = document.getElementById("artist_type");
    const complexity = document.getElementById("complexity");
    const height = document.getElementById("height");
    const igphotos1 = document.getElementById("insta_photos1");
    const igphotos2 = document.getElementById("insta_photos2");
    const igphotos3 = document.getElementById("insta_photos3");
    const igphotos4 = document.getElementById("insta_photos4");
    const igphotos5 = document.getElementById("insta_photos5");
    const igphotos6 = document.getElementById("insta_photos6");
    const igphotos7 = document.getElementById("insta_photos7");
    const igphotos8 = document.getElementById("insta_photos8");
    const igphotos9 = document.getElementById("insta_photos9");
    const igphotos10 = document.getElementById("insta_photos10");
    const igvideos1 = document.getElementById("insta_videos1");
    const igvideos2 = document.getElementById("insta_videos2");
    const igvideos3 = document.getElementById("insta_videos3");
    const igvideos4 = document.getElementById("insta_videos4");
    const igvideos5 = document.getElementById("insta_videos5");
    const igvideos6 = document.getElementById("insta_videos6");
    const igvideos7 = document.getElementById("insta_videos7");
    const igvideos8 = document.getElementById("insta_videos8");
    const igvideos9 = document.getElementById("insta_videos9");
    const igvideos10 = document.getElementById("insta_videos10");

    const ytvideo1 = document.getElementById("youtube_videos1");
    const ytvideo2 = document.getElementById("youtube_videos2");
    const ytvideo3 = document.getElementById("youtube_videos3");
    const ytvideo4 = document.getElementById("youtube_videos4");
    const ytvideo5 = document.getElementById("youtube_videos5");
    const ytvideo6 = document.getElementById("youtube_videos6");
    const ytvideo7 = document.getElementById("youtube_videos7");
    const ytvideo8 = document.getElementById("youtube_videos8");
    const ytvideo9 = document.getElementById("youtube_videos9");
    const ytvideo10 = document.getElementById("youtube_videos10");
    

    const soundtrack1 = document.getElementById("sc1");
    const soundtrack2 = document.getElementById("sc2");
    const soundtrack3 = document.getElementById("sc3");
    const soundtrack4 = document.getElementById("sc4");
    const soundtrack5 = document.getElementById("sc5");
    const soundtrack6 = document.getElementById("sc6");
    const soundtrack7 = document.getElementById("sc7");
    const soundtrack8 = document.getElementById("sc8");
    const soundtrack9 = document.getElementById("sc9"); 
    const soundtrack10 = document.getElementById("sc10");
    
    function getname()
    {
      firebase.firestore().collection("authenticatedUsers").where("email","==",getEmail).onSnapshot(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {


            username = doc.data().username;
               saveMessage();
          })

        })




    }
   
    
    
    function saveMessage() {
    console.log("save message hmm");
     
       firebase.firestore().collection('portfolio').doc(getEmail).set({
        firstname: firstname.value,
        ethinicity: ethinicity.value,
        bodytype: bodytype.value,
        description: description.value,
        gender: gender.value,
        ylocation: ylocation.value,
        jlocation: jlocationreal.value,
        nationality: nationality.value,
        artisttype: artist1.value,
        complexity: complexity.value,
        height: height.value,
        skills: skills.value,
        language:jlanguage.value,
        age:age.value,
        experiences: experiences.value,
        igpurl1:igphotos1.value,
        igpurl2:igphotos2.value,
        igpurl3:igphotos3.value,
        igpurl4:igphotos4.value,
        igpurl5:igphotos5.value,
        igpurl6:igphotos6.value,
        igpurl7:igphotos7.value,
        igpurl8:igphotos8.value,
        igpurl9:igphotos9.value,
        igpurl10:igphotos10.value,

        igpurlv1:igvideos1.value,
        igpurlv2:igvideos2.value,
        igpurlv3:igvideos3.value,
        igpurlv4:igvideos4.value,
        igpurlv5:igvideos5.value,
        igpurlv6:igvideos6.value,
        igpurlv7:igvideos7.value,
        igpurlv8:igvideos8.value,
        igpurlv9:igvideos9.value,
        igpurlv10:igvideos10.value,

        igphotos1: '<iframe src="'+igphotos1.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true" ></iframe>',
        igphotos2: '<iframe src="'+igphotos2.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igphotos3: '<iframe src="'+igphotos3.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igphotos4: '<iframe src="'+igphotos4.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igphotos5: '<iframe src="'+igphotos5.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igphotos6: '<iframe src="'+igphotos6.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igphotos7: '<iframe src="'+igphotos7.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igphotos8: '<iframe src="'+igphotos8.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igphotos9: '<iframe src="'+igphotos9.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igphotos10: '<iframe src="'+igphotos10.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',

        igvideo1: '<iframe src="'+igvideos1.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igvideo2: '<iframe src="'+igvideos2.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igvideo3: '<iframe src="'+igvideos3.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igvideo4: '<iframe src="'+igvideos4.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igvideo5: '<iframe src="'+igvideos5.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igvideo6: '<iframe src="'+igvideos6.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igvideo7: '<iframe src="'+igvideos7.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igvideo8: '<iframe src="'+igvideos8.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',        
        igvideo9: '<iframe src="'+igvideos9.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        igvideo10: '<iframe src="'+igvideos10.value+'embed" width="310" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
        ytvideo1: ytvideo1.value,
        ytvideo2: ytvideo2.value,
        ytvideo3: ytvideo3.value,
        ytvideo4: ytvideo4.value,
        ytvideo5: ytvideo5.value,
        ytvideo6: ytvideo6.value,
        ytvideo7: ytvideo7.value,
        ytvideo8: ytvideo8.value,
        ytvideo9: ytvideo9.value,
        ytvideo10: ytvideo10.value,
        
        youtubeiframe1:'<iframe width="320" height="315" src="https://www.youtube.com/embed/'+ytslice1+'"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        youtubeiframe2:'<iframe width="320" height="315" src="https://www.youtube.com/embed/'+ytslice2+'"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        youtubeiframe3:'<iframe width="320" height="315" src="https://www.youtube.com/embed/'+ytslice3+'"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        youtubeiframe4:'<iframe width="320" height="315" src="https://www.youtube.com/embed/'+ytslice4+'"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        youtubeiframe5:'<iframe width="320" height="315" src="https://www.youtube.com/embed/'+ytslice5+'"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        youtubeiframe6:'<iframe width="320" height="315" src="https://www.youtube.com/embed/'+ytslice6+'"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        youtubeiframe7:'<iframe width="320" height="315" src="https://www.youtube.com/embed/'+ytslice7+'"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        youtubeiframe8:'<iframe width="320" height="315" src="https://www.youtube.com/embed/'+ytslice8+'"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        youtubeiframe9:'<iframe width="320" height="315" src="https://www.youtube.com/embed/'+ytslice9+'"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        youtubeiframe10:'<iframe width="320" height="315" src="https://www.youtube.com/embed/'+ytslice10+'"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',







        soundtrack1: soundtrack1.value,
        soundtrack2: soundtrack2.value,
        soundtrack3: soundtrack3.value,
        soundtrack4: soundtrack4.value,
        soundtrack5: soundtrack5.value,
        soundtrack6: soundtrack6.value,
        soundtrack7: soundtrack7.value,
        soundtrack8: soundtrack8.value,
        soundtrack9: soundtrack9.value,
        soundtrack10: soundtrack10.value,
        emailId: getEmail, 
      }).catch(function(error) {
        console.error('Error writing new message to Firebase Database', error);
      });
photolena();
    
    }
    
    function yo()
    { firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)
      {  getUid = firebaseUser.uid;
         getEmail = firebaseUser.email;
         getEmail1=firebaseUser.email;
      
        // checkSignedInWithMessage();
        
        
     
        
       
      }
      else
      {
        // checkSignedInWithMessage();
        alert("You are not signed in")
     
        window.location.href = "login.html"
      }
    
     
      // var getEmail1;
      // var getEmail2=getEmail;
       firebase.firestore().collection("portfolio").where("emailId","==",getEmail).
      get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // console.log("2");
            //   url1='<img src='+doc.data().url+' height="500px" width="1500px" style ="padding-right: 0em">';
            // url1='<div  class="ratio img-responsive img-circle"  style="background-image: url('+doc.data().url+');"></div>'
        name=doc.data().firstname;
        ethini=doc.data().ethinicity;
        btype=doc.data().bodytype;
        skill=doc.data().skills;
        languages=doc.data().language;
        experience=doc.data().experiences;
        descript=doc.data().description;
        gend=doc.data().gender;
        yloc=doc.data().ylocation;
         jloc=doc.data().jlocation;
         displayjloc=doc.data().jlocation;
        // jloc.push(doc.data().jlocation);
        nation=doc.data().nationality;
        artist=doc.data().artisttype;
        complex=doc.data().complexity;
        heights=doc.data().height;
        age1 =doc.data().age;
        
 
        
        
        
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
         
        sct1=doc.data().soundtrack1;
        sct2=doc.data().soundtrack2;
        sct3=doc.data().soundtrack3;
        sct4=doc.data().soundtrack4;
        sct5=doc.data().soundtrack5;
        sct6=doc.data().soundtrack6;
        sct7=doc.data().soundtrack7;
        sct8=doc.data().soundtrack8;
        sct9=doc.data().soundtrack9;
        sct10=doc.data().soundtrack10;
        newa = doc.data().jlocation;
        newb = doc.data().language;
        newc = doc.data().artisttype;
        ig1url = doc.data().igpurl1;
        ig2url = doc.data().igpurl2;
        ig3url = doc.data().igpurl3;
        ig4url = doc.data().igpurl4;
        ig5url = doc.data().igpurl5;
        ig6url = doc.data().igpurl6;
        ig7url = doc.data().igpurl7;
        ig8url = doc.data().igpurl8;
        ig9url = doc.data().igpurl9;
        ig10url = doc.data().igpurl10;


        ig1urlv = doc.data().igpurlv1;
        ig2urlv = doc.data().igpurlv2;
        ig3urlv = doc.data().igpurlv3;
        ig4urlv = doc.data().igpurlv4;
        ig5urlv = doc.data().igpurlv5;
        ig6urlv = doc.data().igpurlv6;
        ig7urlv = doc.data().igpurlv7;
        ig8urlv = doc.data().igpurlv8;
        ig9urlv = doc.data().igpurlv9;
        ig10urlv = doc.data().igpurlv10;


       
            document.getElementById("first_name").value=name;
            document.getElementById("age").value=age1;
            document.getElementById("ethnicity").value=ethini;
            document.getElementById("bodytype").value=btype;
            document.getElementById("skills").value=skill;
            document.getElementById("experiences").value=experience;
            document.getElementById("description").value=descript;
            document.getElementById("gender").value=gend;
            document.getElementById("ylocation").value=yloc;
              
            document.getElementById("damn").value=newa;
            document.getElementById("damn1").value=newb;
            document.getElementById("damn2").value=newc;
            
        
           
            


            

            document.getElementById("nationality").value=nation;
            // document.getElementById("artist_type").value=artist;
            document.getElementById("complexity").value=complex;
            document.getElementById("height").value=heights;
            document.getElementById("insta_photos1").value=ig1url;
            document.getElementById("insta_photos2").value=ig2url;
            document.getElementById("insta_photos3").value=ig3url;
            document.getElementById("insta_photos4").value=ig4url;
            document.getElementById("insta_photos5").value=ig5url;
            document.getElementById("insta_photos6").value=ig6url;
            document.getElementById("insta_photos7").value=ig7url;
            document.getElementById("insta_photos8").value=ig8url;
            document.getElementById("insta_photos9").value=ig9url;
            document.getElementById("insta_photos10").value=ig10url;




            document.getElementById("insta_videos1").value=ig1urlv;
            document.getElementById("insta_videos2").value=ig2urlv;
            document.getElementById("insta_videos3").value=ig3urlv;
            document.getElementById("insta_videos4").value=ig4urlv;
            document.getElementById("insta_videos5").value=ig5urlv;
            document.getElementById("insta_videos6").value=ig6urlv;
            document.getElementById("insta_videos7").value=ig7urlv;
            document.getElementById("insta_videos8").value=ig8urlv;
            document.getElementById("insta_videos9").value=ig9urlv;

            document.getElementById("insta_videos10").value=ig10urlv;
            document.getElementById("youtube_videos1").value=ytt1;
            document.getElementById("youtube_videos2").value=ytt2;
            document.getElementById("youtube_videos3").value=ytt3;
            document.getElementById("youtube_videos4").value=ytt4;
            document.getElementById("youtube_videos5").value=ytt5;
            document.getElementById("youtube_videos6").value=ytt6;
            document.getElementById("youtube_videos7").value=ytt7;
            document.getElementById("youtube_videos8").value=ytt8;
            document.getElementById("youtube_videos9").value=ytt9;
            document.getElementById("youtube_videos10").value=ytt10;
            document.getElementById("sc1").value=sct1;
            document.getElementById("sc2").value=sct2;
            document.getElementById("sc3").value=sct3;
            document.getElementById("sc4").value=sct4;
            document.getElementById("sc5").value=sct5;
            document.getElementById("sc6").value=sct6;
            document.getElementById("sc7").value=sct7;
            document.getElementById("sc8").value=sct8;
            document.getElementById("sc9").value=sct9;
            document.getElementById("sc10").value=sct10;
            
           
        
            
            
          });
         // 
      })
    })
    
    }

function photolena()
{
  console.log("photolena hmm");
  firebase.firestore().collection("photo").where("emailid","==",getEmail).
  get()
  .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // console.log("2"); 
        //   url1='<img src='+doc.data().url+' height="500px" width="1500px" style ="padding-right: 0em">';
        url1=doc.data().url;
        console.log(url1);
        // document.getElementById("pranay").innerHTML=url1;
        // location.reload();

        // document.getElementById("pranay").innerHTML= getEmail ;
      });
     // 
  })
  setTimeout(doSomething,5000);
  function doSomething()
  {
getauthuser();
}
}
function getauthuser()
{
  console.log("getauthuser hmm");
  firebase.firestore().collection("authenticatedUsers").where("email","==",getEmail).
  get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc)
    {
      location = doc.data().location;

      username = doc.data().username;

      phone = doc.data().phone;

      email = doc.data().email;  
      setTimeout(doSomething,5000);
      function doSomething()
      {
        getportfolio();
    }      
 
     
    })



  } 
  
  )

} 


function getportfolio()
{

  console.log("getauthuser hmm");
  firebase.firestore().collection("portfolio").where("emailId","==",getEmail).
  get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc)
    {
      ylocationnaya = doc.data().ylocation;

     show_users();
 
     
    })



  } 
  
  )
}
    function show_users()
    {
      var none=" ";
      var availabeStatus = "Available";
      console.log("show user hmm");
        // console.log("SAVE MESSAGE ME GHUSA");
        firebase.firestore().collection('showusers').doc(getEmail).set({
          username: username,
          email: email,
          location: ylocationnaya,
          phone: phone,
          age: age.value,
          gender: gender.value,
          talent: artist1.value,
          availabe: availabeStatus,
          notfrom:'',
          notto:'',

          member:"false",
          div: '<div  class="khem content" id="maindiv" >' 
     +'<div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">'
        + '<div class="jp_job_post_main_wrapper jp_job_post_grid_main_wrapper">'
        +        '<div  class="ratio1"  style="background-image: url('+url1+');"></div>'

           + '<div class="row">'
  
             
           +  '<div>'
            +     '<div class="jp_job_post_side_img">'
              +   '</div>'
               +  '<div class="jp_job_post_right_cont jp_job_post_grid_right_cont">'
                +     '<h4><span id="titlename">User Name:'+username+'</span></h4>' 
                 +    '<p >User Email: '+email+'</p>'
                  +   '<ul>'
                   +      '<li></li>'
                    +     '<li >User Location: '+ylocationnaya+'</li>'
                    +'<li >Artist type: '+artist1.value+'</li>'
                    +     '<li class="kb" >Age: '+age.value+'</li>'
                    +'<li >Gender: '+gender.value+'</li>'
                    +'<li >Availability Status: '+availabeStatus+'</li>'
                    +'<br>'
                    +'<br>'              
                     +      '</ul>'
                   + '</div>'
          +   '</div>'
           +  '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'
             +     '<div class="jp_job_post_right_btn_wrapper jp_job_post_grid_right_btn_wrapper">'
                  +        '<ul>'
     +'<li><a class="fuckit" id="applybtn" onclick=myFunction2("'+email+'")>View portfolio</a></li>'
     
                    +      '</ul>'
                    +        '<ul>'
     +'<li><a class="fuckit1" id="selectTalent" onclick=myFunction3("'+email+'")>Select</a></li>'
     
                    +      '</ul>'
              +   '</div>'
            + '</div>'
       +  '</div>' 
    + '</div>'
   +  '<div class="jp_job_post_keyword_wrapper">'
    +     '<ul>'
     +        '<li><i class="fa fa-tags"></i>Phone no :</li>'
      +       '<li >'+phone+'<a href="#"></a></li>'
       +  '</ul>'
    + '</div>'
  +'</div>'
  +'</div>',
  
        }).catch(function(error) {
          console.error('Error writing new message to Firebase Database', error);
        });
      


    }


   
     function authn()
     {
       
       firebase.auth().onAuthStateChanged(firebaseUser => {
         if(firebaseUser)
         {  getUid = firebaseUser.uid;
            getEmail = firebaseUser.email;
            getEmail1=firebaseUser.email;


           
           
           checkSignedInWithMessage();
          //  saveMessage();
          getname();
           
           
          
           
          
         }
         else
         {
           checkSignedInWithMessage();
          
         }
       })
     }
     yo();
     submitbutton.addEventListener("click", e=>{
console.log("ganduuuuuuuuuuuuuuu",age.value.length);
      if((age.value.length) > 2 )
      {
        alert("Invalid age");

      }
      else
      {



      


      console.log("sexy",arr1);

    if(ytvideo1.value.includes("youtube"))
    {
      if(ytvideo1.value.includes("&"))
      {
         index1=ytvideo1.value.indexOf("&");

        console.log(index1);
         ytslice1= ytvideo1.value.slice(32,index1);
        console.log(ytslice1)
      }

      else
      {

        console.log("mera lund mahan");
        // https://www.youtube.com/watch?v=nDPzZSgJVvU
  
         ytslice1= ytvideo1.value.slice(32);
        console.log(ytslice1);
  
      }


     
    }

    if(ytvideo1.value.includes("youtu.be"))
    {
      console.log("mera lund mahan1");
      // https://www.youtube.com/watch?v=nDPzZSgJVvU

       ytslice1= ytvideo1.value.slice(17);
      console.log("nanga",ytslice1);


    }
    if(ytvideo2.value.includes("youtube"))
    {
      if(ytvideo2.value.includes("&"))
      {
         index2=ytvideo2.value.indexOf("&");

        console.log(index2);
         ytslice2= ytvideo2.value.slice(32,index2);
        console.log(ytslice2)
      }

      else
      {

        console.log("mera lund mahan");
        // https://www.youtube.com/watch?v=nDPzZSgJVvU
  
         ytslice2= ytvideo2.value.slice(32);
        console.log(ytslice2);
  
      }


     
    }

    if(ytvideo2.value.includes("youtu.be"))
    {
      console.log("mera lund mahan1");
      // https://www.youtube.com/watch?v=nDPzZSgJVvU

       ytslice2= ytvideo2.value.slice(17);
      console.log("nanga",ytslice2);


    }
    if(ytvideo3.value.includes("youtube"))
    {
      if(ytvideo3.value.includes("&"))
      {
         index3=ytvideo3.value.indexOf("&");

        console.log(index3);
         ytslice3= ytvideo3.value.slice(32,index3);
        console.log(ytslice3)
      }

      else
      {

        console.log("mera lund mahan");
        // https://www.youtube.com/watch?v=nDPzZSgJVvU
  
         ytslice3= ytvideo3.value.slice(32);
        console.log(ytslice3);
  
      }


     
    }

    if(ytvideo3.value.includes("youtu.be"))
    {
      console.log("mera lund mahan1");
      // https://www.youtube.com/watch?v=nDPzZSgJVvU

       ytslice3= ytvideo3.value.slice(17);
      console.log("nanga",ytslice3);


    }
    if(ytvideo4.value.includes("youtube"))
    {
      if(ytvideo4.value.includes("&"))
      {
         index4=ytvideo4.value.indexOf("&");

        console.log(index4);
         ytslice4= ytvideo4.value.slice(32,index4);
        console.log(ytslice4)
      }

      else
      {

        console.log("mera lund mahan");
        // https://www.youtube.com/watch?v=nDPzZSgJVvU
  
         ytslice4= ytvideo4.value.slice(32);
        console.log(ytslice4);
  
      }


     
    }

    if(ytvideo4.value.includes("youtu.be"))
    {
      console.log("mera lund mahan1");
      // https://www.youtube.com/watch?v=nDPzZSgJVvU

       ytslice4= ytvideo4.value.slice(17);
      console.log("nanga",ytslice4);


    }
    if(ytvideo5.value.includes("youtube"))
    {
      if(ytvideo5.value.includes("&"))
      {
         index5=ytvideo5.value.indexOf("&");

        console.log(index5);
         ytslice5= ytvideo5.value.slice(32,index5);
        console.log(ytslice5)
      }

      else
      {

        console.log("mera lund mahan");
        // https://www.youtube.com/watch?v=nDPzZSgJVvU
  
         ytslice5= ytvideo5.value.slice(32);
        console.log(ytslice5);
  
      }


     
    }

    if(ytvideo5.value.includes("youtu.be"))
    {
      console.log("mera lund mahan1");
      // https://www.youtube.com/watch?v=nDPzZSgJVvU

       ytslice5= ytvideo5.value.slice(17);
      console.log("nanga",ytslice5);


    }
    if(ytvideo6.value.includes("youtube"))
    {
      if(ytvideo6.value.includes("&"))
      {
         index6=ytvideo6.value.indexOf("&");

        console.log(index6);
         ytslice6= ytvideo6.value.slice(32,index6);
        console.log(ytslice6)
      }

      else
      {

        console.log("mera lund mahan");
        // https://www.youtube.com/watch?v=nDPzZSgJVvU
  
         ytslice6= ytvideo6.value.slice(32);
        console.log(ytslice6);
  
      }


     
    }

    if(ytvideo6.value.includes("youtu.be"))
    {
      console.log("mera lund mahan1");
      // https://www.youtube.com/watch?v=nDPzZSgJVvU

       ytslice6= ytvideo6.value.slice(17);
      console.log("nanga",ytslice6);


    }
    if(ytvideo7.value.includes("youtube"))
    {
      if(ytvideo7.value.includes("&"))
      {
         index7=ytvideo7.value.indexOf("&");

        console.log(index7);
         ytslice7= ytvideo7.value.slice(32,index7);
        console.log(ytslice7)
      }

      else
      {

        console.log("mera lund mahan");
        // https://www.youtube.com/watch?v=nDPzZSgJVvU
  
         ytslice7= ytvideo7.value.slice(32);
        console.log(ytslice7);
  
      }


     
    }

    if(ytvideo7.value.includes("youtu.be"))
    {
      console.log("mera lund mahan1");
      // https://www.youtube.com/watch?v=nDPzZSgJVvU

       ytslice7= ytvideo7.value.slice(17);
      console.log("nanga",ytslice7);


    }
    if(ytvideo8.value.includes("youtube"))
    {
      if(ytvideo8.value.includes("&"))
      {
         index8=ytvideo8.value.indexOf("&");

        console.log(index8);
         ytslice8= ytvideo8.value.slice(32,index8);
        console.log(ytslice8)
      }

      else
      {

        console.log("mera lund mahan");
        // https://www.youtube.com/watch?v=nDPzZSgJVvU
  
         ytslice8= ytvideo8.value.slice(32);
        console.log(ytslice8);
  
      }


     
    }

    if(ytvideo8.value.includes("youtu.be"))
    {
      console.log("mera lund mahan1");
      // https://www.youtube.com/watch?v=nDPzZSgJVvU

       ytslice8= arr8ytvideo8.value.slice(17);
      console.log("nanga",ytslice8);


    }
    if(ytvideo9.value.includes("youtube"))
    {
      if(ytvideo9.value.includes("&"))
      {
         index9=ytvideo9.value.indexOf("&");

        console.log(index9);
         ytslice9= ytvideo9.value.slice(32,index9);
        console.log(ytslice9)
      }

      else
      {

        console.log("mera lund mahan");
        // https://www.youtube.com/watch?v=nDPzZSgJVvU
  
         ytslice9= ytvideo9.value.slice(32);
        console.log(ytslice9);
  
      }


     
    }

    if(ytvideo9.value.includes("youtu.be"))
    {
      console.log("mera lund mahan1");
      // https://www.youtube.com/watch?v=nDPzZSgJVvU

       ytslice9= ytvideo9.value.slice(17);
      console.log("nanga",ytslice9);


    }
    if(ytvideo10.value.includes("youtube"))
    {
      if(ytvideo10.value.includes("&"))
      {
         index10=ytvideo10.value.indexOf("&");

        console.log(index10);
         ytslice10= ytvideo10.value.slice(32,index10);
        console.log(ytslice10)
      }

      else
      {

        console.log("mera lund mahan");
        // https://www.youtube.com/watch?v=nDPzZSgJVvU
  
         ytslice10= ytvideo10.value.slice(32);
        console.log(ytslice10);
  
      }


     
    }

    if(ytvideo10.value.includes("youtu.be"))
    {
      console.log("mera lund mahan1");
      // https://www.youtube.com/watch?v=nDPzZSgJVvU

       ytslice10= ytvideo10.value.slice(17);
      console.log("nanga",ytslice10);


    }
    
     //To display the div
      

      function getId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
    
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }
    
    myId1; myId2; myId3; myId4; myId5; myId6; myId7; myId8; myId9; myId10;
    
    $('#submit').click(function () {
        var myUrl1 = $('#youtube_videos1').val();
        myId1 = getId(myUrl1);
        var myUrl2 = $('#youtube_videos2').val();
        myId2 = getId(myUrl2);
        var myUrl3 = $('#youtube_videos3').val();
        myId3 = getId(myUrl3);
        var myUrl4 = $('#youtube_videos4').val();
        myId4 = getId(myUrl4);
        var myUrl5 = $('#youtube_videos5').val();
        myId5 = getId(myUrl5);
        var myUrl6 = $('#youtube_videos6').val();
        myId6 = getId(myUrl6);
        var myUrl7 = $('#youtube_videos7').val();
        myId7 = getId(myUrl7);
        var myUrl8 = $('#youtube_videos8').val();
        myId8 = getId(myUrl8);
        var myUrl9 = $('#youtube_videos9').val();
        myId9 = getId(myUrl9);
        var myUrl10 = $('#youtube_videos10').val();
        myId10 = getId(myUrl10);
getname();        
    });
      
       if(firstname.value.length==0||age.value.length==0||gender.value.length==0||ylocation.value.length==0||jlocationreal.value.length==0||artist1.value.length==0||nationality.value.length==0)
       {
        
      
         count=0;
       }
       else{
         count=1;
        
       }
     if(count==0)
     {
      alert("Please fill all the required fields");
      count=0;
      
     }
     else{
      authn();
     }
      
      // doSomething();
if(count==0)
{

} 
else{

  Home= document.getElementById("coffee");
      
      
      Home.style.display="block";


      console.log("mera suit",ytvideo1.value);



  setTimeout(doSomething, 16000);

  function doSomething() {
   window.location.href="candidate_profile.html";
  }
}
} 
      
     });
    

    function isUserSignedIn() {
      // TODO 6: Return true if a user is signed-in.
      return !!firebase.auth().currentUser;
    }
    
    function checkSignedInWithMessage() 
    {
      
      if (isUserSignedIn()) {
  
      
      }
      else
      {
         alert("You are not signed in")
         window.location.href="login.html";

      }
    }

    
 
    

})()