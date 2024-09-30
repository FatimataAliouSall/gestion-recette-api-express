## Gestion des recettes

Ceci est l'API backend pour l'application de gestion de recettes, développée avec Express.js. Elle fournit une interface RESTful pour gérer les recettes, permettant de créer, lire, mettre à jour et supprimer des recettes dans une base de données. L'API est conçue pour être consommée par le frontend afin de gérer les opérations sur les recettes.

## Prérequis

- Node.js (version 18 ou supérieure)
- MySQL (version 8 ou supérieure)
- Postman (pour tester l'API)
- Docker (version 20 ou supérieure)

## Installation

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

4. Créez une copie du fichier `.env.example` puis renommer le fichier en `.env` à la racine du projet et mettez vos information pour configuration de la connexion à la base de données et docker compose :

```bash
    DB_HOST=localhost
    DB_USER=
    DB_PASSWORD=
    DB_NAME=recipes_management_old
    PORT=3090
    DB_PORT=3306
    MYSQL_DATABASE=recipes_management_old
    MYSQL_ROOT_PASSWORD=
```

L'API sera accessible à l'adresse http://localhost:3090

## Endpoints de l'API

1. Obtenir toutes les recettes

- Méthode : GET
- Endpoint : /api/recipes
- Description : Récupère toutes les recettes de la base de données.
- Réponse:

```bash
 {
        "id": 1,
        "title": "Salade ",
        "ingredient": "Laitue, Poulet, Parmesan, Croutons, Sauce César",
        "type": "entrée",
        "description": "Une salade légère et rafraîchissante avec du poulet grillé, du parmesan et des croûtons croustillants, servie avec une sauce César classique."

  }
```

2. Créer une recette

- Méthode : POST
- Endpoint : /api/recipes
- Description : Ajoute une nouvelle recette dans la base de données.
- Corps de la requette :

```bash
  {
   "title": "Salade  datte",
  "ingredient": "Lait, Poulet, Parmesan, Croutons, Sucre",
  "type": "dessert",
  "description": "Une salade populaire à base de poulet, parmesan, et sauce crémeuse."

}
```

- Réponse :

```bash
{
    "message": "Recette créée avec succès"
}

```

3. Mettre à jour une recette

- Méthode : PUT
- Endpoint : /api/recipes/edit/:id
- Description : Met à jour une recette par son ID.
- Corps :

```bash
{
        "title": "Salade ",
        "ingredient": "Laitue, Poulet, Parmesan, Croutons, Sauce César",
        "type": "entrée",
        "description": "Une salade légère et rafraîchissante avec du poulet grillé, du parmesan et des croûtons croustillants, servie avec une sauce César classique."
 }

```

- Réponse :

```bash
{
    "message": "Recette mise à jour avec succès"
}
```

5. Supprimer une recette.

- Méthode : DELETE
- Endpoint : /api/recipes/delete/:id
- Description : Supprime une recette par son ID.
  -Réponse :

```bash
{
    "message": "Recette supprimée avec succès"
}

```

## Tests

Les tests unitaires sont écrits avec Jasmine. Pour les exécuter, utilisez la commande :

```bash
  npm test
```

## Analyse et formatage de code

Ce projet utilise **ESLint** pour le linting du code et **Prettier** pour le formatage. Cela permet de garantir que le code respecte des normes de qualité et de style cohérentes.

- Eslint

```bash
npm run lint:fix
```

- Prettier

```bash
npm run format
```

## Conteneurisation et déploiement.

1. Construire l'image Docker :

```bash
  docker build -t votre-nom-utilisateur/nom_image-management-recipe .
```

2. Tag l'image docker :

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

## Auteurs

- **[Fatimata Aliou Sall](https://github.com/fatimata-sall)** - Développeuse Full Stack
- **[Mohamed Soumare](https://github.com/MohamedSoumare)** - Développeur Full Stack
