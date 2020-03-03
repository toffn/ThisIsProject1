//Initialize main img variables + list of images to alternate from
var cardNumber;
var card;
var card1;
var card2;
var card3;
var card1img;
var card2img;
var card3img;
var card1desc;
var card2desc;
var card3desc;
var imageList = [];
var descriptionList = [];
var displayString = "";

var cotdHeader;
var pppHeader;
var mbsHeader;
var csHeader;
var interpHeader;

var slider;

//Global coordinates for 1-2-3 card spreads
var card1x = 250; //Left
var card2x = 500; //Center
var card2y = 225;
var card3x = 750; //Right

var button;

var CoTD;
var CoTDdesc;

//Initialize state machine
//Rename states to be more descriptive
var state;
var stateCoTD = 1;
var statePPP = 2;
var stateMBS = 3;
var stateCS = 4;
var stateM = 5;

function preload()
{
	imageList[0]=loadImage('assets/the_fool.png');
	imageList[1]=loadImage('assets/the_magician.png');
	imageList[2]=loadImage('assets/high_priestess.png');
	imageList[3]=loadImage('assets/the_empress.png');
	imageList[4]=loadImage('assets/the_emperor.png');
	imageList[5]=loadImage('assets/the_hierophant.png');
	imageList[6]=loadImage('assets/the_lovers.png');
	// imageList[7]=loadImage('assets/chariot.png');
	// imageList[8]=loadImage('assets/strength.png');
	// imageList[9]=loadImage('assets/hermit.png');
	// imageList[10]=loadImage('assets/wheel_of_fortune.png');
	// imageList[11]=loadImage('assets/justice.png');
	// imageList[12]=loadImage('assets/hanged_man.png');
	// imageList[13]=loadImage('assets/death.png');
	// imageList[14]=loadImage('assets/temperance.png');
	// imageList[15]=loadImage('assets/devil.png');
	// imageList[16]=loadImage('assets/tower.png');
	// imageList[17]=loadImage('assets/star.png');
	// imageList[18]=loadImage('assets/moon.png');
	// imageList[19]=loadImage('assets/sun.png');
	// imageList[20]=loadImage('assets/judgement.png');
	// imageList[21]=loadImage('assets/world.png');

	pppHeader=loadImage('assets/ppfHeader.png');
	mbsHeader=loadImage('assets/mbsHeader.png');
	csHeader=loadImage('assets/csHeader.png');
	cotdHeader=loadImage('assets/cotdHeader.png');
	interpHeader=loadImage('assets/interp.png');

	descriptionList = loadStrings('assets/descriptions.txt');
}

function setup()
{
	imageMode(CENTER);
	createCanvas(1000,750);

	button = createButton("DEAL AGAIN");
	button.position(460,520);


	slider = createSlider(0, 100, 50, 25);
	slider.position(460, 562);
  	slider.style('width', '80px');

}

function draw()
{
	background(255);

	stateMenu();
	button.hide();
	slider.hide();

	if (state == 1)
	{
		stateCardOfTheDay();
		button.show();
		slider.show();
	}
	else if (state ==2)
	{
		statePastPresentFuture();
		button.show();
		slider.show();
	}
	else if (state==3)
	{
		stateMindBodySpirit();
		button.show();
		slider.show();
	}
	else if (state==4)
	{
		stateChallengeSolution();
		button.show();
		slider.show();
	}
	else if (state==5)
	{
		stateMenu();
		button.hide();
		slider.hide();
	}


}

function stateCardOfTheDay()
{
	stroke(0);
	textAlign(CENTER);
	background(255);

	card = randomCard();
	CoTD = imageList[card];
	CoTDdesc = descriptionList[card];

	image(CoTD, 500, 225);
	textSize(16);
	image(cotdHeader, 500,35);
	textSize(12);
	image(interpHeader,500,425);
	text(CoTDdesc, 500, 455);


	if (slider.value()==0)
	{
		text("(SHUFFLED)", 500, 613);
	}
	else if (slider.value()==25)
	{
		text("(EXTRA SHUFFLED)", 500, 613);

	}
	else if (slider.value()==50)
	{
		text("(HEAVILY SHUFFLED)", 500, 613);	
	}
	else if (slider.value()==75)
	{
		text("(SUPER SHUFFLED)", 500, 613);	
	}
	else if (slider.value()==100)
	{
		text("(EXTREMELY SHUFFLED)", 500, 613);
	}

	button.mousePressed(stateCardOfTheDay);
}

