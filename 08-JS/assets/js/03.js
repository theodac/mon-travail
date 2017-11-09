/* -----------------------------------------------
👻👻👻👻👻👻👻La CONCATENATION👻👻👻👻👻👻👻
---------------------------------------------------*/
 var debutDePhrase       =   "Aujourd'hui ";
 var dateDuJour          =   new Date();
 var suiteDePhrase       =   ", sont présents : ";
 var nombreDeStagiares   =   21;
var finDePhrase          =   "stagiares.<br>";

// Nous souhaitons maintenant , grace a la concatenation,
// afficher tout ce petit monde, en un seul morceau !

document.write(debutDePhrase + dateDuJour.getDate() + "/" + (dateDuJour.getMonth() +1) + "/" + 
dateDuJour.getFullYear() + suiteDePhrase + nombreDeStagiares + finDePhrase);

//  MEMO 
// https://stackoverflow.com/questions/15799514/why-does-javascript-getmonth-count-from-0-and-getdate-count-from-1 


/* -----------------------------------------------
👻👻👻👻👻👻👻Exercice👻👻👻👻👻👻👻👻👻👻
Créez une concatenation a partir des elements suivant :
---------------------------------------------------*/
var phrase1 = "Je m'appelle ";
var phrase2 = "Theo et j'ai ";
var age = 20 ;
var phrase3 ="ans ! ";

document.write(phrase1 + phrase2 + age + phrase3);