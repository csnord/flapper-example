##Flapper

https://thinkster.io/angular-rails

This version is the first chapter: Jumping in with Angular
Simply display data using **ngRepeat**, and showing how to filter results. Changed the CDN to have "https" at front.

We have declared **$scope.posts** as local vars, within in the controller. This is ok for a quick start to test, but needs to change to a real world system. Not good for automated testing & production.

###1 - Jumping in with Angular
Created two files
####File: index.html
* has script tag to get AngularJS from google
* has script tag to include our very own app.js file
* uses: ngApp, ngController, ngRepeat, and ngClick.

####File: app.js
* set up a module with a controller
* controller has
* has scope, var=posts, var=test, and function=addPost

###2 - Getting User Input
Added a link field, as well as reflecting user input in the list.
####File: index.html
* added ngClick to increment votes
* added a new field "link"

####File: app.js
* Added function on controller: incrementUpvotes
* Added capability to add a new title, as well as a link

###3 - Adding Some Style
Added bootstrap from a CDN. Styled up the index.html code with bootstrap.

###4 - Angular Services
Added a factory/service. Was getting:

I had not used **var app = angular.module('flapperNews', []);** but had overwritten things by using:
* angular.module('flapperNews', []).controller ... which should now be app.controller ...
* angular.module('flapperNews', []).factory ... which should now be app.factory ...

###5 - Angular Routing & Posts
Lots here, got excited and combined two "chapters"! We..
* Added ui-router - so we can have multiple views and controllers. It is an external module, so its a dependency.
* Added a config() - because we have added 'ui.router'.
* Added state with $stateProvider and $urlRouterProvider.
* Used **otherwise()** to redirect unspecified routes to "home.html"
* Inlined home template:  type="text/ng-template" id="/home.html"
* Inlined posts template: type="text/ng-template" id="/posts.html"
* Template code appears in ui-view tag.
* We can add comments.
