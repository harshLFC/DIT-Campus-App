///* 
// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.


//<----------------------------LOADING FILES ON DOCUMENT READY----------------------------->
 $("document").ready(function(){
//<-------------------------------------function for appending data into MODULE page------------------------------->
    $.getJSON('http://localhost:8888/php/json-data-modules.php', function(data) {
        $.each(data.modules, function(index, module) {
        
        $("#listModule").append('<li><a data-transition="flow" href="#'+module.moduleNo+'">'+module.moduleName+'</a></li>');
        $("#main_body").append('<div data-role="page" id='+module.moduleNo+'>\n\
            \n\
            <div data-role="header" data-position="fixed"><h1 style="width:100%; position:relative; left:-30%">'+module.moduleName+'</h1></div>\n\
            <a href="#" data-rel="back" data-role="button" data-icon="back" data-transition="slide" data-direction="reverse" data-position="fixed">Back</a>\n\
            <div role="main"  class="ui-content" id="moduleData" class="ui-grid-b">\n\
                <ul data-role="listview"  >\n\
                \n\
                <li class="ui-block-a" style="height:140px; background-color:skyblue"><h3 >Module Number: </h3>'+module.moduleNo+'</li>\n\                                                \n\
                <li class="ui-block-b" style="height:140px;  background-color:lightgreen"><h3>Module Credits: </h3>'+module.credits+'</li>\n\
                <li class="ui-block-c" style="height:140px; background-color:lightcoral"><h3 >Module Website </h3><p style="color:blue; font-size:120%">'+module.website+'</p></li>\n\
                <li class="ui-block-d" style="height:140px; background-color:lightseagreen "><h3 >Module Location: </h3>'+module.location+'</li>\n\
                <li class="ui-block-e" style="height:140px; background-color:lightsalmon "><h3 >Module Room: </h3>'+module.room+'</li>\n\ </ul></div>\n\
            \n\
            <a href="http://www.dit.ie/"><div data-role="footer" data-position="fixed" ><h4>www.dit.ie</h4></div></a>\n\
            </div>');
        }); 
    }); //<-------------------------------------END OF function for appending data into MODULE page------------------------------->
                
    //<---------------------------------------------------Function for appending data into LECTURER page------------->
    $.getJSON('http://localhost:8888/php/json-data-lecturers.php', function(data) {
    $.each(data.lecturers, function(index, lecturer) {
        $("#lecturerList").append('<li><a data-transition="flow" href="#'+lecturer.firstName+' ">'+lecturer.firstName+'</a></li>');
        $("#main_body").append('<div data-role="page" id='+ lecturer.firstName+'>\n\
            \n\
            <div data-role="header" data-position="fixed"><h1>'+lecturer.firstName+'\t'+lecturer.lastName+'</h1></div>\n\
            <a href="#lecturerPage" data-role="button" data-icon="back" data-transition="flow" data-direction="reverse" data-position="fixed">Back</a>\n\
            <div role="main" class="ui-content ui-grid-a ui-body ui-body-a" id="lecturerData"  >\n\
                \n\
                <ul data-role="listview"  >\n\
                <li class="ui-block-a" style="padding:40px" >Staff Number: '+lecturer.staffNumber+'</li>\n\
                <li class="ui-block-b" style="padding:40px">Module No1: '+lecturer.moduleNo1+'</li>\n\
                <li class="ui-block-a" style="padding:40px">Module No2: '+lecturer.moduleNo2+'</li>\n\
                <li class="ui-block-b" style="padding:40px">Email : '+lecturer.email+'</li></ul></div>\n\
            \n\
            <a href="http://www.dit.ie/"><div data-role="footer" data-position="fixed" ><h4>www.dit.ie</h4></div></a>\n\
            </div>');
    }); //End of Loop
}); // <--------------------------------------------------End of appending data into LECTURER page------------------->
            
//<---------------------------------------- FUNCTION FOR APPENDING DATA INTO STUDENT PAGE---------------------------->
 $.getJSON('http://localhost:8888/php/json-data-students.php', function(data) {
    $.each(data.students, function(index, student) {
        $("#studentList").append('<li><a class="ui-btn ui-btn-icon-left ui-icon-carat-l" style="text-align:right" data-transition="flow" data-iconpos="right" data-direction="reverse" href="#'+student.firstName+'">'+student.firstName+'</a></li>'); 
        $("#main_body").append('<div data-role="page" id='+ student.firstName+'>\n\
            \n\
            <div data-role="header" data-position="fixed" ><h1>'+student.firstName+'\t'+student.lastName+'</h1></div>\n\
            <a href="#students_page" data-role="button" data-icon="forward" data-transition="flow" data-iconpos="right" data-position="fixed">Back</a>\n\
            <div role="main"  class="ui-content ui-body ui-body-a" id="student_data" >\n\
                \n\
                <ul data-role="listview"  >\n\
                <li style="text-align:center" class="ui-body ui-body-a ui-corner-all" style="padding:20px"><h3>Student ID: </h3> '+student.studentID+'</li>\n\
                <li style="text-align:center" class="ui-body ui-body-b ui-corner-all" style="padding:20px"><h3>Module No1:</h3>  '+student.moduleNo1+'</li>\n\
                <li style="text-align:center" class="ui-body ui-body-c ui-corner-all" style="padding:20px"><h3>Module No2: </h3> '+student.moduleNo2+'</li>\n\
                <li style="text-align:center" class="ui-body ui-body-d ui-corner-all" style="padding:20px"><h3>Course ID: </h3>'+student.courseID+'</li></ul></div>\n\
            \n\
            <a href="http://www.dit.ie/"><div data-role="footer" data-position="fixed"><h4>www.dit.ie</h4></div></a>\n\
            </div>');
    }); //End of Loop
});//<----------------------------------------end of FUNCTION FOR APPENDING DATA INTO STUDENT PAGE---------------------------->
        
//<----------------------------------------FUNCTION FOR APPENDING DATA INTO COURSE INFO PAGE------------->
$.getJSON('http://localhost:8888/php/json-data-course-info.php', function(data) {
    $.each(data.courses, function(index, course) {
        $("#courseList").append('<li><a data-transition="flow" data-direction="reverse" class="ui-btn ui-btn-icon-left ui-icon-carat-l" style="text-align:right" href="#'+course.num+'">'+course.hea_descriptors+'</a></li>');
        $("#main_body").append('<div data-role="page" id='+ course.num+'>\n\
            \n\
            <div data-role="header" data-position="fixed"><h1>'+course.num+'</h1></div>\n\
            <a href="#course_page" data-role="button" data-icon="forward" data-transition="flow" data-iconpos="right" data-position="fixed">Back</a>\n\
            <div role="main"  class="ui-content" id="courseData">\n\
                \n\
                <ul data-role="listview"><br>\n\
                <li class="" data-icon="false"><div class="ui-btn-inner"><image src='+ course.image+' alt="#" height="200" width="100%"></div></li><br>\n\
                <br><li><h1>'+course.hea_descriptors+'</h1></li>\n\
                <li><h2>'+course.value+'</h2></li><br></ul>\n\
            \n\
            <a href="http://www.dit.ie/"><div data-role="footer" data-position="fixed" ><h4>www.dit.ie</h4></div></a>\n\
            </div>');

    }); //End of Loop
});//<----------------------------------------end of FUNCTION FOR APPENDING DATA INTO COURSE INFO PAGE------------->            
});//<----------------------------end of LOADING FILES ON DOCUMENT READY----------------------------->

