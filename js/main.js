$(document).ready(function(){
// fit image to page
 $('.header').height($(window).height());


 // Animate anchors
 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
  
 })
 // Email hover functionality
 $(function(){
	var prev;    
  
	$('.email').hover(function(){
	prev = $(this).text();
		$(this).text("Copy to Clipboard");
	}, function(){
		$(this).text(prev)
	});
  })

// Copy email to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

$('.email').click(function(){
	copyToClipboard('l.jlipke@gmail.com');
})


})