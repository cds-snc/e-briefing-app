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

Data on the device is loaded over the API on first run (and optionally updated through sync any time after).

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