//<-----------------body onLoad initialize function for GeoLocation start--------------------------->
function initialize(){
          if (navigator && navigator.geolocation){
              navigator.geolocation.watchPosition(userLocated, locationError);
          } else{
              error("Sorry your browser does not support positioning");
          }
      }
//                  end
      function userLocated(position){
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      showPosition(lat,long);
      }
//                  end

    function locationError(error){
      alert(error.code);
      }

      //<-----------------start of function for MAP MARKING--------------------------->
      function showPosition(latitude,longitude){
      var myOptions = {
          center: new google.maps.LatLng(latitude, longitude),
          zoom: 13,
          scrollwheel: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControls:true
      };
      var map = new google.maps.Map(document.getElementById("myMap"),myOptions);
      var marker = new google.maps.Marker({position: new google.maps.LatLng(latitude, longitude),label:"Your current location"});
      var marker2 = new google.maps.Marker({position: new google.maps.LatLng(53.354705, -6.279746),label:"DIT Grangegorman"});
      var marker3 = new google.maps.Marker({position: new google.maps.LatLng(53.338553, -6.266528),label:"DIT Aungier Street"});
      var marker4 = new google.maps.Marker({position: new google.maps.LatLng(53.337251, -6.266962),label:"DIT Kevin Street"});
      var marker5 = new google.maps.Marker({position: new google.maps.LatLng(53.351583, -6.269395),label:"DIT Bolton Street"});
      var marker6 = new google.maps.Marker({position: new google.maps.LatLng(53.355861, -6.256560),label:"DIT Mountjoy Square"});

      marker.setMap(map);
      marker2.setMap(map);
      marker3.setMap(map);
      marker4.setMap(map);
      marker5.setMap(map);
      marker6.setMap(map);
      } //<-----------------function for MAP MARKING end--------------------------->

