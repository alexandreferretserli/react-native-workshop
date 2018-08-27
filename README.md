# React Native Workshop

Ce workshop permet de découvrir [React Native](https://facebook.github.io/react-native/) par la pratique, étape par étape.

## Sommaire

- [Le principe de l'application](#le-principe-de-lapplication)
- [Les pré-requis techniques](#les-pré-requis-techniques)
- [Pré-installer les dépendances](#pré-installer-les-dépendances)
- [Les étapes du workshop](#les-étapes-du-workshop)
- [C'est parti !](#cest-parti-)

## Le principe de l'application

Dans ce workshop, nous allons développer une application mobile permettant de consulter une liste de films.

Les principales fonctionnalités de l'application sont :

- Lister les films actuellement à l'affiche / les plus populaires du moment / les mieux notés
- Afficher le détail d'un film avec sa description et son casting

Nous allons utiliser la base de données [THE MOVIE DB](https://www.themoviedb.org/) qui nous permettra d'avoir une base de films conséquente.

## Les pré-requis techniques

Les pré-requis techniques sont les suivants :

- Homebrew
- Git
- Node
- Watchman
- React Native CLI
- Create React Native App
- Yarn
- Un éditeur de texte : Atom / Visual Studio Code / IntelliJ ...
- Xcode
- Android Studio

#### Homebrew

Homebrew est un gestionnaire de paquets pour Mac, la marche à suivre pour l'installer est disponible sur le site officiel : [https://brew.sh/](https://brew.sh/)

### Git

- **Avec Homebrew :**

    ``` 
    $ brew install git
    ```

- **Sans Homebrew :**

    Téléchargez et installez la version de Git correspondante à votre système d'exploitation, en suivant les indications disponibles sur le site officiel : [https://git-scm.com/](https://git-scm.com/downloads)

### Node

- **Avec Homebrew :**

    ``` 
    $ brew install node
    ```

- **Sans Homebrew :**

    Téléchargez et installez la version de Node.js correspondant à votre système d'exploitation, en suivant les indications disponibles sur le site officiel : [https://nodejs.org/](https://nodejs.org/en/download/)

### Watchman

- **Avec Homebrew :**

    ``` 
    $ brew install watchman
    ```

- **Sans Homebrew :**

    Téléchargez et installez la version de Watchman correspondant à votre système d'exploitation, en suivant les indications disponibles sur le site officiel : [https://facebook.github.io/watchman/](https://facebook.github.io/watchman/docs/install.html)

### Yarn

- **Avec Homebrew :**

    ``` 
    $ brew install yarn
    ```

- **Sans Homebrew :**

    Téléchargez et installez la version de Yarn correspondant à votre système d'exploitation, en suivant les indications disponibles sur le site officiel : [https://yarnpkg.com/](https://yarnpkg.com/en/docs/install)

### React Native CLI

``` 
$ yarn global add react-native-cli
```

### Create React Native App

```
$ yarn global add create-react-native-app
```

### Éditeur de texte / IDE

Choisissez l'éditeur de texte / IDE qui vous convient le mieux parmis ceux qui gère le javascript. 

Par exemple :

- Atom : [https://atom.io/](https://atom.io/)
- Visual Studio Code : [https://code.visualstudio.com/](https://code.visualstudio.com/)
- IntelliJ : [https://www.jetbrains.com/idea/](https://www.jetbrains.com/idea/download/)
- WebStorm : [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/)

### Xcode

Xcode est installable depuis le Mac App Store présent sur votre Mac.

Vous pouvez l'installer directement depuis [ici](https://itunes.apple.com/fr/app/xcode/id497799835?mt=12).

### Android Studio

Android Studio est l'IDE officiel pour développer des applications Android. Vous pouvez le télécharger [ici](https://developer.android.com/studio/).

Pour le configurer ainsi qu'un émulateur Android, vous pouvez suivre [la documentation officielle de React Native](https://facebook.github.io/react-native/docs/getting-started.html)

## Pré-installer les dépendances

Pour pré-installer les dépendances à l'avance, vous pouvez lancer le script ```install.sh``` qui lancera les commandes yarn install dans les différentes étapes du workshop.

## Les étapes du workshop

- Étape 1
    - Liste des films à l'afiche
    - Application du style sur la liste
- Étape 2
    - Navigation vers l'écran de détail d'un film
    - Ajout d'une animation
- Étape 3
    - Navigation pour Android
    - Navigation pour iOS
- Étape 4
    - Éjection de l'application
    - Ajout de la librairie react-native-onesignal
    - Ajout de notifications pour Android
- Étape 5
    - Création d'un apk
    - Création d'un ipa

## C'est parti !

C'est le moment de commencer ! La première étape dispose d'un projet déjà créé mais si vous souhaitez savoir comment partir de zéro, il suffit d'exécuter ceci :

```
$ create-react-native-app nom-de-mon-app
$ cd nom-de-mon-app
```

Le dossier qui vient d'être créé contient tout ce qu'il faut pour commencer à développer votre application.
