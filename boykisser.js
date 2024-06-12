
var imageSources = "https://kayofeld.github.io/Cookie-Clicker-mod/"

var grandmas = [
	'alteredGrandma',
	'alternateGrandma',
	'antiGrandma',
	'bankGrandma',
	'brainyGrandma',
	'bunnyGrandma',
	'cloneGrandma',
	'cosmicGrandma',
	'emetaGrandma',
	'elfGrandma',
	'farmerGrandma',
	'grandma',
	'grandmasGrandma',
	'luckyGrandma',
	'metaGrandma',
	'minerGrandma',
	'rainbowGrandma',
	'scriptGrandma',
	'templeGrandma',
	'transmutedGrandma',
	'witchGrandma',
	'workerGrandma'
];

Game.Loader.Replace('buildings.png',imageSources+'buildingss.png');
Game.Loader.Replace('perfectCookie.png',imageSources+'boykissser.png');
Game.Loader.Replace('cursor.png',imageSources+'cursor.png');
Game.Loader.Replace('goldCookie.png',imageSources+'kawaiiCookie.png');

// for each grandma in the array, replace the image with the new image
for (var i = 0; i < grandmas.length; i++) {
	Game.Loader.Replace(grandmas[i]+'.png',imageSources+'grandma.png');
};