//<-----------------body onLoad initialize function for GeoLocation end--------------------------->


//-------------------------------------------------------------FB---------------------->
 window.fbAsyncInit = function() {
                 FB.init({
                   appId      : '1709002626067514',
                   cookie     : true,
                   xfbml      : true,
                   version    : 'v2.8'
                 });
                
               FB.getLoginStatus(function(response) {
                         statusChangeCallback(response);
                       });
               
                       };
                       
                       // This function is called when someone finishes with the Login
                       // Button.  See the onlogin handler attached to it in the sample
                       // code below.
                       function checkLoginState() {
                         FB.getLoginStatus(function(response) {
                           statusChangeCallback(response);
                         });
                       }
                       
                       // This is called with the results from from FB.getLoginStatus().
                       function statusChangeCallback(response) {
                         console.log('statusChangeCallback');
                         console.log(response);
                         // The response object is returned with a status field that lets the
                         // app know the current login status of the person.
                         // Full docs on the response object can be found in the documentation
                         // for FB.getLoginStatus().
                         if (response.status === 'connected') {
                           // Logged into your app and Facebook.
                           getFacebookData();
                         } else {
                           // The person is not logged into your app or we are unable to tell.
                           document.getElementById('profile').innerHTML = 'Please log into this app.';
                         }
                       }
                       
               (function(d, s, id){
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) {return;}
                  js = d.createElement(s); js.id = id;
                  js.src = "//connect.facebook.net/en_US/sdk.js";
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
               

                       function getFacebookData() {
               
                             console.log('Welcome!  Fetching your information.... ');
                             FB.api('/me?fields=picture,work,about,feed,name,gender,birthday', function(response) {
                                 $("<img >").attr("src",response.picture.data.url).appendTo("#profile");
                                 $("#profile").append('<h3>Welcome, ' + response.name + '<h3>');
                                 $("#profile").append("<h3> <span style='color: lightblue'> ID: </span>"+response.id+"</h3>");
                                 $("#profile").append("<h3> <span style='color: lightblue'>Name: </span>"+response.name+"</h3>");
                                 $("#profile").append("<h3> <span style='color: lightblue'>Gender: </span>"+response.gender+"</h3>");
                 });
                             
                       } 
                       
                       
                       
//<-----------------------------------fb end-------------------------------------------->


 





