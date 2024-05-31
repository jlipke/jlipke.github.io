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
  });

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

	 // toastr setup
	toastr.options = {
	"closeButton": false,
	"debug": false,
	"newestOnTop": false,
	"progressBar": false,
	"positionClass": "toast-top-right",
	"preventDuplicates": false,
	"onclick": null,
	"showDuration": "300",
	"hideDuration": "1000",
	"timeOut": "5000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut" }

	toastr.success('Email Copied to Clipboard');
})

function animateText(id = 1){
	var row = "box" + id;
	var exists = document.getElementById(row);
	if(exists){
		row = "#" + row;
		$(row).fadeIn(750);
		setTimeout(() => {animateText(id + 1)},1500);
	}
	else{
		return;
	};
}

setTimeout(() => {animateText()}, 250);
})