## gestion-recette-api-express

Ceci est l'API backend pour l'application de gestion de recettes, développée avec Express.js. Elle fournit une interface RESTful pour gérer les recettes, permettant de créer, lire, mettre à jour et supprimer des recettes dans une base de données. L'API est conçue pour être consommée par le frontend afin de gérer les opérations sur les recettes.

## Prérequis

- Node.js (version 18 ou supérieure)
- MySQL (version 8 ou supérieure)
- Docker (version 20 ou supérieure)

## Mise en place du projet

## Prérequis

- Node.js (version 18 ou supérieure)
- MySQL (version 8 ou supérieure)
- Docker (version 20 ou supérieure)

Pour configurer le projet, suivez ces étapes :

1. Cloner le dépôt :

```bash
   git clone https://github.com/FatimataAliouSall/gestion-recette-api-express.git
   cd gestion-recette-api-express
```

2. Installer les dépendances :

```bash
   npm install
```

3. Démarrer le serveur :

```bash
  npm start
```

4. Créez un fichier .env à la racine du projet et configurez les variables d'environnement pour la connexion à la base de données :

```bash
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your-password
    DB_NAME=recipes_management
    PORT=3000
```

L'API sera accessible à l'adresse http://localhost:3000.

## Endpoints de l'API

1. Créer une recette

- Méthode : POST
- Endpoint : /api/recipes
- Description : Ajoute une nouvelle recette dans la base de données.

2. Obtenir toutes les recettes

- Méthode : GET
- Endpoint : /api/recipes
- Description : Récupère toutes les recettes de la base de données.

3. Obtenir une recette par ID

- Méthode : GET
- Endpoint : /api/recipes/:id
- Description : Récupère une recette par son ID.

4. Mettre à jour une recette

- Méthode : PUT
- Endpoint : /api/recipes/edit/:id
- Description : Met à jour une recette par son ID.

5. Supprimer une recette.

- Méthode : DELETE
- Endpoint : /api/recipes/delete/:id
- Description : Supprime une recette par son ID.

## Conteneurisation et déploiement.

1. Construire l'image Docker :

```bash
  docker build -t votre-nom-utilisateur/nom_image-management-recipe .
```

2. Tag l'image docker :

```bash
  docker tag <image-id> votre-nom-utilisateur/nom_image-management-recipe
```

3. Tag l'image docker :

```bash
  docker tag <image-id> votre-nom-utilisateur/nom_image-management-recipe
```

4. Déployer l'image sur Docker Hub :

```bash
  docker push votre-nom-utilisateur/nom_image-management-recipe
```

5. Démarrer l'application conteneurisée avec Docker Compose :

```bash
  docker-compose up -d
```

## Tests

Les tests unitaires sont écrits avec Jasmine. Pour les exécuter, utilisez la commande :

```bash
  npm test
```

## Configuration de la base de données

La connexion à la base de données est configurée manuellement sans utiliser d'ORM. Pour configurer la base de données, créez une base MySQL nommée gestion_recettes, puis modifiez les informations de connexion tellesques DB_HOST, DB_USER, DB_PASS, DB_NAME dans le fichier ./env .

## Auteurs

- **[Fatimata Aliou Sall](https://github.com/fatimata-sall)** - Développeuse Full Stack
- **[Mohamed Soumare](https://github.com/MohamedSoumare)** - Développeur Full Stack
