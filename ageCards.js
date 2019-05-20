var Game = Game || {};

// constructor(age, cardColor, cost, bonus, effectSymbol, isFreeSymbol, cardName)
	// ordre des coût des matières premières : coins, clays, woods, stones, glass, papyrus. Soit 6 paramètres.

/******************************************************************** 
********************** AGE II CARDS *********************************
*********************************************************************/

// AGE II BROWN cards :
const briquetterie = new Card (2, "brown", [2,0,0,0,0,0], {clays:2}, null, false, "briquetterie");


// AGE II GREY cards :
const soufflerie = new Card (2, "grey", [0,0,0,0,0,0], {glass:1}, null, false, "soufflerie");


// AGE II BLUE cards :
const temple = new Card (2, "blue", [0,0,0,0,0,0], {papyrus:1,woods:1}, "sun", "moon", "douane");


// AGE II GREEN cards :
const bibliotheque = new Card (2, "green", [0,0,1,1,1,0], {victory:2, scientificSymbol:"inkwell"}, null, "book", "bibliotheque");


// AGE II YELLOW cards :
const brasserie = new Card (2, "yellow", [0,0,0,0,0,0], {coins:6}, "barrel", "brasserie");
const caravanserail = new Card (2, "yellow", [2,0,0,0,1,1], {woods:1,clays:1,stones:1}, null, false, "caravansérail");
const douane = new Card (2, "yellow", [4,0,0,0,0,0], {papyrus:1,glass:1}, null, false, "douane");


// AGE II RED cards :
const muraille = new Card (2, "red", [0,0,0,2,0,0], {military:1}, null, false, "muraille");
const placeDArmes = new Card (2, "red", [0,2,0,0,1,0], {military:2}, "helmet", false, "place d'armes");





/* brown (raw materials),
grey (manufactured goods),
blue (civilian buildings),
green (scientific buildings),
yellow (commercial buildings),
red (military buildings),
purple (guilds)*/
