/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****
II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var m

var PremierTrimestre = [
    
        {
            prenom      : "Hugo",
            nom         : "LIEGEARD",
            notes       : {
                              francais   : 5,
                              anglais    : 13,
                              maths      : 5,
                              physique   : 16,
                              SVT        : 14
                          }
        },
        {
            prenom      : "Théo",
            nom         : "DA COSTA",
            notes       : {
                              francais   : 3,
                              anglais    : 18,
                              maths      : 13,
                              physique   : 16,
                              SVT        : 15
                          }
        },
        {
            prenom      : "Rodolphe",
            nom         : "CORDIER",
            notes       : {
                              francais   : 1,
                              anglais    : 7,
                              maths      : 1,
                              physique   : 8,
                              SVT        : 17
                          }
        },
        {
            prenom      : "Hugo",
            nom         : "RATEL",
            notes       : {
                              francais   : 10,
                              anglais    : 11,
                              maths      : 14,
                              physique   : 8,
                              SVT        : 13
                          }
        },
        {
            prenom      : "Gauthier",
            nom         : "BOSSON",
            notes       : {
                              francais   : 5,
                              anglais    : 13,
                              maths      : 3,
                              physique   : 8,
                              SVT        : 12
                          }
        },
    
    ];

console.log(PremierTrimestre);

/*document.write(PremierTrimestre[0].prenom + " ");
document.write(PremierTrimestre[0].nom + " ");
document.write(PremierTrimestre[0].notes);
*/

for(let i = 0 ; i < 5 ; i++) {
    document.write("<ul><li>" + PremierTrimestre[i].prenom + " " + PremierTrimestre[i].nom + " " + " " + PremierTrimestre[i].notes.francais + "</li></ul><hr>");
}
PremierTrimestre.push(notes)