# E-Briefing Mobile App

[Ionic](https://ionicframework.com/framework) based mobile client for the [E-Briefing Service](https://github.com/cds-snc/e-briefing-service).

## Heads up!

This project is still early in development and some of the processes involved in running, installing, and loading data into the app are meant to be temporary work-arounds until a more full-featured service could be built out.

For instance, data must be manually downloaded from the service and loaded into the app before compiling it and installing it on a device.  (See also the note below about [loading the app onto a device](loading-the-app-onto-a-device))

Additionally, only one briefing can be loaded on a device at a time, meaning that if you want to load a new briefing onto the device, you will have to recompile the app and load it onto the device again.

## Running the app

### Prerequisites

Install `ionic` and `cordova` globally

```bash
$ npm install -g ionic cordova
```

### Installing a Trip

A Trip is made up of a collection of .json files and documents extracted from the E-Briefing Service.

After cloning this repository, you will need to generate and download a Trip content package from the E-Briefing
Service, then extract and install the Trip files in www/data.

The data folder should have the following structure:

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

The `trip.json` contains a reference to the Trip on the server.  

Once the Trip has been loaded onto the device, the Trip that was loaded can be updated with over-the-air syncing.

### Compile for ios:

```bash
$ ionic cordova platform add ios
$ ionic cordova build ios
```

### ...or run in local web server:

```bash
$ ionic serve
```

## Loading the app onto a device

Currently we are using ad-hoc deployment for iOS devices.  This involves having direct access to the device as the 
device has to be registered with an Apple Developer Account.  Then the trip package is loaded into the data directory, 
 the app is compiled, signed, and packaged in XCode, and copied directly to the device.

## Cross-platform

Since the client is built with Ionic, the app could technically be deployed to a variety of devices including Blackberry,
Android, iOS, and Windows devices.  It could even be run as a Web Application and accessed through a browser.
