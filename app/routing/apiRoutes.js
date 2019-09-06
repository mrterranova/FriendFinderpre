var friends = require("../data/friends");

module.exports = function (app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
        console.log(friends)
    });


    app.post('/api/friends', function(req, res){

        var newUser = req.body;
        var comparison = [];
        userScores = [];
        userScores = [newUser.q1, newUser.q2,newUser.q3,newUser.q4,newUser.q5,newUser.q6,newUser.q7,newUser.q8,newUser.q9,newUser.q10];
        //console.log(userScores)

        var newInfo = {
            name: newUser.name,
            photo: newUser.photo, 
            scores: userScores
        }
        
        if (friends.length < 1) {
        } else {
            compareFriends(friends, newInfo, comparison);
            var lowest = comparison[0];
            for (var i = 0; i < comparison.length; i++) {
                if (comparison[i] < lowest) {
                    lowest = comparison[i];
                }
            };
            var bestMatch = comparison.indexOf(lowest);
            res.send(friends[bestMatch]);
        };
        friends.push(newInfo);
	});


	function compareFriends(friends, newInfo, comparison) {
	    var curUserIndex = 0;
	    while (curUserIndex < friends.length) {
            var totalDifference = 0;
            userScores = newInfo.scores
	        for (var i = 0; i < 10; i++) {
                totalDifference += Math.abs(parseInt(friends[curUserIndex].scores[i]) - parseInt(userScores[i]));
            }
            comparison.push(totalDifference);
            curUserIndex++;
        }
    }
    
}