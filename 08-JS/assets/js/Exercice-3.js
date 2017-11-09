/* --
CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification. Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations, vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
        
En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur. 
Vous devrez préciser s'il s'agit d'une erreur au niveau du mail ou du mot de passe.    
-- */

// Déclaration des variables
var db = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Jean-Christophe','nom':'MONPLAISIR','email':'jc.monplaisir@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];

// var mailUser = prompt("Saisissez votre adresse e-mail");
// if(mailUser === db.email) {
    
//     var mdpUser = prompt("votre mot de passe ?", "Saisissez votre Mot de Passe")
//     if (mdpUser === db.mdp){
//         console.log("Bienvenue !" + nom + prenom)

//     }else{
//         alert("Nous n'avons pas reconnu votre mot de passe ")
//     }
// }else {
//     alert("Attention nous n'avons pas reconnu votre adresse email");
// }
function Authentification(){
    for(i = 0 ; i <=4 ; i++){
    let mail = prompt("Saisissez votre e-mail", "Saisir votre adresse e-mail");
    if (mail === db[i].email){
        let password = prompt("Saisissez votre mot de passe","Saisir votre mot de passe");
        if(password === db[i].mdp){
            alert("Bienvenu" + db[i].nom + db[i].prenom);
        }
        else{
            alert("Votre  mot de passe est incorrecte");

        }
    
    }else {
        alert("Votre adresse e-mail est incorrecte");
    }
}
    

}
Authentification();