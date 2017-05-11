$(document).ready(function() {

	var investmentInputValue = localStorage.getItem("_investmentInputValue");
	var totalScore = localStorage.getItem("_totalScore");

	var fillSafetyTable = function (portfolioWeight, safetyTotal) {

		$("#safety > tbody > tr > td:nth-child(2)").each(function() { 
			var weight = portfolioWeight;
			var marketValue = safetyTotal;

			marketValue = (marketValue * $(this).text()).toFixed(2);
			weight = (weight * $(this).text() * 100).toFixed(2);
			if (weight == 0) {
				weight = "-";
			}
			$(this).text(weight);

			if (marketValue == 0) {
				marketValue = "-";
			}
			$(this).siblings("td:nth-child(4)").text(marketValue);
		});
	}

	var fillIncomeTable = function (portfolioWeight, incomeTotal) {

		$("#income > tbody > tr > td:nth-child(2)").each(function() { 
			var weight = portfolioWeight;
			var marketValue = incomeTotal;

			marketValue = (marketValue * $(this).text()).toFixed(2);
			weight = (weight * $(this).text() * 100).toFixed(2);
			if (weight == 0) {
				weight = "-";
			}
			$(this).text(weight);

			if (marketValue == 0) {
				marketValue = "-";
			}
			$(this).siblings("td:nth-child(4)").text(marketValue);
		});
	}

	var fillGrowthTable = function (portfolioWeight, growthTotal) {

		$("#growth > tbody > tr > td:nth-child(2)").each(function() { 
			var weight = portfolioWeight;
			var marketValue = growthTotal;

			marketValue = (marketValue * $(this).text()).toFixed(2);
			weight = (weight * $(this).text() * 100).toFixed(2);
			if (weight == 0) {
				weight = "-";
			}
			$(this).text(weight);

			if (marketValue == 0) {
				marketValue = "-";
			}
			$(this).siblings("td:nth-child(4)").text(marketValue);
		});
	}

	if (totalScore < 17) {

		var safetyWeight = 0.70;
		var incomeWeight = 0.3;
		var growthWeight = 0;
		var safetyTotal = investmentInputValue * safetyWeight;
		var incomeTotal = investmentInputValue * incomeWeight;
		var growthTotal = investmentInputValue * growthWeight;

		fillSafetyTable(safetyWeight, safetyTotal);
		fillIncomeTable(incomeWeight, incomeTotal);
		fillGrowthTable(growthWeight, growthTotal);
		
	} else if (totalScore < 26 && totalScore > 16) {

		var safetyWeight = 0.05;
		var incomeWeight = 0.70;
		var growthWeight = 0.25;
		var safetyTotal = investmentInputValue * safetyWeight;
		var incomeTotal = investmentInputValue * incomeWeight;
		var growthTotal = investmentInputValue * growthWeight;

		fillSafetyTable(safetyWeight, safetyTotal);
		fillIncomeTable(incomeWeight, incomeTotal);
		fillGrowthTable(growthWeight, growthTotal);
		
	} else if (totalScore < 40 && totalScore > 25) {

		var safetyWeight = 0;
		var incomeWeight = 0.5;
		var growthWeight = 0.5;
		var safetyTotal = investmentInputValue * safetyWeight;
		var incomeTotal = investmentInputValue * incomeWeight;
		var growthTotal = investmentInputValue * growthWeight;

		fillSafetyTable(safetyWeight, safetyTotal);
		fillIncomeTable(incomeWeight, incomeTotal);
		fillGrowthTable(growthWeight, growthTotal);

	} else if (totalScore > 39) {

		var safetyWeight = 0;
		var incomeWeight = 0.2;
		var growthWeight = 0.8;
		var safetyTotal = investmentInputValue * safetyWeight;
		var incomeTotal = investmentInputValue * incomeWeight;
		var growthTotal = investmentInputValue * growthWeight;

		fillSafetyTable(safetyWeight, safetyTotal);
		fillIncomeTable(incomeWeight, incomeTotal);
		fillGrowthTable(growthWeight, growthTotal);

	}

});