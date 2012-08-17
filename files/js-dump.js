


	/* Responsive Menu */
	$('#nav-menu').click(function(){
		$('.nav ul').slideToggle('fast',function() {});
		
		// hide button
		// $(".nav ul").css({ display: "block" });
	});
	
	function menuHide (){
		if ($(window).width() < 1024){
	
			$("body").addClass("mobile")
			$(".nav").append('<span id="nav-menu"><a>Menu</a></span>')
			$(".nav ul").css({ display: "none" });
			
		}
	
		else {
	
			$("body").removeClass("mobile")
			$(".nav ul").css({ display: "block" })
			$("#nav-menu").remove();
	
		}
	
	}
	
	menuHide(); // Triggers when document first loads
	
	$(window).bind("resize",function() {
		menuHide();
	});






	
	var header = undefined;
	var menu = undefined;
	var menuButton = undefined;
	 
	$(document).ready(function(){
	
		 header = $(".masthead");
		 menu = $(".masthead .nav ul");
		 menuButton = $("<span class='menu'><a href='#'>menu</a></span>");
		 menuButton.click(showMenu);
		 header.append(menuButton);
	
	})
	 
	function showMenu (event) {
		 if (menu.is(":visible"))
			  menu.slideUp({complete:function(){$(this).css('display','')}});
		 else
			  menu.slideDown();
	}








	/* Responsive Menu */
	
	jQuery(document).ready(function($){
	
			/* toggle nav */
			$("#menu-btn").on("click", function(){
				$(".nav ul").slideToggle();
				$(this).toggleClass("active");
			});
	
	});

	//
	function menuHide (){

		if ($(window).width() < 1024){

			/* prepend menu icon */
			$('.nav').prepend('<div id="menu-btn">Menu</div>');	
			$(".nav ul").css({ display: "none" });

		}
		else {
			
			// Remove
			$(".nav ul").css({ display: "block" });
			$("#menu-btn").remove();

		}

	}

	menuHide(); // Triggers when document first loads
	
	$(window).bind("resize",function() {
		menuHide();
	});
	
