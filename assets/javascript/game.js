document.addEventListener("DOMContentLoaded", function(){
    
    var goal_arr = [];

    for (var i = 0; i < 101; i++) {
        goal_arr.push(i + 19);
    };

    goal = goal_arr[Math.floor(Math.random() * goal_arr.length)];
    $(".goalvalue").text(goal)

    var gems = {
        "ruby" : [2, 3, 4], 
        "sapphire" : [4, 5, 6, 7],
        "emerald" : [3, 4, 5, 6],
        "diamond" : [5, 6, 7, 8, 9],

        gemValue : function () {
            for (var key in this) {
                if (Array.isArray(this[key])) {
                    this[key] = this[key][Math.floor(Math.random() * this[key].length)];
                };
            };
        },

        gemReset : function () {
            this["ruby"] = [2, 3, 4];
            this["sapphire"] = [4, 5, 6, 7];
            this["emerald"] = [3, 4, 5, 6]
            this["diamond"] = [5, 6, 7, 8, 9];
        }
    };

    gems.gemValue();

    var score = 0
    var wins = 0
    var losses = 0

    $("img").on("click", function() {
        var gem = $(this).attr("id");
        score += gems[gem];
        $(".score").css("font-size", "32px");
        $(".score").css("color", "brown");
        $(".score").text("Score: " + score);

        if (score === goal) {
            wins += 1;
            $(".winvalue").text(wins);
            $(".score").css("font-size", "24px");
            $(".score").css("color", "green");
            $(".score").text("Congratulations, You Win! Your score was " + score + ". Click a fabulous gem to play again.");
            score = 0;
            goal = goal_arr[Math.floor(Math.random() * goal_arr.length)];
            $(".goalvalue").text(goal);
            gems.gemReset();
            gems.gemValue();

        } else if (score > goal) {
            losses += 1;
            $(".lossvalue").text(losses);
            $(".score").css("font-size", "24px");
            $(".score").css("color", "red");
            $(".score").text("Oh no, your score was " + score + " and went over the goal! Click a fabulous gem to play again.");
            score = 0;
            goal = goal_arr[Math.floor(Math.random() * goal_arr.length)];
            $(".goalvalue").text(goal);
            gems.gemReset();
            gems.gemValue();
        };
    
    });

})