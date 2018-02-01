# E-Briefing Mobile App

[Ionic](https://ionicframework.com/framework) based mobile client for the [E-Briefing Service](https://github.com/cds-snc/e-briefing-service).

## Heads up!

This project is still early in development and some of the processes involved in running, installing, and loading data 
into the app are meant to be temporary work-arounds until more of this functionality can be fleshed out.

For instance, for local development, data must be manually downloaded from the service and loaded into the app before 
running it with `ionic serve`.

To install on a device, a `trip_id` must be obtained from the service and set in a global config file before compiling, 
and this can't be changed without recompiling.

Only one briefing can be loaded on a device at a time, meaning that if you want to load a new briefing onto the device, 
you will have to recompile the app with the new `trip_id` and load it onto the device again.

There are also some challenges [loading the app onto a device](#installing-on-a-device), which requires an
Apple Developer Account, a Mac computer, Xcode, and some expertise in this area.  (These requirements will vary for
other devices of course)

These issues and more are outlined in a TODO file in the 
[E-Briefing Service Repository](https://github.com/cds-snc/e-briefing-service).

## Getting started

You will need to have the [E-Briefing Service](https://github.com/cds-snc/e-briefing-service) running on a server that
is accessible from the internet.

### Prerequisites

Install `ionic` and `cordova` globally

```bash
$ npm install -g ionic cordova
```

You must also generate and download a Trip Package from the service to install for local development.

## Local Development

### Installing a Trip

A Trip is made up of a collection of .json files and documents extracted from the E-Briefing Service.

After cloning this repository, you will need to generate and download a Trip content package from the E-Briefing
Service, then extract and install the Trip files into `www/data`.

The `www/data` folder should have the following structure:

```
- data
  - articles
    - #.json (one for each Article)
  - assets
    - documents
      - [UUID].pdf (one for each Document)
  - days
    - #.json (one for each Day of the Itinerary)
  - documents
    - #.json (one for each Document)
  - events
    - #.json (one for each Event)
  - people
    - #.json (one for each Person)
  - articles.json
  - days.json
  - documents.json
  - people.json
  - trip.json
```  

### Run in local web server:

```bash
$ ionic serve
```

## Running on device or in emulator

Data on the device is downloaded from the API on first run (and optionally updated through sync any time after).

Before compiling to run on a device or in an emulator, you must configure the following properties in the 
GlobalsProvider (`src/app/providers/globals`):

- `api_key`: to be obtained from the `users` table in the service database
- `api_url`: the base api url for the service
- `trip_id`: the `trip_id` for the briefing to be loaded onto the device

### Compile for ios:

```bash
$ ionic cordova platform add ios
$ ionic build
$ ionic cordova build ios
```

On first run, you will be taken to the Sync screen.  Press the `sync` button, and data will be loaded to the device.

## Installing on a device

Currently we are using ad-hoc deployment for iOS devices.  This involves having direct access to the device as the 
device has to be registered with an Apple Developer Account, and connected to the computer.  The `trip_id` is set 
in globals, the app is compiled, signed, and packaged in XCode, and copied directly to the device.

### Cross-platform

Since the client is built with Ionic, the app can be deployed to a variety of devices including Blackberry,
Android, iOS, and Windows devices.  It could even be run as a Web Application and accessed through a browser.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on how you can pitch in, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details

-------------------------------------------------------------------

# Application de breffage électronique 

Client mobile basé sur [Ionic](https://ionicframework.com/framework) pour le [service de breffage électronique](https://github.com/cds-snc/e-briefing-service#service-de-breffage-%C3%A9lectronique).

## Aperçu

Ce projet en est toujours aux premières étapes d’élaboration et certains des processus concernant le fonctionnement, l’installation et le téléchargement de données dans l’application sont des solutions temporaires jusqu’à ce que davantage de fonctions puissent être élaborées.

Par exemple, pour l’élaboration locale, les données doivent être téléchargées manuellement à partir du service et téléchargées dans l’application avant de faire fonctionner cette dernière du service Ionic.

Pour l’installer sur un appareil, il faut obtenir un trip_id lié au service et le mettre en place dans un fichier de configuration global avant de compiler et il est impossible de faire des modifications sans devoir faire une recompilation.

Il est possible de télécharger un seul breffage à la fois, ce qui signifie que si vous désirez télécharger un autre breffage sur l’appareil, vous devrez recompiler l’application à l’aide du nouveau trip_id et la télécharger de nouveau sur l’appareil.

Il y a également quelques difficultés [pour télécharger l’application sur un appareil](#installation-sur-un-appareil), ce qui nécessite un compte de développeurs Apple, un ordinateur Mac, XCode et une certaine expertise dans ce domaine. (Bien entendu, ces exigences varieront pour d’autres appareils)

Ces enjeux, et bien d’autres, sont décrits dans un fichier TODO qui se trouve dans le [répertoire Service breffage électronique](https://github.com/cds-snc/e-briefing-service#service-de-breffage-%C3%A9lectronique).

## Pour commencer

Vous devrez faire fonctionner le programme [Service breffage électronique](https://github.com/cds-snc/e-briefing-service#service-de-breffage-%C3%A9lectronique) sur un serveur qui est accessible par Internet.

### Exigences préalables

Installez Ionic et Cordova globalement.

```bash
$ npm install -g ionic cordova
```

Vous devez également générer et télécharger un Trip Package du service pour l’élaboration locale.

## Élaboration locale

### Installation d’un Trip

Un Trip est constitué d’une collection de fichiers .json et de documents extraits du service de breffage électronique.

Après avoir cloné ce répertoire, vous devrez générer et télécharger un progiciel Trip du service de breffage électronique, puis extraire et installer les fichiers Trip dans `www/data`.

Le fichier `www/data` devrait contenir les structures suivantes :

```
- data
  - articles
    - #.json (un par article)
  - assets
    - documents
      - [UUID].pdf (un par document)
  - days
    - #.json (un pour chaque jour de l’itinéraire)
  - documents
    - #.json (un par document)
  - events
    - #.json (un par événement)
  - people
    - #.json (un par personne)
  - articles.json
  - days.json
  - documents.json
  - people.json
  - trip.json
```  


### Faire fonctionner dans le serveur Web local :

```bash
$ ionic serve
```

### Faire fonctionner sur un appareil ou dans un émulateur

Les données sur l’appareil sont téléchargées à partir de l’API lors de la première utilisation (et, en option, en les téléchargeant par synchronisation pour les fois suivantes).

Avant de compiler l’application pour s'en servir sur un appareil ou dans un émulateur, vous devez configurer les propriétés suivantes en GlobalsProvider (`src/app/providers/globals`) :

- `api_key`: à obtenir dans la tablette `users`, dans la base de données du service
- `api_url`: l’url de l’API de la base pour le service
- `trip_id`: le `trip_id` pour la séance de breffage à télécharger dans l’appareil

### Compiler pour ios :

```bash
$ ionic cordova platform add ios
$ ionic build
$ ionic cordova build ios
```

À la première utilisation, vous vous retrouverez à l’écran Sync (synchronisation). Appuyez sur le bouton `sync` (synchroniser) et les données seront téléchargées sur l’appareil.

## Installation sur un appareil

Actuellement, nous utilisons une mise en place ponctuelle pour les appareils iOS. Cela comprend avoir un accès direct à l’appareil puisque ce dernier doit être enregistré et posséder un compte de développeurs Apple, en plus d’être branché à l’ordinateur. Le `trip_id` est mis en place globalement, l’application est compilée, inscrite et incorporée dans XCode, et elle est copiée directement sur l’appareil.

### Multiplateforme

Puisque l’application client est développée avec Ionic, l’application peut être déployée sur une variété d’appareils, y compris les appareils Blackberry, Android, iOS et Windows. Elle peut même fonctionner comme une application Web et nous pouvons y avoir accès à l’aide d’un navigateur.

## Contribution

Veuillez lire le document [CONTRIBUTING.md](CONTRIBUTING.md) pour obtenir des renseignements sur la façon dont vous pouvez contribuer ainsi que sur le processus pour présenter des demandes de déchargement.

## Licence

Ce projet utilise la licence MIT – consultez le fichier [LICENSE.txt](LICENSE.txt) pour obtenir de plus amples renseignements.
