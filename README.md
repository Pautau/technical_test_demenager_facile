# Test pour développeur junior

## Sujet

Voici le détail du test technique.
Vous devez développer une série de test unitaires et l'application serveur qui répond au besoin décrit ci-dessous.

Le fonctionnement de l'application est le suivant :  

- Lire le fichier JSON présent dans le dépot
- Créer une route principale ('/') affichera toute la liste dans un tableau HTML
- Créer une seconde route ('/:age' ou '/?age=') affichera la liste filtré par l'age fournis en paramètre dans un tableau HTML
- Créer une troisième route ('/statistics') affichera l'age minimum et maximum, la moyenne des ages et la somme des ages dans un tableau HTML

Les tests unitaire devront valider le bon fonctionnement des traitements effectués dans les routes précédemment cités.

De plus, il faudra que les tests unitaires utilisent un fichier JSON complètement différent, rempli par vos soins mais respectant la structure du fichier fournis.

Pensez à bien prendre en compte que l'application et les tests doivent fonctionner si le fichier en entrée est vide.

Facultatif :

- Vous pouvez styliser l'affichage HTML avec du CSS
- Mettre en place un entete pour les pages HTML pour pouvoir appeler les routes plus facilement

## Contraintes

- Vous devrez élaborer votre code de manière fonctionnel et non en programmation orientée objets
- Toutes les variables dont le type n'est pas un scalaire doivent être typé.
- Le type `any` est interdit
- Tous les fichiers doivent avoir l'extension .TS (spécifique Typescript)

Merci de rendre le développement dans le dépot github de votre choix.  
Votre travail doit comprendre également une documentation permettant à l'équipe de déménager facile de tester rapidement votre code.  

Les critères d'évaluations sont :  

- La lisibilité (indentation, commentaires, nomenclature)  
- La maintenabilité (tests unitaires, découpage fonctionnel) du code.  

Une structure de base, contenant les dépendances nécessaires est fournis dans le dépot.

## Dépendance

- Node
- NPM ou Yarn

Pour installer les dépendances:

```sh
npm install
```

## Commandes disponible

Utilisation de `nodemon` pour que le serveur se recharge automatiquement en cas de changement pendant le développement.

```shell script
npm run start
```

Lancement des tests unitaires :

```shell script
npm run test
```

Lancement du linter pour formater le code :

```shell script
npm run format
```

## Documentation

- ExpressJS: <https://expressjs.com/fr/starter/basic-routing.html>
- La programmation fonctionnelle : <https://buzut.net/programmation-fonctionnelle-en-javascript/>
- Typescript : <https://www.typescriptlang.org/docs/handbook/2/basic-types.html>
