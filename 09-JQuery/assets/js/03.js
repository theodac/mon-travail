/*--------------------------------------
Le chainage de methode avec jQuery
-----------------------------------------*/

$(function() {

    // Je souhaite cacher toute les div de ma page HTML
    console.log($('div'));

    $('div').hide('slow',function(){
        // une fois que la méthode hide() est terminée, mon alerte peut s'exectuer.
        alert('Fin du Hide')

        // NB : la fonction s'executera pour l'ensemble des éléments du sélecteur

        // CSS 
        $('div').css('background','blue');
        $('div').css('color','pink');

        // Je fais réaparraite mes DIV
        $('div').show('slow');


    });
    // En utilisant le chainage de méthode , vous pouvez faire s'enchainer plusieurs fonctions les unes apres les autres ...
    $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);

    // Mais c'est encore trop long
    $('p').hide(1000).css({'color': 'green','font-size':'20px'}).delay(2000).show(500);
});