function statePastPresentFuture()
{
	stroke(0);
	textAlign(CENTER);
	background(255);

	card1 = randomCard();
	card2 = randomCard();
	card3 = randomCard();

	card1desc = descriptionList[card1];
	card2desc = descriptionList[card2];
	card3desc = descriptionList[card3];

	card1img = imageList[card1];
	card2img = imageList[card2];
	card3img = imageList[card3];

	image(card1img, card1x, card2y);
	image(card2img, card2x, card2y);
	image(card3img, card3x, card2y);

	textSize(16);
	image(pppHeader, 500,35);
	textSize(12);
	image(interpHeader,500,425);
	text("CONTEXT: " + card1desc, 500, 455);
	text("CURRENT THEMES: " + card2desc, 500, 475);
	text("CONSIDER: " + card3desc, 500, 495);

		if (slider.value()==0)
	{
		text("(SHUFFLED)", 500, 613);
	}
	else if (slider.value()==25)
	{
		text("(EXTRA SHUFFLED)", 500, 613);

	}
	else if (slider.value()==50)
	{
		text("(HEAVILY SHUFFLED)", 500, 613);	
	}
	else if (slider.value()==75)
	{
		text("(SUPER SHUFFLED)", 500, 613);	
	}
	else if (slider.value()==100)
	{
		text("(EXTREMELY SHUFFLED)", 500, 613);
	}

	button.mousePressed(statePastPresentFuture);
}

function stateMindBodySpirit()
{
	stroke(0);
	textAlign(CENTER);
	background(255);

	card1 = randomCard();
	card2 = randomCard();
	card3 = randomCard();

	card1desc = descriptionList[card1];
	card2desc = descriptionList[card2];
	card3desc = descriptionList[card3];

	card1img = imageList[card1];
	card2img = imageList[card2];
	card3img = imageList[card3];

	image(card1img, card1x, card2y);
	image(card2img, card2x, card2y);
	image(card3img, card3x, card2y);

	textSize(16);
	image(mbsHeader, 500,35);
	textSize(12);
	image(interpHeader,500,425);
	text("THINGS TO RE-EVALUATE: " + card1desc, 500, 455);
	text("BE AWARE OF: " + card2desc, 500, 475);
	text("LESSONS TO LEARN: " + card3desc, 500, 495);

		if (slider.value()==0)
	{
		text("(SHUFFLED)", 500, 613);
	}
	else if (slider.value()==25)
	{
		text("(EXTRA SHUFFLED)", 500, 613);

	}
	else if (slider.value()==50)
	{
		text("(HEAVILY SHUFFLED)", 500, 613);	
	}
	else if (slider.value()==75)
	{
		text("(SUPER SHUFFLED)", 500, 613);	
	}
	else if (slider.value()==100)
	{
		text("(EXTREMELY SHUFFLED)", 500, 613);
	}

	button.mousePressed(stateMindBodySpirit);
}

function stateChallengeSolution()
{
	stroke(0);
	textAlign(CENTER);
	background(255);

	card1 = randomCard();
	card2 = randomCard();

	card1desc = descriptionList[card1];
	card2desc = descriptionList[card2];

	card1img = imageList[card1];
	card2img = imageList[card2];

	image(card1img, card1x+100, card2y);
	image(card2img, card3x-100, card2y);

	textSize(16);
	image(csHeader,500,35);
	textSize(12);
	image(interpHeader,500,425);
	text("THE CHALLENGE AT HAND: " + card1desc, 500, 455);
	text("THE KEY TO RESOLVING IT: " + card2desc, 500, 475);

		if (slider.value()==0)
	{
		text("(SHUFFLED)", 500, 613);
	}
	else if (slider.value()==25)
	{
		text("(EXTRA SHUFFLED)", 500, 613);

	}
	else if (slider.value()==50)
	{
		text("(HEAVILY SHUFFLED)", 500, 613);	
	}
	else if (slider.value()==75)
	{
		text("(SUPER SHUFFLED)", 500, 613);	
	}
	else if (slider.value()==100)
	{
		text("(EXTREMELY SHUFFLED)", 500, 613);
	}

	button.mousePressed(stateChallengeSolution);
}

function stateMenu()
{
	stroke(0);
	textAlign(CENTER);
	background(255);

	textSize(16);
	text("PRESS THE FOLLOWING KEYS ON YOUR KEYBOARD TO SHUFFLE AND DEAL TAROT CARDS BY SPREAD:", 500,190);

	textSize(12);
	text("1 - Card of the Day", 500, 225);
	text("2 - Past, Present, Future", 500, 250);
	text("3 - Mind, Body, Spirit", 500, 275);
	text("4 - Challenge and Solution", 500, 300);
	text("5 or [SPACE] - Return to this menu", 500, 325);
	text("NOTE: Tarot is a tool for gaining perspective and should be treated as such.",500,360);
	text("It is not a weapon and it does not instantly bring ideas to life. Please tarot responsibly.",500, 385);
}

function randomCard()
{
	for (i=0;i<1;i++)
	{
		cardNumber=String(parseInt(random(0,7)));
		noLoop();
		print(cardNumber);
	}

	return cardNumber;
}

function keyPressed()
{
	if (key == " ")
	{
		state = stateM;
		loop();
	}
	else if (key == "1")
	{
		state = stateCoTD;
		loop();
	}
	else if (key == "2")
	{
		state = statePPP;
		loop();
	}
	else if (key =="3")
	{
		state = stateMBS;
		loop();
	}
	else if (key == "4")
	{
		state = stateCS;
		loop();
	}
	else if (key == "5")
	{
		state = stateM;
		loop();
	}
}
