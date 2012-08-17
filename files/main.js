/*
    Theme Name: Metro Extend
    Version: v1.0
    Theme URI: http://cartching.com
    Description: CMS, Store, Blog
    Copyright (c) CartChing, 2012 | http://cartching.com
    Author: Conrad Petzsch-Kunze
    Author URI: http://conradpk.com
*/


/* Stock Values */
(function($){
   $.fn.stockify = function() {

       return this.each(function() {
           var $this = $(this);
           var level = parseInt($this.text(),10);
           var text;

			if (level < 25) text = "";
			if (level >= 25) text = ""
			if (level > 40) text = "";
			if (level == 1 ) text = "Only 1 left ";
			if (level == 2 ) text = "2 left ";
			if (level == 3 ) text = "3 left ";
			if (level == 4 ) text = "";
			if (level == 5 ) text = "";
			if (level == 0) text = "None";
			$this.text(text);
       });
   };
})(jQuery);




$(document).ready(function()	{


	/* Responsive Menu
	- - - - - - - - - - - - - - - - - - - */

	/* prepend menu icon */
	$(".nav").prepend("<span id='menu-btn'><a href='#'>Menu</a></span>");
	
	/* toggle nav */
	$("#menu-btn a").on("click", function(){

		$(".nav ul").slideToggle();		
	
		// $(this).toggleClass("active");
		$("#menu-btn").toggleClass("active");
		
		// swap text
		if($("#menu-btn").hasClass("active")){

				$("#menu-btn a").text("Close Menu");

			}
			else {
			
				$("#menu-btn a").text("Menu");
				
			};
						
	});



	/* Page Navigation Selector
	- - - - - - - - - - - - - - - - - - - */

	// set any current links in the #nav to be "active"
	$(".nav li").each(function(){
		var href = this.getAttribute('href',1);

		var location = new String( document.location );
		location = location.substr(location.length-href.length, href.length )

		if ( location == href) {
			$(this).addClass("active");
		}
	});


	// set any current links in the #nav to be "active"
	$(".categories li a").each(function(){
		var href = this.getAttribute('href',1);

		var location = new String( document.location );
		location = location.substr(location.length-href.length, href.length )

		if ( location == href) {
			$(this).addClass("active");
		}
	});



});


/* Set Image Viewer */
Shadowbox.init();
