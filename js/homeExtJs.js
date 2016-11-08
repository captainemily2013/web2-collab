document.ready = function()
{
	$('#info').hide("fast");
	$('#syn').hide("fast")
	moreInfo();
	music();
}

var aboutInfo = 0;
var curMusic = 0;

function moreInfo(){

	$('#about').click(function(){
    if (aboutInfo == 0) {
      $('#info').show("fast");
			$('#syn').show("fast");
      aboutInfo = 1;
    }
    else {
      $('#info').hide("fast");
			$('#syn').hide("fast");
      aboutInfo = 0;
    }
  });
}
function music(){
	curMusic = Math.floor(Math.random() * 5);
	$('audio')[curMusic].play();
	$('#radio').click(function(){
		if (curMusic == -1){
			curMusic = Math.floor(Math.random() * 5);
			$('audio')[curMusic].play();
		}
		else {
			$('audio')[curMusic].pause();
			$('audio')[curMusic].currentTime = 0;
			curMusic = -1;
		}
	});
}
