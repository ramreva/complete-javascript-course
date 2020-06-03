/*-------------------
CODING CHALLENGE
*/

/*
John and Mike both play basketpall in different teams. In the latest 3 games,
John's team scored 89, 120, 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams win in average (highest average score), and print the winner
to the console.
Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into
account there might be draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points.
Like before, log the average winner to the console. HINT: you will need the && operator to take the decision.
5. Like before, change the scores to generate different winners, keeping in mind
there might be draws.

Good luck :)

*/

var jmatch1score = 89;
var jmatch2score = 120;
var jmatch3score = 103;

var mmatch1score = 116;
var mmatch2score = 94;
var mmatch3score = 123;

var mmmatch1score = 96;
var mmmatch2score = 133;
var mmmatch3score = 104;

var javerage = ((jmatch1score + jmatch2score + jmatch3score)/3);
var maverage = ((mmatch1score + mmatch2score + mmatch3score)/3);
var mmaverage = ((mmmatch1score + mmmatch2score + mmmatch3score)/3);

console.log('John\'s team average is: ' + javerage);
console.log('Mike\'s team average is: ' + maverage);
console.log('Mary\'s team average is: ' + mmaverage);

switch (true) {
  case javerage > maverage && javerage > mmaverage:
    console.log('John\s team won.');
    break;
  case maverage > javerage && maverage > mmaverage:
    console.log('Mike\s team won.');
    break;
  case mmaverage > maverage && mmaverage > javerage:
    console.log('Mary\s team won.');
    break;
  default:
    console.log('It\'s a draw!');
}
