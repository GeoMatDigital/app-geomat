This is an App created by students of GeoMat supported by "StarkerStart" of the Geothe University of Frankfurt.
It is built by Ionic 3, debugged by Sentry and documented by Compodoc.

## How to use this template

To get started follow the [ionic instructions](http://ionicframework.com/docs/intro/installation/)

### Prerequisities



```
#cli-packages:
ionic (Ionic CLI) : 3.12.0

#global packages:
cordova (Cordova CLI) : 7.0.1
local packages:

#@ionic/app-scripts : 2.1.4
Cordova Platforms  : browser 4.1.0
Ionic Framework    : ionic-angular 3.6.1

#System:
Node : v8.4.0
npm  : 5.3.0
```

## Sentry - Bug-Tracking
The GeoMat-app uses [Sentry](https://sentry.io) to report bugs.
### Installation
Follow the instructions of [sentry.io/bastian/geomat](https://sentry.io/bastian/geomat/) `=> Account => API` to get started with bug tracker.
Sentry is working by default.

## Compodoc - Documentation
### Installation
This project documentation is run by [compodoc](https://compodoc.github.io/website/)
Installation guide can be found on this [page](https://compodoc.github.io/website/guides/installation.html).

To create the static documentation website, run:
```
npm run compodoc
```
This will store all files needed in the `documentation`-folder. You can watch your documentation on a server on localhost:8080 by running:
```
compodoc -s
```
## Preventing github from storing sensitive data
As an example, store the connection string of [sentry.io](##%20Preventing%20github%20from%20storing%20sensitive%20data) in an external file in `src/environments/data.ts`:
```
export const sentry = {
  url: 'https://{sensitive_connection_string}@sentry.io/{ID}'
};
```
This constant can be imported in the `src/services/sentry-errorhandler.ts` here
```
...
import { sentry } from '../environments/data';

Raven
.config(sentry.url,
{
   ...  
})
.install();
```
Don't forget to add the folders which should be excluded in the `.gitignore`folder. by adding a new line:
```
src/environments
```
You can save other sensitive data analogously.
## BFG - For sensitive data
Let's assume you have uploaded sensitive data to the github repository. It is not done by easily delete the sensitive since it is stored in all related commits aswell.
It can be a pain to search and delete all the data. For this purpose you can use [BFG](https://rtyley.github.io/bfg-repo-cleaner/)

### Installation
In general here you get a good [installation-guide](https://medium.com/@rhoprhh/removing-keys-passwords-and-other-sensitive-data-from-old-github-commits-on-osx-2fb903604a56)
#### Windows

 - Clone a mirror-repository just for bfg-access:
```
$ git clone --mirror git@github.com:GeoMatDigital/app-geomat.git
```
Git will clone just the meta-files within a `app-geomat.git`-folder. Staying where you are, add the bfg.jar file and a passwords.txt here. You can enter all sensitive data, which should be replaced with next command. Each data has to be in a new line (dont add anything to this data.
 
 - Execute the bfg.jar using `java` so bfg is available:
```
$ bfg --replace-text passwords.txt  app-geomat.git
```
Now all commits should be replaced with `**REMOVED**`
 To  update the online reposity just push it:
```
git push 
```
Check the online repository visiting [github.com/GeoMatDigital/app-geomat](https://github.com/GeoMatDigital/app-geomat/commits/development).

In the regular project you can `git pull` to retrieve the new data.

If every thing went well, you can delete the project `app-geomat.git`
## Demo-App
A Demo-App is hosted by [PhysikOnline](https://physikonline.uni-frankfurt.de) at [physikonline.uni-frankfurt.de/geomat/](https://physikonline.uni-frankfurt.de/geomat/)
