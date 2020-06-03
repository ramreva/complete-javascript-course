/* ------- Coding Challenge 3 ------- */

/*

John and his family went on a holiday and
went to 3 different restaurants.
The bills were $124, $48 and $268.

To tip the waiter a fair amount,
John crated a simple tip calculator
(as a function).

He likes to tip 20% of the bill,
when the bill is less than $50,
15% when the bill is between $50 and $200,
10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1. Containing all three tips (one for each bill)
2. Containing all three final paid amounts (bill + tip)

*/

var bills = [124, 48, 268, 500, 11];
var tips = [];
var total = [];

function calculateTip(billAmount, tipPercent) {
	return (billAmount * (tipPercent / 100));
}

for (var i = 0; i < bills.length; i++) {
	var amount = bills[i];

	if (amount < 50) {
		tips[i] = calculateTip(amount, 20);
		var ans = total[i] = (amount + tips[i]);
		Math.round(ans);
		console.log('Bill Amount: '+ amount + '\nTips: ' + tips[i] + '\nTotal: ' + ans);
	} else if (amount > 50 && amount < 200) {
		tips[i] = calculateTip(amount, 15);
		var ans = total[i] = (amount + tips[i]);
		Math.round(ans);
		console.log('Bill Amount: '+ amount + '\nTips: ' + tips[i] + '\nTotal: ' + ans);
	} else {
		tips[i] = calculateTip(amount, 10);
		var ans = total[i] = (amount + tips[i]);
		Math.round(ans);
		console.log('Bill Amount: '+ amount + '\nTips: ' + tips[i] + '\nTotal: ' + ans);
	}
}
