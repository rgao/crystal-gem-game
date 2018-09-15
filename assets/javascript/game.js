var goal_arr = [];

for (var i = 0; i < 101; i++) {
    goal_arr.push(i + 19);
};

goal = goal_arr[Math.floor(Math.random)];

var gems = {
    "ruby" : 4,
    "sapphire" : 6,
    "emerald" : 5,
    "diamond" : 7
}

var score = 0

$("img").on("click", function() {
    var gemvalue = $(this).attr("id");
    score += gems[gemvalue];
    console.log(score)
    if (score === goal) {
        // display win
    } else if (score > goal) {
        // display loss
    };
})