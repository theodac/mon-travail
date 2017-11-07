/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */

// // Demande de saisit du nom par l'utilisateur 
// var prenom = prompt("Quel est votre Prénom ? ");

// // Retourner le prenom et demande l'age
// console.log(prenom);

// var age = prompt("Bonjour " + prenom + " Quel age as tu ?");

// console.log(age);
// // Definir la date
// var annee = new Date();
// // Annee de naissance
// var naissance = ("Tu est donc né en " + (annee.getFullYear()-age) + ".");
// document.write(naissance);
// // Recapitulatif utilisateur
// document.write("<p>Bonjour " + prenom + ", tu as " + age + " ans.<p>" );

// //👨‍🎤👨‍🎤 Correction👨‍🎤👨‍🎤


//  1 -- Initialisation des valeurs
var DateObj = new Date();
var AnneeActuelle = DateObj.getFullYear();
//  2 -- Creation de ma fonction
function Hello() {
    // 2.1 -- Je demande a l'utilisateur son Prenom
    // PS : le mot clef let peut etre utilise comme le var mais se limitera a une fonction ou une boucle
    let prenom = prompt("Hello ! What is your name ?","Saisir votre Prenom");
    console.log(prenom);
    console.log(typeof prenom);

    // 2.2 -- Je lui demande son age 
    let age = parseInt(prompt("Bonjour " + prenom + " ! How old are you ?","Saisir votre Age"));
    console.log(age);
    console.log(typeof age);


    //  2.3 -- J"affiche une alert avec son année de naissance
    alert("AMAZING ! So you were born in  " + (AnneeActuelle - age) + " !");

    // 2.4 -- Affichage de ma page HTML
    document.write("Hello " + prenom + " It's Amazing you are " + age + " years old !");
}
// 3 -- Execution de ma fonction
Hello();