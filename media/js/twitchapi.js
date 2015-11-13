$(document).ready(function(){

	console.log("Welcome to twitchapi by Vane")
	var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","medrybw"];
	html=""
	// var userInfo = function(json){
	// 	console.log(json)
	// 	display(json.name, json.logo, json.display_name, json.bio)

	// }

	var userInfo = function(arr){

		var userData = function(json){
			//console.log("test1"+json.display_name
			//console.log(html)
			status(json.name, json.bio, json.logo, json.display_name)
			// displayUserData(json.name,json.logo, json.display_name)
			console.log(json)
			
			
		}

		for (var i = 0; i <= arr.length-1; i++) {
			console.log(arr)
			$.ajax({
	     		url: "https://api.twitch.tv/kraken/users/"+arr[i],
	     		success: userData,
	     		error: function(e) {
	       			 console.log(e.message);
    			}
			});
		};	


	};

	userInfo(users)

	var status = function(userName, userBio, logo, displayName){
		//console.log("test2"+userName)
		

		var checkStream = function(json){
			
			
				displayStatus(json.stream, userName, userBio, logo, displayName)
				
			

		}


    	$.ajax({
	     	url: "https://api.twitch.tv/kraken/streams/"+userName,
	     	success: checkStream,
	     	error: function(e) {
	        console.log(e.message);
    	}

    });	


	};
	

	// 

	// var displayUserData = function(userName, logo, displayName){
	// 	if(logo===null){
	// 		$("."+userName).html("<img src=>"+"<br>"+"<p>"+displayName+"</p>")
	// 	}
	// 	else{
	// 	$("."+userName).html("<img src="+logo+">"+"<br>"+"<p>"+displayName+"</p>")
	// 	}
	// 	//$("."+userName).html("<div>"+ bio+"</div>")

	// }

	// var displayStatus = function(status,userName,bio, logo, displayName){
	// 	if(status===null){
	// 		$("."+userName).html("<img src="+logo+">"+"<div class='userName'><a href='http://www.twitch.tv/"+userName+"/profile'>"+displayName+"</a></div>"+"<div class='offline'></div>")
	// 		$("."+userName+"2").html("<img src="+logo+">"+"<div class='userName'><a href='http://www.twitch.tv/"+userName+"/profile'>"+displayName+"</a></div>"+"<div class='offline'></div>")
	// 	}
	// 	else{
	// 		$("."+userName).html("<img src="+logo+">"+"<p>"+displayName+"</p>"+"<div class=bio>"+bio+"</div>"+"<div class='online'></div>")
	// 		$("."+userName+"1").html("<img src="+logo+">"+"<p>"+displayName+"</p>"+"<div class='online'></div>"+"<div class=bio>"+bio+"</div>")
	// 	}
	// }

	
		// $(".all").on("click", function(){
		//  	$("."+).html("<a href='http://www.twitch.tv/terakilobyte/profile'></a>")
		//  });

	var displayStatus = function(status,userName,bio, logo, displayName){
		if(status===null){
			$("."+userName).html("<div class=' col-xs-1 '><img class='logo' src="+logo+ "></div>"+"<div class='userName col-xs-6 col-xs-offset-1'><a href='http://www.twitch.tv/"+userName+"/profile'>"+displayName+"</a></div>"+"<div class='col-xs-2 col-xs-offset-1'><div class='glyphicon glyphicon-exclamation-sign'</div></div>")//"<img src="+logo+">"+"<div class='userName'><a href='http://www.twitch.tv/"+userName+"/profile'>"+displayName+"</a></div>"+"<div class='offline'></div>")
			$("."+userName+"2").html("<div class=' col-xs-1 '><img class='logo' src="+logo+ "></div>"+"<div class='userName col-xs-6 col-xs-offset-1'><a href='http://www.twitch.tv/"+userName+"/profile'>"+displayName+"</a></div>"+"<div class='col-xs-2 col-xs-offset-1'><div class='glyphicon glyphicon-exclamation-sign'</div></div>")
			}
		
		else{
			$("."+userName).html("<div class='col-xs-1' ><img class='logo'src="+logo+"></div>"+"<div class='userName col-xs-6 col-xs-offset-1'><a href='http://www.twitch.tv/"+userName+"/profile'>"+displayName+"</a><div class=bio>"+bio+"</div></div>"+"<div class='col-xs-2 col-xs-offset-1'><div class='glyphicon glyphicon-ok'</div></div>")//"<img src="+logo+">"+"<p>"+displayName+"</p>"+"<div class='online'></div>"+"<div class=bio>"+bio+"</div>")
			$("."+userName+"1").html("<div class='col-xs-1' ><img class='logo'src="+logo+"></div>"+"<div class='userName col-xs-6 col-xs-offset-1'><a href='http://www.twitch.tv/"+userName+"/profile'>"+displayName+"</a><div class=bio>"+bio+"</div></div>"+"<div class='col-xs-2 col-xs-offset-1'><div class='glyphicon glyphicon-ok'</div></div>")

			//"<p>"+displayName+"</p>"+"<div class='online'></div>"+"<div class=bio>"+bio+"</div>")
		}

	}

	var search = function(){}
	
	


});