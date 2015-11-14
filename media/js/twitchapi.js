$(document).ready(function(){



	console.log("Welcome to twitchapi by Vane")
	var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","medrybw"];
	html=""
	var selectedTab="all";
	var regexStream=/noStream/
	

	var search = function(the_term){
		
		the_thermClass= $("."+the_term).attr('class');
		if (users.indexOf(the_term.toLowerCase())>=0){
			
			if(selectedTab==="all"){
				
				$(".user").hide()
				$("."+the_term).show()
			}
			else if(selectedTab==="online" && /streaming/.test(the_thermClass)===true ){
				$(".user").hide()
				$("."+the_term).show()
			}
			else if(selectedTab==="offline" && /noStream/.test(the_thermClass)===true ){
				$(".user").hide()
				$("."+the_term).show()
			}
			else{
				$(".user").hide()
			}
		}
		else{
			$(".user").hide()
		}
	}


	var go_search_handler = function(event){
		var search_input = $(".search-input");
		var the_term = search_input.val();
		search(the_term); 

	}
	
	var initEvents = function(){
		var search_button = $(".search-button");
		search_button.on("click",go_search_handler);

		var search_input = $(".search-input");
		search_input.on("keyup",go_search_handler);		
	}

	initEvents();

	var userInfo = function(arr){

		var userData = function(json){
			
			status(json.name, json.bio, json.logo, json.display_name)
			
			
			
		}

		for (var i = 0; i <= arr.length-1; i++) {
			
			$.ajax({
	     		url: "https://api.twitch.tv/kraken/users/"+arr[i],
	     		success: userData,
	     		error: function(e) {
	       			 console.log(e.message);
    			}
			});
		};	


	};

	userInfo(users);

	var status = function(userName, userBio, logo, displayName){
		
		

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


   
	


	var displayStatus = function(status,userName,bio, logo, displayName){
		
		if(status==null){
			$("."+userName).addClass("noStream")
			$("."+userName).html("<div class=' col-xs-1 '><img class='logo' src="+logo+ "></div>"+"<div class='userName col-xs-6 col-xs-offset-1'><a href='http://www.twitch.tv/"+userName+"/profile'>"+displayName+"</a></div>"+"<div class='col-xs-2 col-xs-offset-1'><div class='glyphicon glyphicon-exclamation-sign'</div></div>")
		
		}
		else{
			$("."+userName).addClass("streaming")
			$("."+userName).html("<div class='col-xs-1' ><img class='logo'src="+logo+"></div>"+"<div class='userName col-xs-6 col-xs-offset-1'><a href='http://www.twitch.tv/"+userName+"/profile'>"+displayName+"</a><div class=bio>"+bio+"</div></div>"+"<div class='col-xs-2 col-xs-offset-1'><div class='glyphicon glyphicon-ok'</div></div>")
		}



	}

	$("li").on("click", function(){
		$("li").removeClass("active")
		$(this).addClass("active");
		liClass= $(this).attr('class');
		if(/online/.test(liClass)===true){
			$(".noStream").hide();
	  		$(".streaming").show();
	  		selectedTab="all";
	  		$(".search-input").val('');
		}
		else if(/offline/.test(liClass)===true){
			$(".streaming").hide()
	  		$(".noStream").show()
	  		selectedTab="offline"
	  		$(".search-input").val('');
		}
		else{
			$(".streaming").show()
	 	 	$(".noStream").show()
	 	 	$(".search-input").val('');
		}



	});
	 
	
	


});