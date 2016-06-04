  /* 
  Galaxy Defender - Game Ver 1.0 
  Written by Yuri Blecher 2016 
  */
  	
      var counter = 0;
	
	var times = 60;

  function time (){
	  var main = document.getElementById("timer");
	  main.innerHTML = times;
	  times--;
	  if(times < 10) {

		  $("#timer").css({color:"red"});
	  }
  }
	time();
  setInterval(time,1000);

  
  //Shooting
  $("#leftbox").click(function(e){
	  laserSound = new Audio("sound/shoot.wav");
	  laserSound.volume = 0.30;
	  laserSound.play();
	  $(".help").fadeOut(1000);
  		$("#leftbox:hover").addClass("newcurs");
 		 
		 //declare leftbox
		  var left = document.getElementById("leftbox");
		  var x = e.clientX + 'px';
		  var y = e.clientY + 'px';
		  var laser = document.createElement("div");
		  laser.className = "laser";
		  laser.setAttribute("style","top:"+y+";left:"+x+";")
		  document.body.appendChild(laser);
		  laserH = laser.getBoundingClientRect().height;
		  laserW = laser.getBoundingClientRect().width;
		  
		  
		  //velocity - progress
		  $(laser).velocity({left:-200}, {
			  duration: 1000,
	  easing: "linear",
	  progress: function(elements, complete, remaining, start, tweenValue) {
		  laserx = laser.getBoundingClientRect().left;
		  lasery = laser.getBoundingClientRect().top;
        console.log((complete * 100) + "%");
        console.log(remaining + "ms remaining!");
		console.log("the laser offsetLeft pixels are: " + laserx);
		console.log("the laser offsetLeft pixels are: " + lasery);
		
		//Collision Detection
	for(i=0; i < ufoarr.length ;i++) {
		var current = ufoarr[i];
		currenty = current.offsetTop;
		currentx = current.offsetLeft;
		currentW = current.offsetWidth;
		currentH = current.offsetHeight;
		console.log("ufo left: " + currentx + ". ufo top: " + currenty);

		//start of collision detector
/*		if ((lasery + laserH) < (currenty) ||
			(lasery > (currenty + currentH)) ||
			((laserx + laserW) < currentx) ||
			(laserx > (currentx + currentW)))*/
		if (laserx < currentx + currentW &&
   laserx + laserW > currentx &&
   lasery < currenty + currenty &&
   laserH + lasery > currentH)

	/*	if (
				laserx < currentx + currentW &&
				lasery > currenty &&
				lasery < currenty + currentH
		)*/

/*
		if(laserx+laserW > currentx && laserx < currentx + currentW && lasery > currenty && lasery < currenty + currentH)
*/
		{
	   //do this
	  var showScore = document.getElementById("counter");
	  showScore.textContent = counter;
		counter++;
	var showScore = document.getElementById("counter");
	  showScore.textContent = counter;
    // collision detected!
	debugger;
	ufoarr[i].remove();
	
	laser.remove();
	
	laserSound = new Audio("sound/Explosion.wav");
	laserSound.volume = 0.50;
	laserSound.play();
	
}// end of if
	}
	
	
		
    } //end of progress function
	
	
		  }); // end of velocity
  
	  }); // end of function shooting
  
  
  
  
  
	  
  

  
  function randomRange(max,min) {
  return Math.floor(Math.random() * (max-min) + min);
  }
  
  function randomRangeNoFloor(max,min) {
  return Math.random() * (max-min) + min;
  }
  
	
  var ufoarr = [];
  
  function init() {

  //create ball
 
	
	 
	  var divball = document.createElement("div");
	  var main = document.getElementById("main");
  
	  
	  divball.className = "ball";
  
      var sizeRatio = 0.6;
   	  var speed = randomRange(1000,4000);
	  var ranWidth = randomRangeNoFloor(60, 100);
	  var ranHeight = ranWidth * sizeRatio;
	  var x_pos = randomRange(0,800);
	  
	  
	  divball.innerHTML = "<img src='images/ufo.gif' style='width:" + ranWidth + "px; height:"+ ranHeight +"px;'>";

	  $(divball).css({
		  top:0,
		  left: x_pos + "px",
		  width: ranWidth + "px",
		  height: ranHeight + "px"
		  
		  })
	  
	  $(".ball img").css("width:10px");
	  main.appendChild(divball);
	  ufoarr.push(divball);
	  
	
	  ufoW = divball.offsetWidth;
	  ufoH = divball.offsetHeight;
	  ufoX = divball.offsetTop;
	  ufoY = divball.offsetLeft;
	  //divball
	  $(divball).velocity({top: "100vh" },speed, "linear", function(){	
		  $(divball).velocity({top: randomRange(50,90) + "vh"},speed, "linear",function(){
			  $(divball).remove();
			  ufoarr.pop(this);
		  });
  
	  });
  
  }
  
  setInterval(function(){init()},1000);
  
  //Title
  function showTitle(){
  $(".gameTitle").show(2000);	
  }
  
  function hideTitle(){
  $(".gameTitle").hide(2000);	
  $(".gameCreator").slideUp(1000);
  }
  function nameShow(){
  $(".gameCreator").slideDown(1000);	
  
  }
  
  function showHelp(){
  
  $(".help").fadeIn(1000);
  }
  
  
  
  setTimeout(function(){showTitle()},2000);
  setTimeout(function(){nameShow()},4000);
  setTimeout(function(){hideTitle()},8000);
  
  setTimeout(function(){showHelp()},8000);
  
  
  
  
  //Generate a random number for the x position and radius size random
  //create a Ball Object with radius and position parameter
  
  //create a function that will apply gravity on the balls (jquery animate)
  
  //create bullet object and apply it to the "right box" div.
  //make an event that will fire the bullet to the right side of the screen
  //create a collidor that will hit the balls object and destroy them
  //create a counter that will add number after the collidor was activated.
