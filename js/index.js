$(document).ready(function() {
  var users = [
    "eSL_SC2",
    "ogamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "robotCaleb",
    "noobs2ninjas",
    "h3h3productions",
    "idubbbz",
    "riotgames",
    "ibuypower"
  ];

  users.sort();

  var API = "https://wind-bow.glitch.me/twitch-api/";
  var sPath = "streams/";
  var uPath = "users/";
  var KEY = "?clientid=zt08kzw6aux66crx1apkdnj17tllbu";
  var userLogo = "";
  var x = " ";
  var images = "";
  var twitch = "https://www.twitch.tv/";
  
  
  $("#all").on("click", function() {
    $("#info").html("");
    for (var i = 0; i < users.length; i++)
      {
        
        $.getJSON(API + uPath + users[i] + KEY, function(data) {
                      
           
            images = "<div class='container'><a href='" + twitch + data.name + "' target='_blank'><img src='" + data.logo + "' alt='userLogo'></a></div>";
            $("#info").append(images);
              
            console.log(data);
        
        
      });
        
      }
    
  });
  
  $("#online").on("click", function() {
    $("#info").html("");
    for (var i = 0; i < users.length; i++)
      {
        
        $.getJSON(API + sPath + users[i] + KEY, function(data) {
                      
           
            if ( data.stream !== null)
              {
              
            images = "<div class='container'><a href='" + twitch + data.name + "' target='_blank'><img src='" + data.stream.channel.logo + "' alt='userLogo'></a></div>";
            $("#info").append(images);
              console.log(data.stream.channel.logo);
              }
                  });
        
        
      }
    
  });
  
  $("#offline").on("click", function() {
    $("#info").html("");
    for (let i = 0; i < users.length; i++)
      {
        
        $.getJSON(API + sPath + users[i] + KEY, function(data) {
                      
           
            if ( data.stream == null)
              {
                
                
                $.getJSON(API + uPath + users[i] + KEY, function(info) {
                  
                  images = "<div class='container'><a href='" + twitch + info.name + "' target='_blank'><img src='" + info.logo + "' alt='userLogo'></a></div>";
            $("#info").append(images);
                  console.log(info)
                  
                });
                
            
              }
                  });
        
        
      }
    
  });
  
  
  
  
  
  
});