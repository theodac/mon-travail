SELECT T_ADHERENTS.nom,T_MESSAGES.message
FROM T_ADHERENTS,T_MESSAGES
WHERE T_ADHERENTS.id=T_MESSAGES.id_adherent
AND T_ADHERENTS.nom = 'Machin';


SELECT T_ADHERENTS.nom,T_MESSAGES.texte
FROM T_ADHERENTS
LEFT JOIN T_MESSAGES ON T_ADHERENTS.id=T_MESSAGES.id_adherent
WHERE T_ADHERENTS.nom = 'Michel';

SELECT T_CATEGORIES.CATLIBELLE,T_ARTICLES.ID_ARTICLE
FROM T_CATEGORIES,T_ARTICLES
LEFT JOIN T_ARTICLES ON T_CATEGORIES.ID_CATEGORIE=T_ARTICLE.ID_CATEGORIE
WHERE T_CATEGORIES.ID_CATEGORIE=T_ARTICLES.ID_ARTICLE