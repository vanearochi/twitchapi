$(document).ready(function(){

	console.log("Welcome to twitchapi by Vane")
	var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];
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
			displayUserData(json.name,json.logo, json.display_name)
			
			
			
		}

		for (var i = 0; i < arr.length-1; i++) {
			
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

	var displayUserData = function(userName, logo, displayName){
		$("."+userName).html("<img src="+logo+">"+"<br>"+"<p>"+displayName+"</p>")
		//$("."+userName).html("<div>"+ bio+"</div>")

	}

	var displayStatus = function(status,userName,bio, logo, displayName){
		if(status===null){
			$("."+userName).html("<img src="+logo+">"+"<br>"+"<p>"+displayName+"</p>"+"<p class=status>bu</p>")
		}
		else{
			$("."+userName).html("<img src="+logo+">"+"<br>"+"<p>"+displayName+"</p>"+"<p>"+bio+"</p>")
		}
	}

	var events = function(){
		$(".freecodecamp").on("click"), function(){console.log(json.name)}

	}
	


});