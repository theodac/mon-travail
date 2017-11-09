/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

// Declarer son tableau numerique
var matiere = {Francais:19,Mathematique:18,Sciences:18,EPS:16,Anglais:15 }

var PremierTrimestre = [
    
        {
            prenom      : "Theo ",
            nom         : "DA COSTA ",
            note        : {
                              Francais     : 19,
                              Mathematique : 18,
                              Sciences     : 18,
                              EPS          : 15,
                              Anglais      : 17
                              
                          }
        },
        {
            prenom      : "Gauthier ",
            nom         : "BOSSON ",
            note        : {
                              Francais     : 1,
                              Mathematique : 2,
                              Sciences     : 4,
                              EPS          : 3,
                              Anglais      : 0
                              
                          }
        },
        {
            prenom      : "Rodolphe ",
            nom         : "CORDIER ",
            note        : {
                              Francais     : 0,
                              Mathematique : 1,
                              Sciences     : 2,
                              EPS          : 0,
                              Anglais      : 5
                              
                          }
        },
        {
            prenom      : "Hugo ",
            nom         : "RATEL ",
            note        : {
                            
                              Francais     : 12,
                              Mathematique : 12,
                              Sciences     : 15,
                              EPS          : 18,
                              Anglais      : 17
                              
                          }
        },
        {
            prenom      : "Hugo ",
            nom         : "LIEGEARD ",
            note        : {
                              Francais     : 10,
                              Mathematique : 10,
                              Sciences     : 10,
                              EPS          : 10,
                              Anglais      : 10
                              
                          }
        },
    
    ];
    
    // console.log(PremierTrimestre);
    // for(let i = 0 ; i<=4 ; i++){
    //     document.write("<ul><li>" + PremierTrimestre[i].prenom  + PremierTrimestre[i].nom + "</li></ul><hr/><br>")
    // }
// Petite fonction raccourci (les flemmards.js)
function w(t) {
    document.write(t);
}
function l(e){
    console.log(e);
}
w('<ol>');
// Je souhaite afficher la liste de mes étudiants
for(let i = 0 ; i < PremierTrimestre.length ; i++){
    let Etudiant = PremierTrimestre[i];

    // Aperçu dans la console
    l(Etudiant);

    var NombreDeMatiere = 0 , SommeDesNotes = 0 ;

    // Afficher le prenom et le nom d'un Etudiant
    w('<li>');
        w(Etudiant.prenom + "" + Etudiant.nom);
    w('<ul>');
        for(let matiere in Etudiant.note){
            l(matiere);
            l(Etudiant.note[matiere]);

            NombreDeMatiere++;
            SommeDesNotes+=Etudiant.note[matiere];
            w('<li>')
                w(matiere + " : " + Etudiant.note[matiere]);
            w('</li>')

        }
        w('<li>')
            w("<strong>Moyenne Generale :</strong>" + (SommeDesNotes / NombreDeMatiere).toFixed(2));
        w('</li>')
    w('</ul>');  
    w('</li>');
}
w('</ol>');