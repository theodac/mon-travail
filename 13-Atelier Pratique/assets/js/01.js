function validateEmail(email){
	var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	var valid = emailReg.test(email);

	if(!valid) {
        return false;
    } else {
    	return true;
    }
}
function reinitialisationFormulaire (){
    $('#contact').get(0).reset();
}
$(function(){
    
    $('#contact').on('submit', function(e) {
        
        // -- Arreter la redirection HTML5
        e.preventDefault();

        // -- Supprimer les différentes erreurs.
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();
        $('#contact .alert-danger').remove();

        // -- Déclarer les variables à vérifier
        var nom     = $('#nom');
        var msg     =$('#msg')
        var email   = $('#email');
        var tel     = $('#tel');
        var sujet   =$('#sujet')

        // -- Vérification de chaque champ...

            // -- 1. Vérification du Nom
            if(nom.val().length == 0) {
                nom.parent().addClass('has-error');
                $('<p class="text-danger">N\'oubliez pas de saisir votre nom.</p>').appendTo(nom.parent());
            } else {
                nom.parent().addClass('has-success');
            }

           

            
            if(!validateEmail(email.val())) {
                email.parent().addClass('has-error');
                $('<p class="text-danger">Vérifiez votre adresse email.</p>').appendTo(email.parent());
            } else {
                email.parent().addClass('has-success');
            }

            
            if(tel.val().length == 0) {
                tel.parent().addClass('has-error');
                $('<p class="text-danger">Vérifiez votre numéro de téléphone.</p>').appendTo(tel.parent());
            } else {
                tel.parent().addClass('has-success');
            }
            // Verification sujet
            if(sujet.val().length == 0) {
                sujet.parent().addClass('has-error');
                $('<p class="text-danger">Vérifiez votre numéro de sujet.</p>').appendTo(sujet.parent());
            } else {
                msg.parent().addClass('has-success');
            }
            // Verification message
            if(msg.val().length > 280) {
                msg.parent().addClass('has-error');
                $('<p class="text-danger">Vérifiez la longueur de votre message</p>').appendTo(msg.parent());
            } else {
                msg.parent().addClass('has-success');
            }
            
            $('.btn btn-primary').click(reinitialisationFormulaire());


});
});
