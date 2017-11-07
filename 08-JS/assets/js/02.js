//  -- Déclarer un Tableau Numerique 
var monTableau = [];
var myArray    = new Array;

//  -- Affecter des valeurs a un tableau numerique
monTableau[0] = "Hugo";
monTableau[1] = "Theo";
monTableau[2] = "Lou";

// -- Afficher le contenu de mon tableau dans la console . 
console.log(monTableau[0]); // -- Hugo
console.log(monTableau[1]); //-- Theo
console.log(monTableau); //-- Affiche toutes les données 

// -- Déclarer et Affecter des valeurs à un tableau Numerique
var NosPrenoms = ["Emilie","Hocine","Terry","Benjamin","Hugo"];
console.log(NosPrenoms);
console.log(typeof NosPrenoms);

// Déclarer et Affecter des Valeurs a un objet .
// (Pas de Tableau Associatif en JS)

var Coordonnee = {
    prenom : "Hugo",
    nom    : "LIEGEARD",
    age    : 27
};

console.log(Coordonnee);
console.log(typeof Coordonnee);

//  Je vais créer 2 taleaux numérique 
var listeDesPrenoms = ["Hugo","Rodrigue","Benjamin"];
var listeDesNoms    = ["LIEGEARD","NOUEL","JOURAND"];

//  Je vais créer un tableau a 2 dimensions a partir de mes 2 tableaux précedents
var Annuaire = [listeDesPrenoms, listeDesNoms];
console.log(Annuaire);

//  Afficher sur ma page le Nom et Prénom de Rodrigue .
// document.write(Annuaire[0][1]);
// document.write(" ");
// document.write(Annuaire[1][1]);

/* ---------------------------------------------------
                    Exercice : 

     Créez un Tableau a 2 dimensions appelé 
     "AnnuaireDesStagiares" qui contiendra 
     toutes les coordonnées pour chaque stagiarie.

     Ex : Nom , Prénom , Tel 
---------------------------------------------------------*/
// var listeDesNoms    = ["LIEGEARD ","DA COSTA","BOSSON","CORDIER"];
// var listeDesPrenoms = ["Hugo ","Theo","Gauthier","Rodolphe"];
// var listeDesNumeros = ["0601020304" ,"0602030405","0603040506","0604050607"];

// // var AnnuaireDesStagiares        = [listeDesNoms,listeDesPrenoms,listeDesNumeros];
// // console.log(AnnuaireDesStagiares);

// // document.write(AnnuaireDesStagiares [1][0]);
// // document.write(" ");
// // document.write(AnnuaireDesStagiares [0][0]);
// // document.write(" ");
// // document.write(AnnuaireDesStagiares [2][0]);
// // document.write(" ");

// // document.write(AnnuaireDesStagiares[0][1]);
// // document.write(" ");
// // document.write(AnnuaireDesStagiares[1][1]);
// // document.write(" ");
// // document.write(AnnuaireDesStagiares[2][1]);
// // document.write(" ");

// // document.write(AnnuaireDesStagiares[1][2]);
// // document.write(" ");
// // document.write(AnnuaireDesStagiares[0][2]);
// // document.write(" ");
// // document.write(AnnuaireDesStagiares[2][2]);
// // document.write(" ");

// // document.write(AnnuaireDesStagiares[1][3]);
// // document.write(" ");
// // document.write(AnnuaireDesStagiares[0][3]);
// // document.write(" ");
// // document.write(AnnuaireDesStagiares[2][3]);
// // document.write(" ");

// Correction : 😂👾👾

var AnnuaireDesStagiares = [
    {prenom: "Hugo", nom : "LIEGEARD", tel : "XXXX XX XX XX"},
    {prenom: "Benjamin", nom : "JOURAND", tel : "XXXX XX XX XX"},
    {prenom: "Hocine", nom : "ALILI", tel : "XXXX XX XX XX"},
];

console.log(AnnuaireDesStagiares);
console.log(AnnuaireDesStagiares[0]['prenom']);
console.log(AnnuaireDesStagiares[1].prenom);
console.log(AnnuaireDesStagiares[2].prenom);



/* ----------------------------------------------------------------
👾👾👾👾👾👾👾👽 👾 Ajouter un ELEMENT👾👽 👾👾👾👾👾👾👾👾
------------------------------------------------------------------*/

var Couleur = ["Rouge","Jaune","Vert"];

// Si je souhaite ajouter un élément dans mon tableau 
// Je fait appel a la fonction push() qui me renvoi le nombre d'elements de mon tableau.

console.log(Couleur);
var nombreElementsDeMonTableau = Couleur.push("Orange");
console.log(Couleur);
console.log(nombreElementsDeMonTableau);

// NB : La fonction unshift() permet d'ajouter un ou plusieur elements en debut de tableau

/* ----------------------------------------------------------------
👾👾👾👽👾 Recuperer et sortir le dernier element👾👽👾👾👾
------------------------------------------------------------------*/

// La fonction pop() me permet de supprimer le dernier element de mon tableau et d'en recuperer la valeur .

var monDernierElement  = Couleur.pop();
console.log(monDernierElement);
console.log(Couleur);

// La meme chose est possible avec le premier élément ...
// en utilisant la fonction shift();

// NB : la fonction splice() vous permet de faire sortir un ou plusieurs éléments de votre tableau.