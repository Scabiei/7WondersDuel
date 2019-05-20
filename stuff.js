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
Game.html = Game.html || {};

Game.makeCardboardLines = // verif nom "cardBoard"
    function(age, o_lines) {
        let ageProperties = 
            { 
            age1 :
                    {
                    lines: 4, line1Cards : 6,
                    },
            age2 :
                    {
                    lines: 4, line1Cards : 6,
                    },
            age3 :
                    {
                    lines: 4, line1Cards : 6,
                    }
            };
                
    // code de la fonction
};
    
    
    
    
Game.installAgeCards = // sortir de init pour l'environnement gobal Game ?
    function(age) {    
        // On réinitialise le plateau afin d'éviter tout soucis.
        Game.html.cardBoard.innerHTML = "";
    
        // Selon l'âge, mettre à jour en conséquence le plateau html/css.    
        // La disposition des cartes sur le plateau dépend de l'age en cours.
        switch (age) {
            case 1:
                // A l'âge I, il y a 4 lignes de cartes.
                // La 1e ligne (la plus haute) contient 6 cartes visibles.
                let line1 = Game.html.cardBoard.appendChild(document.createElement("div"));
                let i = 0;
                while (i < 6) {
                    let newCard = line1.appendChild(document.createElement("div"));
                    newCard.classList.add("buildingCard");
                    // créer une fonction qui fait remplir la "div.buildingCard" selon les propriétés de l'objet "Card" concerné ?
                    i++;
                }
                
                // La 2e ligne (sous la plus haute) contient 5 cartes cachées.
                let line2 = Game.html.cardBoard.appendChild(document.createElement("div"));
                let j = 0;
                while (j < 5) {
                    let newCard = line2.appendChild(document.createElement("div"));
                    newCard.classList.add("hidden");
                    // créer une fonction qui fait remplir la "div.buildingCard" selon les propriétés de l'objet "Card" concerné ?
                    j++;
                }
                
                // La 3e ligne contient 4 cartes visibles. Il faut identifier :
                
                // * l'élément HTML parent auquel ajouter des lignes
                // * masquer les cartes 1 ligne sur 2
                // * les remplir
                
                break;
                
                
                
            case 2:
                // A l'âge II, il y a x lignes de cartes.
                break;
                
            case 3:
                console.warn("Inclure les guildes !");
                // A l'âge III, il y a x lignes de cartes.
                break;
                
            default:
                console.warn("'Age' non compris entre 1 et 3");
        } // end switch
};
