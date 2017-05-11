$(document).ready(function() {

	var questionList = ["What is your current age range?", 
	"When will you need to use the money?", 
	"How would you characterize your investment knowledge?", 
	"If the value of your investment fluctuates, how would you respond?",
	"Recognizing that investments with higher potential returns involve greater risk, what hypothetical investment returns over a 5 year term would you be most comfortable with?",
	"What statement best describes your investment goals?",
	"What portfolio below best resembles your current investments?",
	"What is your personal annual income?",
	"What is the approximate value of your entire portfolio, both with Gryphon Asset Management and elsewhere?",
	"Including real estate, what is the approximate value of your net worth? (Assets - Liabilities)"];

	var answerList = {
		questionOne: {
			"Under 30": 4, 
			"30 to 40": 5, 
			"41 to 50": 3, 
			"51 to 65": 2, 
			"Over 65": 1
		},
		questionTwo: {
			"Less than 2 years": 1, 
			"2 to 5 years": 4, 
			"6 to 10 years": 7, 
			"After 10 years": 10
		},
		questionThree: {
			"None": 1, 
			"Some": 2, 
			"Average": 3, 
			"Sophisticated": 5
		},
		questionFour: {
			"Immediately liquidate my investment as soon as it loses value": 1,
			"Sell an investment if it declines in value for a 3 to 6 month period": 3,
			"Allow the investment to fluctuate for a year before making any changes": 6,
			"Stay invested even if negative market conditions resulted in losses, keeping with a long-term grwoth strategy that maximizes returns over the long run.": 10
		},
		questionFive: {
			"Profit 3% or Lose 0%": 0, 
			"Profit 46% or Lose 23%": 2, 
			"Profit 100% or Lose 46%": 4
		},
		questionSix: {
			"Perservation of capital is of utmost importance and I do not require to draw income from my investments": 0,
			"Income from my investments is required as my sole source of income": 1,
			"Income from my investments is required to supplemental my income and growth over time": 2,
			"I am interested in long-term growth and income is not a concern at this moment": 3,
			"I wish to maximize the growth potential of my portfolio and am willing to accept a higher degree of risk to achieve that goal": 5
		},
		questionSeven: {
			"Little or no investments": 0, 
			"T-bills, CDs, savings account": 1, 
			"Primarily bonds, strip bonds, or fixed income products": 2, 
			"A combination of money market, bonds and stock securities or mutual funds and ETFs": 3, 
			"Primarily stocks, stock mutual funds and or ETFs": 5
		},
		questionEight: {
			"Under $30,000": 1, 
			"$30,000-$74,000": 2, 
			"$75,000-$124,000": 3, 
			"$125,000-$199,000": 4, 
			"Over $200,000": 5
		},
		questionNine: {
			"Under $50,000": 1, 
			"$50,000-$99,000": 2, 
			"$100,000-$199,000": 3, 
			"$200,000-$500,000": 4, 
			"Over $500,000": 5
		},
		questionTen: {
			"Under $100,000": 1, 
			"$100,000-$249,000": 2, 
			"$250,000-$499,000": 3, 
			"$500,000-$1,000,000": 4, 
			"Over $1,000,000": 5
		}
	};

	var questionCount = 0;
	var totalScore = 0;

	function nextQuestion() {
		$(".question > h2").text(questionList[questionCount]);
	}

	function makeAnswerList() {
		$(".answersBox").empty();
		var questionNumber = Object.keys(answerList)[questionCount];
		var answersArray = Object.keys(answerList[questionNumber]);
		for (var i = 0; i < answersArray.length; i++) {
			$(".answersBox").append("<div class='answer'><p>" + answersArray[i] + "</p></div>");
		};
		$(".answer").click(function(){
			$(".selected").removeClass("selected");
			$(this).addClass("selected");
		});
	}

	nextQuestion();
	makeAnswerList();

	$(".nextBtn").click(function(){
		
		if ($(".selected").length === 1) {
			var questionNumber = Object.keys(answerList)[questionCount];
			var selectedAnswerString = $(".selected > p").text();
			var selectedAnswerScore = answerList[questionNumber][selectedAnswerString];

			totalScore += selectedAnswerScore;

			questionCount++;
		}

		if (questionCount === 10) {
			localStorage.setItem("_totalScore", totalScore);
			$("a.nextBtn").attr("href", "step2.html");
		} else {
			nextQuestion();
			makeAnswerList();			
		}
	});

});











