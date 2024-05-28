
# Carambar Jokes Frontend

Bienvenue dans le frontend de l'application Carambar Jokes ! Cette application web permet de visualiser, ajouter, rechercher et obtenir des blagues aléatoires via une interface utilisateur conviviale.

## Déploiement

L'application frontend est déployée sur GitHub Pages. Vous pouvez accéder à l'application via le lien suivant : [Carambar Jokes Frontend](https://tmnpierre.github.io/CarambarFrontend/)

L'API backend est déployée sur Render. Vous pouvez accéder à l'API et à sa documentation via les liens suivants :

- **API Carambar Jokes** : [https://carambarbackend.onrender.com](https://carambarbackend.onrender.com)
- **Documentation Swagger de l'API** : [https://carambarbackend.onrender.com/api-docs](https://carambarbackend.onrender.com/api-docs)
- **Repo GitHub de l'API** : [https://github.com/tmnpierre/CarambarBackend](https://github.com/tmnpierre/CarambarBackend)

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Un serveur HTTP simple comme `http-server` pour servir les fichiers statiques.

## Installation

Suivez ces étapes pour installer et exécuter l'application frontend localement :

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/votre-utilisateur/CarambarFrontend.git
    cd CarambarFrontend
    ```

2. Installez `http-server` globalement si ce n'est pas déjà fait :
    ```sh
    npm install -g http-server
    ```

3. Lancez le serveur HTTP :
    ```sh
    http-server
    ```

4. Ouvrez votre navigateur et accédez à l'URL suivante :
    ```
    http://localhost:8080
    ```

## Structure du projet

Le projet est organisé de la manière suivante :

```
CarambarFrontend/
├── index.html
├── jokes-list.html
├── add-joke.html
├── search-joke.html
├── random-joke.html
├── styles.css
└── scripts.js
```

### index.html

Page d'accueil avec des liens de navigation vers les différentes fonctionnalités de l'application.

### jokes-list.html

Page pour afficher la liste des blagues.

### add-joke.html

Page pour ajouter une nouvelle blague.

### search-joke.html

Page pour rechercher une blague par ID.

### random-joke.html

Page pour obtenir une blague aléatoire.

### styles.css

Feuille de styles pour la mise en forme de l'application.

### scripts.js

Fichier JavaScript contenant les fonctions pour interagir avec l'API et gérer les actions de l'utilisateur.

## Utilisation

### Afficher la liste des blagues

Accédez à la page `jokes-list.html` pour afficher toutes les blagues disponibles.

### Ajouter une nouvelle blague

Accédez à la page `add-joke.html` et remplissez le formulaire pour ajouter une nouvelle blague.

### Rechercher une blague par ID

Accédez à la page `search-joke.html` et saisissez l'ID de la blague à rechercher.

### Obtenir une blague aléatoire

Accédez à la page `random-joke.html` et cliquez sur le bouton pour obtenir une blague aléatoire.

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une issue ou une pull request pour toute amélioration ou fonctionnalité.

## Licence

Ce projet a été réalisé dans le cadre éducatif et est libre de droit. Vous pouvez utiliser, modifier et distribuer ce projet sans restriction.

---

Profitez de vos blagues Carambar ! 😄
