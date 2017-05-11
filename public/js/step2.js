$(document).ready(function() {

	var totalScore = localStorage.getItem("_totalScore");

	var ctx = document.getElementById("myChart");

	var data = {
		labels: ["Safety", "Income", "Growth"]
	};

	var backgroundColor = ["#CFD8DC", "#455A64", "#2979FF"];
	var hoverBackgroundColor = ["#CFD8DC", "#455A64", "#2979FF"];

	if (totalScore < 17) {

		data.datasets = [
			{
				data: [70, 30, 0],
				backgroundColor: backgroundColor,
				hoverBackgroundColor: hoverBackgroundColor
			}
		];

	} else if (totalScore < 26 && totalScore > 16) {

		data.datasets = [
			{
				data: [5, 70, 25],
				backgroundColor: backgroundColor,
				hoverBackgroundColor: hoverBackgroundColor
			}
		];

	} else if (totalScore < 40 && totalScore > 25) {

		data.datasets = [
			{
				data: [0, 50, 50],
				backgroundColor: backgroundColor,
				hoverBackgroundColor: hoverBackgroundColor
			}
		];

	} else if (totalScore > 39) {

		data.datasets = [
			{
				data: [0, 20, 80],
				backgroundColor: backgroundColor,
				hoverBackgroundColor: hoverBackgroundColor
			}
		];

	}

	var options = {
		animation: {
			animateScale:true
		},
		legend: {
			labels: {
				fontColor: "#fff",
				fontFamily: "Lato",
				fontSize: 14
			}
		}
	};

	var myDoughnutChart = new Chart(ctx, {
	    type: 'doughnut',
	    data: data,
	    options: options
	});

	$(".nextBtn").click(function(){
		var investmentInputValue = $("input[name='investmentAmount']").val();
		localStorage.setItem("_investmentInputValue", investmentInputValue);
	});

});