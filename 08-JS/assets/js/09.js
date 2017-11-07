/*-----------------------------------------------------
👨‍🚀👨‍🚀👨‍🚀👨‍🚀👨‍🚀👨‍🚀👨‍🚀👨‍🚀👨‍🚀👨‍🚀Les Boucles👨‍🚀👨‍🚀👨‍🚀👨‍🚀👨‍🚀👨‍🚀👨‍🚀 
------------------------------------------------------*/

// La Boucle FOR

// -- Pour i = 1 ; tant que i est strictement inferieur ou egale a 10 ; alors j'increment i de 1.
for(let i = 1 ; i<=10 ; i++){
    document.write("<p>Instruction executée : <strong>" + i + "</strong> </p>");

}

// La Boucle WHILE : Tant que
var j=1 ; 
while (j <=10) {
    document.write("<p>Instruction executée : <strong>" + j + "</strong></p>");
    j++;
}

/* -------------------------------
EXERCICE
-------------------------------- */

// -- Supposons, le tableau suivant :
var Prenoms = ['Hugo', 'Jean', 'Matthieu', 'Luc', 'Pierre', 'Marc'];

/* CONSIGNE : Grâce à une boucle FOR, afficher la liste des prénoms du tableau suivant dans la console ou sur votre page. */
for(let i = 0 ; i<=5 ; i++){
    document.write("Voici " + Prenoms[i] + "<br>");
}

// Correction


    // -- Supposons, le tableau suivant :
    var Prenoms = ['Hugo', 'Jean', 'Matthieu', 'Luc', 'Pierre', 'Marc'];
    
        /* CONSIGNE : Grâce à une boucle FOR, afficher la liste des prénoms du tableau suivant dans la console ou sur votre page. */
    
        for(let i = 0 ; i < 6 ; i++) {
            console.log(Prenoms[i]);
        }
    
        console.log(' - - - ');
    
        // -- 2ème façon de faire avec "length"
        var NbElementDansMonTableau = Prenoms.length;
        for(let i = 0 ; i < NbElementDansMonTableau ; i++) {
            console.log(Prenoms[i]);
        }
    
        console.log(' - - - ');
    
        // -- Même exercice avec while
    
        var j = 0;
        while(j < Prenoms.length) {
            console.log(Prenoms[j]);
            j++;
        }
        
            console.log(' - - - ');
    
        // -- Même exercice avec la bloucle forEach
        // -- ATTENTION A LA PERFORMANCE !!!
    
        Prenoms.forEach(affichePrenoms);
    
        function affichePrenoms(prenom, indice) {
            console.log(prenom);
        }
    
    // https://benhollis.net/blog/2009/12/13/investigating-javascript-array-iteration-performance/
    
    // https://leftshift.io/4-javascript-optimisations-you-should-know