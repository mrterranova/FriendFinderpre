var friends = require("../data/friends");

module.exports = function (app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });


    app.post('/api/friends', function(req, res){

		var newUser = req.body;
        var comparison = [];

        console.log (comparison);

        
        if (friends.length < 1) {
            console.log("unable to do calculation; not enough users");
        } else {
            compareFriends(friends, newUser, comparison);
            var lowest = comparison[0];
            for (var i = 0; i < comparison.length; i++) {
                if (comparison[i] < lowest) {
                    lowest = comparison[i];
                }
            };
            var bestMatch = comparison.indexOf(lowest);
            res.send(friends[bestMatch]);
        };
        friends.push(newUser);
	});


	function compareFriends(friends, newUser, comparison) {
	    var curUserIndex = 0;
	    while (curUserIndex < friends.length) {
            var totalDifference = 0;
            userScores = newUser["scores[]"]
	        for (var i = 0; i < userScores.length; i++) {
	            totalDifference += Math.abs(parseInt(friends[curUserIndex].scores[i]) - parseInt(userScores[i]));
	        }
	        comparison.push(totalDifference);
	        curUserIndex++;
	    }
	}
}