var TableauDePrenom = ["Hugo","Romain","Clement","Joffrey","Helene","Mathieu","Lou","Emilie","Rodolphe","Etienne"]

console.log(TableauDePrenom);
console.log(TableauDePrenom.length);
console.log(TableauDePrenom[8]);
console.log(TableauDePrenom[2]);
console.log(TableauDePrenom[5]);

// Pour récupéré une valeur dans un tableau numérique j'utilise son indice

var i = 2 ;
console.log(TableauDePrenom[i]);

for (i = 0 ; i< TableauDePrenom.length ; i++){
    document.write(i +" " +TableauDePrenom[i] +  "<br/>")
}

// Comment proceder avec des objets

var contact = {
  //L'INDICE:Valeur
    prenom:"Terry",
    nom   :"Bacon",
    tel   : "0123456789"
}
console.log(contact);
console.log(contact.prenom +" " + contact.nom +" "+ contact.tel);

// Tableau étudiant
var Etudiants = [
    {
        prenom:"Terry",
        nom   :"Bacon",
        classe:"Programmation"
    },
    {
        prenom:"Etienne",
        nom   :"Dit-Jesus",
        classe:"Maternelle"
    },
    {
        prenom:"Hugo",
        nom   :"Liegeard",
        classe:"The Warrior Master"
    }
]
console.log(Etudiants)

var NombreEtudiant = Etudiants.length;

console.log("Le nombre d'etudiant est : " + NombreEtudiant)
document.write("<ol>")
for(i=0 ; i<NombreEtudiant ; i++){
    let eleves= Etudiants[i];
    
    document.write("<li>")
    document.write(eleves.prenom +" "+ eleves.nom +" "+ eleves.classe)
    document.write("</li>")
}
document.write("</ol>")