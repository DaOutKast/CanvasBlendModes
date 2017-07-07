## Introduction 
This document will guide your through the basic setup of Quirk’s Front End toolkit and explain the various gulp plugins + functions. This system is designed to make for lightning fast template development and optimisation.


## Installation 
Before we install Gulp we need to ensure your machine has node.js running:

WIN - http://blog.teamtreehouse.com/install-node-js-npm-windows

OSX - https://nodejs.org/en/download/package-manager/#osx

LIN - https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions

We then need to install Gulp globally using node package manager (npm). Note if you have a previous version please remove it before installing npm.

```
#!javascript



$ sudo npm install --global gulp-cli
```



## Choosing your gulp workflow ##
Existing projects using Compass sass will now use Gulp Compass
Use: gulp--compass 
https://bitbucket.org/quirkagency/tech.fe.boilerplate.gulp-compass

     
Projects going forward will not use Compass. They will use Autoprefixer
Use: gulp--sass 
https://bitbucket.org/quirkagency/tech.fe.boilerplate.gulp-sass

## Getting started ##
After copying the files to your project theme run npm install to download all the node dependency modules. 


```
#!javascript

$ npm install
```



To run gulp. Use:


```
#!javascript

$ gulp watch
```


If you are getting these errors :: 
"ERROR in Node Sass does not yet support your current environment: OS X 64-bit with false" OR "Error: ENOENT: no such file or directory", run:-  
```
#!javascript

$ npm rebuild node-sass
```
Supporting documentation: https://docs.google.com/document/d/142ZvO17Ao37jccn8AQHoJnVVsGb5lQUvHTRrejhJ2qE/edit#