# Node-Notes-App

A note taking application using the command line. This project was used to get to know the basics of Node and use ES6 syntax
to build a basic note taking application.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisite

NodeJs installed on your machine

### Installing

Clone the repo
```
git clone https://github.com/mauriceLC92/Node-Notes-App.git
cd Node-Notes-App
npm i
node app.js
```

## Usage:
* Add a new note
```sh
node app.js add --t="<note title>" --b="<note body>"
```

* Read a note
```sh
node app.js read --t="<note title>"
```

* List all notes
```sh
node app.js list
```

* Remove a note
```sh
node app.js remove --title="<note title>"
```

* Get help commands
```sh
node app.js --help
```

## Built With

* [NodeJs](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.

## Author:

* **Maurice Le Cordier**
