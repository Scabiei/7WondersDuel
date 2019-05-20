var Game = Game || {};

class Player {
	constructor (playerName) {
		this.playerName = playerName,
		this.coins = 7,
		this.clays = 0,
		this.woods = 0,
		this.stones = 0,
		this.glass = 0,
		this.papyrus = 0,
		this.scientificSymbols = [],
		this.wonders = 0
	}
}

Game.Player1 = new Player ("Nicolas");
Game.AI = new Player ("I.A.");

/*
function setCost(myArray, cardName) {
	if (myArray.length !== 6) return console.warn(`Il manque un paramètre pour définir le coût d'achat de ${cardName.toUpperCase()}`);
	let cost;
	console.log(`${this.cardName} coûte à l'achat `);
	return cost;
}
*/

class Card {
	constructor(age, cardColor, cost, effectSymbol, isFreeSymbol, cardName) {
		this.age = age,
		this.cardColor = cardColor, /* brown (raw materials), grey (manufactured goods), blue (civilian buildings),
		green (scientific buildings), yellow (commercial buildings), red (military buildings), purple (guilds)*/
		this.cost = this.cost,
		this.effectSymbol = effectSymbol,
		this.isFreeSymbol = isFreeSymbol,
		this.cardName = cardName
	}

	

	setColorSpecs() {
		switch (this.cardColor) {

			case "brown" :
				break;

			case "grey" :
				break;

			case "blue" :
				break;

			case "green" :
				break;

			case "yellow" :
				setFreeResource();
				break;

			case "red" :
				break;

			case "purple" :
				break;

			default:
				console.warn(`${this.cardName} a une "cardColor" inconnue`);

		} // end switch
	} // end setColorSpecs


	// YELLOW CARDS (trade) METHODS :
	setFreeResource() {
		// gérer les possibilités de choix de ressources par un objet listing par rapport au nom de la carte ?
	}

	getFreeResource(numberOfChoices) {

	}


	// GENERAL CASES ? :
	giveBonus() {

	};
}

/* EXEMPLE D'UNE CARD :

var currentCard = new Card(1, yellow, trade, {wood : 1, brick : 1, stone : 1}, );


*/

class Wonder {
	// la classe Wonder sera issue de la classe Card. Pour éviter les répétitions de méthodes et permettre une différenciation par la suite.
	constructor() {

	}

	
}
