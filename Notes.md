L'architecture RESTful est un modele d'architecture de developpement de services Web.

**REST** : (Representational State Transfer)
definit un standard et des contraintes tels que :

- l'utilisation d'URI pour identifier les ressources
- l'utilisation de methodes HTTP (GET, POST, PUT, DELETE, etc...) pour effectuer des operations sur ces ressources
- la representation des ressources au format JSON ou XML

Les APIs (Application programming interface) sont des 'interfaces' qui permettent a des applications de communiquer entre elles. On s'en sert notamment afin d'echanger des donnees

Voici un exemple de JSON qui represente un etudiant ISITECH :

```JSON
{
    "lastname": "DJEBLI",
    "firstname": "Ayoub",
    "age": 19,
    "address": {
        "rue": "2 rue de la paix",
        "ville": "Paris",
        "pays": "France"
    },
    "phoneNumbers": [
        {
            "type": "mobile",
            "num": "0836656565"
        },
        {
            "type": "fixe",
            "num": "3630"
        }
    ]
}
```

endpoint : point d'entree unique vers une ressource, il est constitue d'un verbe qui designe une methode htpp et d'une url (uri).

Les codes http :

- 2XX: tout s'est bien passe (200: OK, 201: Created)
- 3XX: Redirection
- 4XX: Erreur due au client (404: Not found, )
- 5XX: Erreur due au serveur

Pour chaque ressource vous devez mettre en place un CRUD:

- Create:
- Read:
- Update:
- Delete: (soft delete)

Les grands principes REST.
