// alert ("WOW ! Tu es sur ma page");

// Deux slash pour faire un commentaire uniligne 

/*
    Ici je peux faire un commentaire 
    sur plusieur lignes ...
    Raccourci : Commentaire inline : CTRL + /
                Commentaire plusieur ligne : CTRL + SHIFT + /
*/


// -- 1 : Déclarer une variable JS
var Prenom ;

// -- 2 : Affecter une valeur 
 Prenom = "Theo";

 // -- 3 : Afficher la valeur de ma variable dans la console .
 console.log(Prenom);

 /* -----------------------------------
 |          TYPES DE VARIABLES         |
 |                                     |
----------------------------------------*/

// -- Ici , typeof me permet de connaitre le type de ma variable
console.log (typeof Prenom);

// -- Déclaration et Affectation d'une valeur a une  variable
var Age = 20;

// -- Afficher dans la console 
console.log(Age);

// -- Verifier son type 
console.log(typeof Age);

  /*-----------------------------------------------------------
                   ~La Portee des variables ~ 

    Les variables déclarées directement a la racine du fichier 
    sont appelées variables "globales". 
    Elles sont disponible dans l'ensemble de votre documents 
    y compris dans les fonctions/boucles .

    La portée des variables globales s'arrete au fichier . 
    Si je change de page, les variables n'existe plus !

    Les variables déclarées a l'interieur d'une fonction 
    sont appelées variables "locales".

    Elles sont disponible uniquement a l'interieur 
    de celle-ci (fonction).

    ----------------------------------------------------------*/

// -- Les variables FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (VRAI/FAUX)
var unBooleen = false; //-- truc (1/0)
console.log(unBooleen);
console.log(typeof unBooleen);

  /*-----------------------------------------------------------
                   ~LES CONSTANTES ~ 

    La déclaration CONST permet de crée une constante accessible 
    uniquement en lecture.
    
    Sa valeur ne pourra pas etre modifiée par des réaffectations
    ultérieures.

    Une constante ne peut pas etre déclarée a nouveau

    Généralement par convention les constantes sont en MAJUSCULES.


    ----------------------------------------------------------*/

const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

// -- Je ne peux pas faire sa ...
// USER = "Theo";
//  Uncaught TypeError : Assignment to constant variable

/*-----------------------------------------------------------
                   ~La minute info ~ 

    Au fur et a mesure que l'on affecte ou ré-affecte 
    des valeurs a une variable, celle-ci 
    prend la nouvelle valeur et le nouveau type ! 

    En Javascripts (ECMA Script), les variables sont auto-typées.

    Pour convertir une variable de type NUMBER en STRING 
    et STRING en NUMBER je peux utiliser les fonctions natives
    de javascript.


---------------------------------------------------------------*/
var unNombre = "20";
console.log(unNombre);
console.log(typeof unNombre);

/* La fonction parseInt() pour retourner un Entier a partir d'une chaine de caractere */


unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Je ré-affecte une valeur a ma variable
unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

/* La fonction parseFloat permet de retourner un Float à partir d'une chaine de caractere */

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

//  -- Conversion d'un Nombre en String avec toString()
var unNombreQuiDevientString = 10 ;
console.log(unNombreQuiDevientString.toString());
console.log(unNombreQuiDevientString);