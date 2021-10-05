# Procédé de l'exercice
Dans ce fichier, je vais expliquer point par point comment j'ai procédé pour mener le test à bien.

Les difficultés ainsi que les sources seront citées afin d'être le plus clair possible et permettre de retracer correctement la façon dont j'ai mené les tâches.

Il va sans dire qu'avant de plonger dans le test technique, j'ai pris conscience du README. J'ai comblé mes lacunes dans les technos utilisées au fur et à mesure que je rencontrais des difficultés.

Ceci me servira aussi pour plus tard si je rencontre les mêmes problèmes afin de pouvoir les régler plus rapidement.

## Technologies

**TypeScript :**
- [Expérience] Notions
- [Notions] Fortement typé, POO, compilé

**ExpressJS :**
- [Expérience] Aucune
- [Documentation utilisée](https://expressjs.com/fr/starter/basic-routing.html)

**NodeJS :**
- [Expérience] Aucune

**Jest :**
- [Expérience] Aucune
- [Cours suivi](https://youtu.be/8l-5pjZAxEY)

**Pug :**
- [Expérience] Aucune
- [Documentation utilisée](https://pugjs.org/api/getting-started.html)



1. ## Routing (01/10/2021)

- Création des routes avec la fonction fléchée `app.get` présente dans `"/src/app.ts"`:
    - `'\'` = Accueil
    - `'\:age'` = Âge
    - `'\statistics'` = Statistiques

**Difficultés rencontées**
- [Difficulté_1] La route `?age=` renvoie à l'accueil.
    - [Solution] Changement du nom de la route en `:age`
    - [Détails] Cela ne fonctionnait pas car le caractère `?` est utilisé comme masque, permettant de le remplacer par un autre caractère

**Sources**
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
- [ExpressJS documentation](https://expressjs.com/fr/starter/basic-routing.html)


2. ## Importation du JSON (01/10/2021)

- Importation du fichier JSON `/src/users.json`

**Difficultés rencontées**
- [Difficulté_1] Problème d'accès fichier, je faisais `JSON.parse('./resources/users.json')`
    - [Solution] `require('./resources/users.json')`

**Sources**
- [W3Schools](https://www.w3schools.com/js/js_json_parse.asp)
- [Stack Overflow](https://stackoverflow.com/a/45035939)


3. ## Affichage du JSON à l'accueil (01/10/2021) - (04/10/2021)

- Mise en place d'une boucle dans une fonction qui itère sur `const json: object`, ajoutant chaque information dans la variable `let table: string`

*Note (05/10/2021):* La boucle créant une chaine de caractère pour générer du code HTML sera supprimée afin de faire place à la librairie Pug. Beaucoup plus pratique, il faut juste passer en paramètre la variable et dire à Pug d'itérer sur l'élément pour qu'il affiche proprement (voir `home.pug` ou `statistics.pug`)

**Difficultés rencontées**
- [Difficulté_1] Problème d'affichage lorsque je typais la variable stockant le fichier JSON en `Object`, alors que ça fonctionne lorsque je ne type pas (vu que c'est un objet, il doit être typé)
    - [Tentative_1] Transformer l'objet en tableau avec `Object.keys(json)`, n'a pas fonctionné et m'a renvoyé les indices du tableau car `json` est en fait un tableau d'objets. Si c'en était pas un, cela aurait fonctionné (tests effectués dans un objet)
    - [Tentative_2] Création d'une interface `MyType` qui accueillera chaque valeur des propriétés préalablement typées. Puis création de la constante `json` typée `Array<MyType>`. 
    - [Solution] Il fallait créer deux `Types`: un `Users` sous forme de tableau avec un autre Type personnalisé appelé `User`, ce dernier sera un objet avec ses propriétés typées

**Sources**
- [Flexiple](https://flexiple.com/loop-through-object-javascript/)


4. ## Affichage des utilisateurs ayant X âge (03/10/2021)

- Utilisation de la méthode JavaScript `filter()` qui retourne un tableau de valeurs respectant la condition entrée en paramètre

**Sources**
- [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


5. ## Affichage des statistiques par rapport aux âges (04/10/2021)

- Récupération de l'âge de tous les utilisateurs grâce à une boucle stockant chaque âge dans un tableau `ages`
- Stockage dans une variable `ageTotal` la somme des âges, utilisation d'une boucle qui itère sur le tableau `ages` additionnant la valeur de chaque index
- Récupération du plus grand âge ainsi que du plus petit du tableau `ages` grâce aux méthodes `Math.min()` et `Math.max()`
- Calcul de la moyenne à l'aide de la fonction `getTotalAge()` et de la taille du tableau `ages` puis arrondissement du résultat grâce à la méthode `Math.round()`

**Sources**
- [Tutorial Republic](https://www.tutorialrepublic.com/faq/how-to-find-the-max-and-min-values-of-an-array-in-javascript.php)


6. ## Mise en place des pages HTML dans les routes (04/10/2021)

- Création du squelette de chaque page html (home, age et statistics)
- Utilisation du framework Bootstrap
- Utilisation de la librairie Pug afin d'afficher le contenu HTML et les variables présentes dans NodeJS
- Création des fichiers `.pug` :
    - `home.pug` pour les routes: `'\'` et `'\:age'`
    - `statistics.pug` pour la route: `'\statistics'`
- Création d'un dossier `includes` qui regroupera les fichiers qui seront inclus dans les deux fichiers `.pug` cités dans le point précédent.
- Création de deux fichiers dans le dossier `includes`: 
    - `nav.pug` qui est la barre de navigation, elle met en surbrillance la position de l'utilisateur sur le site
    - `head.pug` qui affiche le titre de la page en fonction de la position de l'utilisateur sur le site et qui importe Bootstrap

**Difficultés rencontées**
- [Difficulté_1] Impossibilité de passer des variables à une page HTML depuis NodeJS
    - [Tentative_1] Installation de EJS, difficulté à le faire fonctionner : la page charge à l'infini *désinstallation*
    - [Tentative_2] Installation de Nunjucks, plusieurs tentatives pour régler l'erreur `template not found` alors que le chemin pointe bien vers le chemin des templates 
    - [Solution] Installation de la librairie Pug.

**Sources**
- [Code for Geek](https://codeforgeek.com/render-html-file-expressjs/)
- [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
- [Pug](https://pugjs.org/api/getting-started.html)


7. ## Génération d'un fichier JSON pour les tests unitaires (04/10/2021)

- Utilisation d'un site web pour me générer aléatoirement un fichier JSON
- Création d'un fichier json vide

**Sources**
- [ExtendsClass](https://extendsclass.com/json-generator.html)


8. ## Exportation et importation des fonctions pour les tests unitaires avec Jest (05/10/2021)

- Utilisation des fonctions suivantes:
    - `getAges`, `getTotalAge`, `findByAge` 

**Difficultés rencontées**
- [Difficulté_1] Difficulté à exporter mes fonctions de `app.ts` dans `beginner-test.test.ts`
    - [Solution] Passage des fonctions dans le scope global au lieu de les stocker dans leur route respective
    - [Détails] C'était un problème de scope, les fonctions ne voulaient pas s'exporter si elles étaient dans les routes.

**Sources**
[codeconcept](https://youtu.be/8l-5pjZAxEY)


9. ## Exécution du Linter (05/10/2021)

**Difficultés rencontées**
- [Difficulté_1] Le linter renvoyait l'erreur suivante : `[error] No files matching the pattern were found: "'src/**/*.{js,jsx,ts,tsx,css,scss}'".`
    - [Solution] Supprimer les simples quotes autour du pattern a réglé le problème.


10. ## Rédaction de la documentation (05/10/2021)

**Sources**
- [ExtendsClass](https://openclassrooms.com/fr/courses/6398056-ecrivez-la-documentation-technique-de-votre-projet/)
