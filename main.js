var Game = Game || {};
Game.init = Game.init || {}; // intelligent ?

Game.init.filling = function() {
	document.getElementById("humanName").innerHTML = Game.Player1.playerName;
	document.getElementById("AIName").innerHTML = Game.AI.playerName;
}

Game.init.installAge2Cards = function() {
	var age2Cards = [briquetterie,soufflerie,temple,bibliotheque,brasserie,caravanserail,douane,muraille,placeDArmes];
	for (var card of age2Cards) {
		console.log(card);
		let el = document.getElementById("cardBoard");
		let div = el.appendChild(document.createElement("div"));
		div.classList.add("ageCard");
		
		let subDiv1 = div.appendChild(document.createElement("div"));
		subDiv1.classList.add("cardHeading");
		subDiv1.innerHTML = card.bonus;

		let subDiv2 = div.appendChild(document.createElement("div"));
		subDiv2.classList.add("cardCost");
		subDiv2.innerHTML = card.cost;

		let subDiv3 = div.appendChild(document.createElement("div"));
		subDiv3.classList.add("cardFree");
		subDiv3.innerHTML = card.isFreeSymbol;

		let subDiv4 = div.appendChild(document.createElement("div"));
		subDiv4.classList.add("cardBody");
		// inclure des <br> ou des <p> vides pour donner de l'espace vertical ?

		let subDiv5 = div.appendChild(document.createElement("div"));
		subDiv5.classList.add("cardName");
		subDiv5.innerHTML = card.cardName;

	} // end for of
};

// constructor(age, cardColor, cost, bonus, effectSymbol, isFreeSymbol, cardName)
/*
Game.init.filling();
Game.init.installAge2Cards();
*/

window.onload =
	Game.init.filling();
	Game.init.installAge2Cards();
;
