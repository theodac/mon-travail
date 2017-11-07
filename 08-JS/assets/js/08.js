/*--------------------------------------------
💀💀💀💀💀💀Les Conditions 💀💀💀💀💀💀💀
----------------------------------------------*/
var MajoriteLegaleFR = 18;

if (20 >= MajoriteLegaleFR) {
    alert("Bienvenue !");

} else {
    alert("Google...");
}

/* -------------------------------
          EXERCICE 
Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
S'il a la majorité légale, alors je lui souhaite la bienvenue, 
sinon, je fait une redirection sur Google après lui avoir signalé le soucis.
-------------------------------- */
// Initialisation de mes variable 

// // Ouverture de ma fonction
// function Limite() {
//     // Demande l'age a l'utilisateur
//     let age = parseInt(prompt("Quel est votre age ? ", "Saississer votre age..." ));
//     console.log(age);
//     // Si il a plus de 18 ans lui souhaite la bienvenu
//     if (age >=MajoriteLegaleFR){
//         alert("Bienvenu !");
//     } 
//     // Si il a moin de 18 ans le redirige vers google
//     else {
//         alert("Google");
    
//         document.location.href="https://google.fr"
//     }


// }
// Limite();

// Correction
// 1 
// var MajoriteLegaleFR = 18;

// function verifierAge() {
//     // // Methode 1
//     // let age = prompt("Bonjour, Quel age avez-vous ?" ,"Saisissez votre message");
//     // age = parseInt(age);
//     // return age
//     // Methode 2 
//     return parseInt(prompt("Bonjour, Quel age avez-vous ?","Saisissez votre age "));
// }

// // 3 -- Une condition pour verifier si l'age de l'utilisateur est supérieur a la MajoriteLegaleFR

// if (verifierAge() >= MajoriteLegaleFR) {
//     // 3.1 -- J'affiche un message de bienvenue
//     alert("Bienvenu sur mon site internet pour les majeurs...");

// } else {
//     // 3.2 -- J'effectue une redirection
//     document.location.href = "http://google.fr"
// }
/*--------------------------------------------
👑👑👑👑Les Operateur de Comparaison👑👑👑👑 
l'operateur de comparaison "==" signifie : Egal a 
Il permet de verifier que 2 variables sont identiques

L'operateur de comparaison "===" signifie : strictement 
egale a . Il va compare la valeur et le type de données .

L'operateur de comparaison "!=" signifie different de 

L'operateur de comparaison "!==" signifie strictement 
different de
----------------------------------------------*/


/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

// Cree une fonction pour demander les informations utilisateurs
function Authentification(){
    let mail = prompt("Saisissez votre e-mail", "Saisir votre adresse e-mail");
    if (mail === email){
        let password = prompt("Saisissez votre mot de passe","Saisir votre mot de passe");
        if(password === mdp){
            alert("Bienvenu");
        }
        else{
            alert("mauvais mot de passe");

        }
    
    }else {
        alert("Mauvais email");
    }
    

}
Authentification();

// Correction
// 1 Demander son Email a l'utilisateur
var emailUser = prompt("Bonjour quel est votre email")

// 2 Je verifie si l'email saisie (emailUser) correspond a celui en BDD (email)

if(emailUser === email) {
    // 2.1 Tous est ok je continu la verification avec le mot de passe
    // 2.1.1 Je demande a mon utilisateur son MDP
    var mdpUser = prompt("votre mot de passe ?", "Saisissez votre Mot de Passe")
    if (mdpUser === mdp){
        alert("Bienvenue !")

    }else{
        alert("Nous n'avons pas reconnu votre mot de passe ")
    }
}else {
    // 2.2 Sinon les email ne correspondent pas, je lance une Alert
    alert("Attention nous n'avons pas reconnu votre adresse email");
}
// -- EXEMPLE AVEC LES FONCTIONS

/**
 * Vérifie si mon utilisateur est présent en BDD
 */
function monUtilisateurEstCorrect(emailUser,mdpUser) {
    if(emailUser === email && mdpUser === mdp) {
        return true;
    }
    else {
        return false;
    }
}

var emailUser = prompt("Bonjour, Quel et votre email", "<Saisissez votre Email>");

var mdpUser = prompt("votre mot de passe ?", "<Saisissez votre Mot de Passe>");

if(monUtilisateurEstCorrect(emailUser, mdpUser)) {
    alert("Bienvenue " + emailUser);
} else {
    alert("ATTENTION, email/mot de passe incorrect");
}

/* -----------------------------------------------------------
Les Operateur de Logiques
------------------------------------------------------------*/
// L'operateur ET : && ou AND
// Si la combinaison emailUser et email correspond Et la combinaisont mdpUser et mdp correspond.

// Dans cette condition , les 2 doivent OBLIGATOIREMENT correspondre pour etre validée.
if (emailUser === email && mdpUser === mdp){. . .}

// L'operateur Ou : ||ou OR
// Si la combinaison emailUser et email Ou la combinaison mdpUser et mdp correspond 

// Ici dans cette condition au moin l'une des deux dois correspondre pour etre validée.
if (emailUser === email || mdpUser === mdp){. . .}

// L'operateur "!" : qui signifie le CONTAIRE DE .... ou encore NOT
var monUtilisateurEstApprouve = true ;
if(!monUtilisateurEstApprouve) {. . .} // -- Si l'utlisateur n'est pas prouvé

// Revien egalement a ecrire 
if(monUtilisateurEstApprouve == false){. . .}
