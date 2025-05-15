let x, y;
var value = 1;
var count = 0;
var maxFrames = 20;

// STAR from example - https://p5js.org/examples/form-star.html
function star(x, y, radius1, radius2, npoints) {
	let angle = TWO_PI / npoints;
	let halfAngle = angle / 2.0;
	beginShape();
	for (let a = 0; a < TWO_PI; a += angle) {
		let sx = x + cos(a) * radius2;
		let sy = y + sin(a) * radius2;
		vertex(sx, sy);
		sx = x + cos(a + halfAngle) * radius1;
		sy = y + sin(a + halfAngle) * radius1;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}

function explosionFrame() {
	if (mouseIsPressed) {
		push();
		// Set some random value to make the explosion look "shaky"
		let r1 = random(Math.floor(value));
		let r2 = random(Math.floor(value));
		let r3 = random(Math.floor(value));
		let r4 = random(Math.floor(value));
		translate(r1 - r2 + width/2, r3 - r4 + height/2);

		// Draw the explosion at the origin
		noStroke();
		fill("#ff0000");
		star(0, 0, 105, 180, 20);
		fill("#ffaa00");
		star(0, 0, 60, 105, 18);
		fill("#ffff00");
		star(0, 0, 30, 75, 16);
		pop();
	}
}

function setup() {
	createCanvas(600, 600);
	x = width / 2;
	y = height / 2;
}

function draw() {
	background(100);
	ellipse(mouseX, mouseY, 20, 20);
	explosionFrame();
	
	count++;

	//body outline
	//insideColor
	fill(106,172.99,181.99);
	stroke(106,172.99,181.99);
	quad(200,300,400,315,399,375,199,375);
	stroke(0);
	
	//top
	bezier(200,300,275,290,350,305,400,315);
	//left
	bezier(200,300,197,310,197,345,199,375);
	//bottom
	bezier(199,375,205,390,300,387,399,375);
	//right
	bezier(400,315,403,325,401,350,399,375);
	
	//frontLeg 1
	
	//color
	beginShape();
	stroke(106,172.99,181.99);
	fill(106,172.99,181.99);
	vertex(229,385);
	vertex(229,409);
	vertex(222,410);
	vertex(218,409);
	vertex(218,418);
	vertex(226,420);
	vertex(235,416);
	vertex(239,386);
	vertex(229,385);
	endShape();
	
	stroke(0);
	
	noFill();
	bezier(229,385,231,420,225,407,218,409);
	fill(106,172.99,181.99);
	bezier(218,409,214,414,216,417,218,418);
	bezier(218,418,220,420,224,420,226,420);
	bezier(226,420,229,419,232,418,235,416);
	bezier(235,416,235,413,237,399,239,385);
	
	//frontLeg 2
	push();
	translate(35,7);
	
	//color
	beginShape();
	stroke(106,172.99,181.99);
	fill(106,172.99,181.99);
	vertex(225,365);
	vertex(226,370);
	vertex(227,375);
	vertex(228,385);

	vertex(229,385);
	vertex(229,409);
	vertex(222,410);
	vertex(218,409);
	vertex(218,418);
	vertex(226,420);
	vertex(235,416);
	vertex(239,385);
	
	vertex(240,380);
	vertex(242,375);
	vertex(244,370);
	vertex(225,365);
	
	endShape();
	
	stroke(0);
	bezier(228,385,227,375,226,370,225,365);
	noFill();
	bezier(228,385,230,420,225,407,218,409);
	fill(106,172.99,181.99);
	bezier(218,409,214,414,216,417,218,418);
	bezier(218,418,220,420,224,420,226,420);
	bezier(226,420,229,419,232,418,235,416);
	bezier(235,416,235,413,237,399,239,385);
	bezier(239,385,240,380,242,375,244,370);
	pop();
	
	//backLeg 1
	push();
	translate(-17,2);
	
	//footColor
	beginShape();
	stroke(255,164.985,0);
	fill(255,164.985,0);
	vertex(344,396);
	vertex(319,403);
	vertex(323,410);
	vertex(340,416);
	vertex(354,403);
	vertex(353,396);
	vertex(344,396);
	endShape();
	
	//legColor
	beginShape();
	stroke(106,172.99,181.99);
	fill(106,172.99,181.99);
	vertex(337,382);
	vertex(347,398);
	vertex(355,392);
	vertex(363,379);
	vertex(337,382);
	endShape();
	
	//leg
	stroke(0);
	fill(106,172.99,181.99);
	bezier(337,382,339,390,343,397,347,398);
	bezier(347,398,350,400,352,396,355,392);
	bezier(355,392,358,386,361,382,363,379);
	//foot
	fill(255,164.985,0);
	bezier(344,396,335,396,327,399,319,403);
	bezier(319,403,317,404,319,406,323,410);
	bezier(323,410,329,416,330,422,340,416);
	bezier(340,416,344,414,350,408,354,403);
	bezier(354,403,356,400,357,395,353,396);
	pop();
	
	//backLeg 2
	
	push();
	translate(37,15);
	
	//footColor
	beginShape();
	stroke(255,164.985,0);
	fill(255,164.985,0);
	vertex(344,396);
	vertex(319,403);
	vertex(323,410);
	vertex(340,416);
	vertex(354,403);
	vertex(353,396);
	vertex(344,396);
	endShape();
	
	//legColor
	beginShape();
	stroke(106,172.99,181.99);
	fill(106,172.99,181.99);
	vertex(330,350);
	vertex(337,382);
	vertex(347,398);
	vertex(353,392);
	vertex(361,360);
	vertex(330,350);
	endShape();
	
	//leg
	stroke(0);
	fill(106,172.99,181.99);
	bezier(337,382,336,377,335,372,330,350);
	bezier(337,382,339,390,343,397,347,398);
	bezier(347,398,349,400,351,396,353,392);
	bezier(353,392,355,383,358,374,362,361);
	//foot
	fill(255,164.985,0);
	bezier(344,396,335,396,327,399,319,403);
	bezier(319,403,317,404,319,406,323,410);
	bezier(323,410,329,416,330,422,340,416);
	bezier(340,416,344,414,350,408,354,403);
	bezier(354,403,356,400,357,395,353,396);
	
	pop();
	
	//beaverTail
			//bottomFirst
	
	beginShape();
	stroke(255,164.985,0);
	fill(255,164.985,0);
	vertex(400,375);
	vertex(418,375);
	vertex(420,376);
	vertex(450,384);
	vertex(490,410);
	vertex(525,370);
	vertex(524,340);
	vertex(430,338);
	vertex(402,343);
	vertex(400,375);
	endShape();
	
	stroke(0);
	noFill();
	bezier(399,375,420,374,450,380,490,410);
	fill(255,164.985,0);
	bezier(490,410,497,412,510,400,525,370);
	bezier(525,370,529,360,528,350,524,340);
	bezier(524,340,516,320,490,330,430,338);
	bezier(430,338,425,338,420,340,401,343);
	
	//waffleLinesInTail
	//Pairs are cross sections (they meet in the middle) starting on the very left
	noFill();
	stroke(200,100,0);
	bezier(407,343,413,350,417,365,418,375);
	bezier(401,367,408,359,415,350,420,341);
	
	bezier(420,341,429,351,436,371,439,381);
	bezier(418,375,427,364,434,353,440,337);
	
	bezier(440,337,449,346,456,360,462,391);
	bezier(439,381,460,360,470,345,475,332);
	
	bezier(475,332,490,360,496,380,495,408);
	bezier(462,391,500,360,510,340,517,333);
	
	//bill
	//insideColor
	fill(255,164.985,0);
	beginShape();
	stroke(255,164.985,0);
	vertex(220,340);
	vertex(219,363);
	vertex(182,363);
	vertex(181,370);
	vertex(183,371);
	vertex(186,372);
	vertex(191,371);
	vertex(198,370);
	vertex(215,369);
	vertex(230,371);
	vertex(220,340);
	endShape();
	
	beginShape();
	vertex(205,371);
	vertex(245,380);
	vertex(230,365);
	vertex(226,355);
	vertex(220,340);
	vertex(230,371);
	vertex(205,371);
	endShape();
	
	//top
	stroke(0);
	bezier(220,340,215,350,217,357,219,363);
	bezier(219,363,210,359,190,356,182,363);
	bezier(182,363,179,365,179,367,181,370);
	bezier(181,370,183,371,186,373,191,372);
	noFill();
	bezier(191,372,198,370,215,369,230,371);
	//bottom
	fill(255,164.985,0);
	bezier(205,371,210,380,220,386,245,380);
	//rightSide
	noFill();
	bezier(220,340,226,355,230,365,245,380);
	
	//leftEye
	fill(255);
	ellipse(198,325,30,20);
	fill(0);
	ellipse(196,324,15,12);
	fill(255);
	ellipse(194,322,3,3);
	//rightEye
	fill(255);
	ellipse(240,328,30,20);
	fill(0);
	ellipse(242,327,15,12);
	fill(255);
	ellipse(240,325,3,3);
	
	if (mouseIsPressed == true) 
	{
	
		//fedora

		//color
		fill(48,24,24);

		//colorForBottomLeft
		stroke(48,24,24);
		beginShape();
		vertex(165,303);
		vertex(200,292);
		vertex(205,291);
		vertex(213,291);
		vertex(231,292);
		vertex(204,300);
		vertex(170,303);
		endShape();
		stroke(0);
		//bottom

		//left
		bezier(165,303,175,305,190,303,205,300);

		//colorForMidAndRight
		stroke(48,24,24);
		fill(44,20,20);
		beginShape();
		vertex(275,287);
		vertex(272,298);
		vertex(250,299);
		vertex(230,298);
		vertex(215,297);
		vertex(275,287);
		endShape();
		stroke(0);

		//mid
		bezier(205,300,225,295,263,282,275,287);

		//right
		bezier(275,287,282,290,290,295,272,298);
		bezier(272,298,250,299,230,298,215,297);

		//leftAboveBottom
		bezier(165,303,175,300,188,295,200,292);

		//topPartOfFedora
		stroke(52,28,28);
		beginShape();
		vertex(200,292);
		vertex(212,255);
		vertex(246,274);
		vertex(263,268);
		vertex(263,286);
		endShape();

		stroke(0);
		//leftVertical
		bezier(200,292,201,280,204,274,212,255);

		//top
		bezier(212,255,225,260,235,266,245,273);
		bezier(242,276,250,270,257,267,263,268);

		//rightVertical
		bezier(263,268,265,274,264,278,263,285);

		//midStrap
		stroke(1,1,1);
		fill(1,1,1);
		beginShape();
		vertex(200,292);
		vertex(232,292);
		vertex(254,287);
		vertex(201,285);
		endShape();

		//bottom
		stroke(0);
		noFill();
		bezier(200,292,205,291,213,291,232,292);
		//top
		fill(1,1,1);
		bezier(201,285,207,283,230,284,254,287);
	}
	
	else 
	{
		//hair
		noFill();
		//left
		bezier(210,298,203,290,193,285,190,285);
		//middle
		bezier(210,298,205,290,197,280,185,275);
		//right
		bezier(210,298,210,290,210,285,205,280);
	}
}