var fs = require('fs');
function fileActions(err, file){
    if (err) {
        throw err;
    }
    var episodes = JSON.parse(file);

    for (i=0; i < episodes.length; i++) {

	var stars = ""

    console.log("Title: " + episodes[i].title + "   Episode #: " + episodes[i].episode_number);
    console.log(episodes[i].description);
		for (j=1; j <= parseInt(episodes[i].rating); j++)
    	{
    	stars = stars + "*"
    	}

    console.log(("Rating: " + episodes[i].rating) + "  " + stars);

	}
}
fs.readFile("./GoTEpisodes.json", 'utf8', fileActions);


// console.log(episodes[0].title)
