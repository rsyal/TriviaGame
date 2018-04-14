// Variables

var correct = 0;
var incorrect = 0;
var time = 20;
var currentQuestion = 0;
var coinFlip;
var nextQuestion;

var questionArray = [
	{
		question: "What is the leading cause of death in women?",
		option: ["Heart Disease","Breast cancer","Accidents","Lung cancer","Foot Fungus"],
		answer: "Heart Disease"	
	

},
	{
		question: "Which factor does NOT increase your risk of breast cancer?",
		option: ["Breast Feeding","Breast Injury","BRCA1 Carrier","Obesity","Family History"],
		answer: "Breast Injury"
	
},

{
	question: "Which of the following has shown to lower your risk of ovarian cancer??",
	option: ["Birth Control Pills","Late menopause","Using tampons","Taking vitamins","IUD"],
	answer: "Birth Control Pills"

},

{
	question: "Which of these is NOT the name of one of the phases of your menstrual cycle??",
	option: ["Ovulation","Luteal","Follicular","Menstrual","Corpus"],
	answer: "Corpus"

},

{
	question: "What is the average age of menopause?",
	option: ["55","40","60","51","65"],
	answer: "51"

},



	{
		question: "Which is the most common STD?",
		option: ["Chlamydia","Herpes","HIV","Hepatis C","Syphilis"],
		answer: "Chlamydia"
}];

$(document).ready (startGame);
	
// Function to start the game
function startGame() {
	$("body").on("click", ".gameOver", function () {
		startGame();
		console.log("You clicked it");	
});
	$(".startButton").on("click", function () {
		questions(currentQuestion);
		
		
		console.log("am I working");
		$(".startButton").hide(2000);

		var coinFlip = 20;
		var counter = 20;
		var timer = setInterval(function(){
  		document.getElementById("timeRemaining").textContent = --counter;
  		if(counter <= 0)
		clearInterval (timer);
		console.log("Is there a timer", counter);
		},1000);
		$("#timeRemaining").html(time);
	});
}		
function questions(currentQuestion){
	$("#question").show(8000);
// // Show question (Loop questions through array, start at 0 position)
	$("#question").text(questionArray[currentQuestion].question);
	for(var i=0; i < questionArray[currentQuestion].option.length; i++){

// Show answer options, but need to create a div with class of ".options"
		var newDiv = $("<div type = button>");
        newDiv.attr("data-value", questionArray[currentQuestion].option[i]);
        newDiv.attr("class", "options");
        newDiv.html(questionArray[currentQuestion].option[i]);
        $("#question").append(newDiv);
	}


	$(".options").on("click", function () {
		if($(this).data('value')===questionArray[currentQuestion].answer) {
			correct++;
			correctAnswer();
		} else {
			incorrect++;
			wrongAnswer();

		}
	});
	
	function correctAnswer(){
		$("#question").html("You are correct");
		clearInterval(coinFlip);
		$(".timeRemaining").hide();
		nextQuestion = setTimeout(moveOn, 700);
	
	}
	function wrongAnswer(){
		$("#question").html("You are wrong." + "<br>" + 
		"The answer is " + 
		questionArray[currentQuestion].answer);
		clearInterval(coinFlip);
		$(".timeRemaining").hide();
		nextQuestion = setTimeout(moveOn, 700);
	}
	
	function moveOn() {
		if (currentQuestion === 5) {
		var newDiv2 = $("<div type = button>");
        newDiv2.attr("text");
        newDiv2.attr("class", "gameOver");
        newDiv2.html("The quiz is over. <hr>Good Job!");
		$("#question").append(newDiv2);
		$(".options").hide();
		$("#timeRemaining").hide();
	
		
		}else {
			time=20;
			$("#question").empty();
			$(".options").empty();
			$("#timeRemaining").empty();
			$("#timeRemaining").show();
			clearInterval(coinFlip);
			currentQuestion++;
			questions(currentQuestion);
		}
	
	
		};


}



	

	








					





					













	