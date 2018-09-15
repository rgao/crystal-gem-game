var goal_arr = [];

for (var i = 0; i < 101; i++) {
    goal_arr.push(i + 19);
};

goal = goal_arr[Math.floor(Math.random)];

// var gem_value = {
//     "ruby" : 4,
//     "sapphire" : 6,
//     "emerald" : 5,
//     "diamond" : 7
// }

var score = 0

$("button").on("click", function() {
    score += $(this).data-gemvalue();
    if (score === goal) {
        // display win
    } else if (score > goal) {
        // display loss
    };
})