function Hud() {
  var size = 20;
  var padding = 10;
  var lifeWidth = 20;

  // digitMaps is used to create line representations of digits 0 through 9,
  // the diagram below indicates the mapping of the digitMaps array index to
  // its visual line.
  /*
   --0--
   1   2
   --3--
   4   5
   --6--
  */
//  var digitMaps = [
//    // Return a digit map
//    [true, true, true, false, true, true, true], //0
//    [false, false, true, false, false, true, false], //1
//    [true, false, true, true, true, false, true], //2
//    [true, false, true, true, false, true, true], //3
//    [false, true, true, true, false, true, false], //4
//    [true, true, false, true, false, true, true], //5
//    [true, true, false, true, true, true, true], //6
//    [true, false, true, false, false, true, false], //7
//    [true, true, true, true, true, true, true], //8
//    [true, true, true, true, false, true, true] //9
//
//  ];

  this.render = function() {
//    stroke(200,250,50);
//    fill(0,0,0);
////    rect(20,height-170,width-40,150);
//    textSize(16);
//    fill(255);
//    text("X Speed", 40, height-100);
//    text(ship.vel.x, 40, height-80);
//    text("Y Speed", 240, height-100);
//    text(ship.vel.y, 240, height-80);
//    var scoreString = "" + score;
//    var x = (width - (scoreString.length * (size + padding))) / 2;
//    var digitPos = createVector(x, padding);
//    for(var i = 0; i < scoreString.length; i++) {
//      var dmap = digitMaps[scoreString.charAt(i)];
//      drawDigit(dmap, i, digitPos);
//      digitPos.x += size + padding;
//    }

	  
	  
    drawLives();
	 
    if(lives < 0) { //IMPORTANT
      push();
//      textSize(15);
//      fill(255);
//	let finalMsg = ["Too bad! Being unable to increase your stats in order to ensure better survival sure is irritating, isn’t it? ","Hmm. Seems like you ran out of luck. Too bad gene editing isn’t a thing in this game, like it is in real life. ","If only your survival didn't rely on some random variables that you have no control over, right?"];
//		console.log(randomIndex);
		
//      text(finalMsg[randomIndex], (width / 2) - 100, height / 2, 200, 400);
		image(finalImg[randomIndex], (width/2), height/2);
		imageMode(CENTER);
		textSize(50);
		fill(255,0,0);
		frameRate(1);
//		text ("GAME OVER", (width/2), height/2);
	} 
  }
  
  function drawLives() {
    push();
    stroke(255);
    fill(0);
    var top = createVector((width-20), 50, 100,100);
    for(var i = 0; i < lives; i++) {
      triangle(top.x,                 top.y     ,
               top.x - lifeWidth / 2, top.y + 25,
               top.x + lifeWidth / 2, top.y + 25);
      top.x -= 20 + padding;
    }
    pop();
  }

  //draws the digit based on the digit map
  function drawDigit(digitMap, index, pos) {
    push();
    stroke(255);
    for(var i = 0; i < digitMap.length; i++) {
      if(digitMap[i] === true)
        drawLine(i, pos);
    }
    pop();
  }

  //draws a line based on the line map
  function drawLine(lineMap, pos) {
    switch(lineMap) {
      case 0:
        line(pos.x, pos.y, pos.x + size, pos.y);
        break;
      case 1:
        line(pos.x, pos.y, pos.x, pos.y + size);
        break;
      case 2:
        line(pos.x + size, pos.y, pos.x + size, pos.y + size);
        break;
      case 3:
        line(pos.x, pos.y + size, pos.x + size, pos.y + size);
        break;
      case 4:
        line(pos.x, pos.y + size, pos.x, pos.y + 2 * size);
        break;
      case 5:
        line(pos.x + size, pos.y + size, pos.x + size, pos.y + 2 * size);
        break;
      case 6:
        line(pos.x, pos.y + size * 2, pos.x + size, pos.y + 2 * size);
        break;
      default:
        console.log("line map is invalid");
        break;
    }
  }
}
