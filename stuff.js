var wonders = ["colosse","mur","vague","pyramide","labyrinthe","tour","méandres","flaque","sceau","empire","claque","embassade","maison","chalet"];
// length = 14

/**
 * @name getRandomInteger
On renvoie un entier aléatoire entre une valeur min (incluse) et une valeur max (incluse).
Attention : si on utilisait Math.round(), on aurait une distribution non uniforme qui réduirait le caractère aléatoire de la méthode.
 */
function getRandomInteger(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}



/**
 * @name pick
 * @param {array} sourceArray : le deck dans lequel piocher.
 * @param {integer} number : le nombre de cartes à piocher.
 * @param {integer} boxReturning : le nombre de cartes à retirer avant distribution.
*/
function pick(sourceArray, number, boxReturning) {    
    let outArray = [];
    
    // Retirer des cartes d'un deck avant sa distribution.
    if (boxReturning) {
        var boxReturned = [];
        while (boxReturning > 0) {
            let random = getRandomInteger(0,sourceArray.length);
            console.log(random); if (random > sourceArray.length) console.warn(`random > sourceArray.length  ${random} > ${sourceArray.length} in boxReturning`);
            boxReturned.push(sourceArray.splice(random,1)); // pour debug
            boxReturning--;
        }
    }
    
    // On ajoute des cartes 1 à 1 au nouveau deck qui sera distribué.
    while (number > 0) {
        let random = getRandomInteger(0,sourceArray.length);
        console.log(random); if (random > sourceArray.length) console.warn(`random > sourceArray.length  ${random} > ${sourceArray.length} in picking`);
        outArray.push(sourceArray[random]);
        sourceArray.splice(random,1);
        number--;
    }
    
    console.log("boxReturned", boxReturned);
    console.log("sourceArray", sourceArray);
    console.log("outArray", outArray);
    return outArray;
}

pick(wonders,4,2);

Game.init = Game.init || {};
Game.init.installAgeCards =
    function(age) {
        if (age === 3) console.warn("Inclure les guildes !");
    
        // Former le deck age I
        // Mettre à jour le plateau html/css
    
        // La disposition des cartes sur le plateau dépend de l'age en cours.
        switch (age) {
            case 1:
                // A l'âge I, il y a 4 lignes de cartes.
                // La 1e ligne contient 5 cartes visibles.
                let line1 = carBoard.appendChild(document.createElement("div"));
                let i = 0;
                while (i < 5) {
                    let newCard = line1.appendChild(document.createElement("div"));
                    newCard.classList.add("buildingCard");
                    i++;
                }
                break;
                
            case 2:
                // A l'âge II, il y a x lignes de cartes.
                break;
                
            case 3:
                // A l'âge III, il y a x lignes de cartes.
                break;
                
            default:
                console.warn("'Age' non compris entre 1 et 3");
        } // end switch
};
