# Commentaire du test

# Point à améliorer :
    ## Bonne pratique :
    - Créer une fonction spécifique pour lire le fichier serait un plus au lieu d'avoir le code qui s'exécute au lancement du serveur
    - Créer une fonction pour le calcul des statistiques
      - Les fonctions ne doivent pas dépendre du controleur.
    - Sortir les fonctions `getAges`, `getTotalAge`, `findByAge` dans un fichier spécifique.
      - Avantage : couverture du code plus pertinante lors des tests.
    - Typage du retour des fonctions au lieu de typer les variable qui vont contenir les résultats
      - Avantage : Typescript déterminera automatiquement les types des variables et donc on gagnera du temps.
    - Sortir les types Users et User dans un fichier type.d.ts 
      - Avantage : fichier spécifique au type, la porté est par defaut global et ne nécessite pas d'importation

    ## Optimisation possible :
    - Ligne 84, possibilité d'utiliser la fonction map, plus efficace qu'une boucle for

# Point fort :
    - Bonne façon de voir les choses
    - Contrainte respécté
    - Bon choix de librairie pour ne pas réinventé la roue
    - N'utilise pas de librairie inutile
    - Code clair et bien documenté
    - Apprentissage rapide
    - Chercher des solutions sur internet, sinon demander aux autres (en l'occurence, à moi)

