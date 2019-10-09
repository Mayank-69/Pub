
(function(){
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
  var allProjectsCount;

allposted();
allusers();
allportfolios();
allcompanies();

  function allposted()

{
//   document.getElementById('showallposted').style.display= 'none';
    firebase.firestore().collection("AllPostedProjects").onSnapshot(function(querySnapshot) {
      var cities = [];
       
   
          querySnapshot.forEach(function(doc) {
          cities.push(doc.data().div);
         
          var allProjectsCount = cities.length;
        //   document.getElementById('showallposted').style.display= 'block';
        console.log(allProjectsCount);
          document.getElementById("jobsavailable").innerHTML=allProjectsCount;
        
            //   document.getElementById("generateDiv").innerHTML=cities[0];
             
            //   document.getElementById("generateDiv1").innerHTML=cities[1];
             
              // document.getElementById("generateDiv4").innerHTML=cities[4];
             
          });
         
         
      })
    }


    function allusers()

    {
    
    // document.getElementById('showapplied').style.display= 'none';
      firebase.firestore().collection("authenticatedUsers").onSnapshot(function(querySnapshot) {
        var cities = [];
        // var titleyo =[];
            querySnapshot.forEach(function(doc) {
    
            cities.push(doc.data().div);
            // document.getElementById('showapplied').style.display= 'block';
                var allProjectsCount = cities.length;
                document.getElementById("members").innerHTML=allProjectsCount;
    // console.log("hjhjhjhjh",allProjectsCount);
               
                // document.getElementById("autodiv1").innerHTML=cities[0];
                // document.getElementById("autodiv2").innerHTML=cities[1];
               
            });
            
        })
        }


        
    function allportfolios()

    {
    
    // document.getElementById('showapplied').style.display= 'none';
      firebase.firestore().collection("portfolio").onSnapshot(function(querySnapshot) {
        var cities = [];
        // var titleyo =[];
            querySnapshot.forEach(function(doc) {
    
            cities.push(doc.data().div);
            // document.getElementById('showapplied').style.display= 'block';
                var allProjectsCount = cities.length;
                document.getElementById("resumes").innerHTML=allProjectsCount;
    // console.log("hjhjhjhjh",allProjectsCount);
               
                // document.getElementById("autodiv1").innerHTML=cities[0];
                // document.getElementById("autodiv2").innerHTML=cities[1];
               
            });
            
        })
        }


        function allcompanies()

    {
    
    // document.getElementById('showapplied').style.display= 'none';
      firebase.firestore().collection("recruiters").onSnapshot(function(querySnapshot) {
        var cities = [];
        // var titleyo =[];
            querySnapshot.forEach(function(doc) {
    
            cities.push(doc.data().div);
            // document.getElementById('showapplied').style.display= 'block';
                var allProjectsCount = cities.length;
                document.getElementById("company").innerHTML=allProjectsCount;
    // console.log("hjhjhjhjh",allProjectsCount);
               
                // document.getElementById("autodiv1").innerHTML=cities[0];
                // document.getElementById("autodiv2").innerHTML=cities[1];
               
            });
            
        })
        }
  })()

