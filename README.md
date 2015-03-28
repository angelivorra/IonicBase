This is an addon starter template for the [Ionic Framework](http://ionicframework.com/).

## How to use this template

*This template does not work on its own*. It is missing the Ionic library, and AngularJS.

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

### With the Ionic tool:

Take the name after `ionic-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myApp https://github.com/angelivorra/IonicBase
$ bower install ngCordova
```

Optional, install highcharts

```bash
$ bower install highcharts-release
$ bower install highcharts-ng
```

Then, to run it, cd into `myApp` and run:

```bash
$ ionic platform add android
$ ionic build android
$ ionic emulate android
```
