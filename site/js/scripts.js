// ==========================
/* SVG Rocket */
// ==========================

var mySVG = document.getElementById("rocket");

mySVG.addEventListener("load", function() {

   var doc = this.getSVGDocument();

   //SVG vars
   var flame = doc.getElementById("flame");

  //happy tweening!
  TweenMax.to(flame, .1, {scaleY: '1.4', repeat: -1}, 'start')
  TweenMax.to(mySVG, .02, { rotation: '+=.4', repeat: -1}, 'start');
});	

//bug fix regarding load event not firing consistantly 
//(http://stackoverflow.com/questions/34677628/load-event-not-fired-on-safari-when-reloading-page)
mySVG.data = mySVG.data;

// ==========================
/* Space Particles */
// ==========================

var svgNS = "http://www.w3.org/2000/svg";  

var total = 15;
var w = $(".main").width();
var h = $('.main').height();
 
for (i=0; i<total; i++){ 
	var rect = document.createElementNS(svgNS, 'rect');
	rect.setAttributeNS(null, 'height', 25);
	rect.setAttributeNS(null, 'width', 25);
	rect.setAttributeNS(null,"class","pixel"); 
	document.getElementById("mySVG").appendChild(rect);  
	TweenMax.set($(".pixel")[i],{x:Random(w),y:0 ,scale:Random(0.5)+0.5,fill:"rgba(255,255,255,.15)"});
	
	animm($(".pixel")[i]);
}
 
function animm(elm){   
	TweenMax.to(elm,Random(5)+3,{y:h,ease:Linear.easeNone,repeat:-1, delay:-5});
	TweenMax.to(elm,Random(1)+1.5,{fill:"rgba(255,255,255,.05)",repeat:-1,yoyo:true,ease:Sine.easeInOut})
};

function Random (max) {
return Math.random()*max;
}

function random(min, max) {
return min + Math.floor( Math.random() * (max - min));
}

