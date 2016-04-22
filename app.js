// app.js
var app = angular.module('flapperNews', ['ui.router'])
                  .config([
                  '$stateProvider',
                  '$urlRouterProvider',
                  function($stateProvider, $urlRouterProvider) {

                    $stateProvider
                      .state('home', {
                        url: '/home',
                        templateUrl: '/home.html',
                        controller: 'MainCtrl'
                      });
                      // .state('posts', {
                      //   url: '/posts/{id}',
                      //   templateUrl: '/posts.html',
                      //   controller: 'PostsCtrl'
                      // });

                    $urlRouterProvider.otherwise('home');
                  }]);


// Create a service
app.factory('postFactory', [function(){
  var o = {posts:[{title: 'post 1', upvotes: 5}, {title: 'post 2', upvotes: 2},  {title: 'post 3', upvotes: 15},
                  {title: 'post 4', upvotes: 9},{title: 'post 5', upvotes: 4}]
          };
  return o;
}]);

// app.controller('PostsCtrl', [
//   '$scope',
//   '$stateParams',
//   'posts',
//   function($scope, $stateParams, posts){

//   }
// ]);

app.controller('MainCtrl', [
  '$scope',
  'postFactory',
  function($scope, postFactory){
    $scope.posts = postFactory.posts;
    $scope.incrementUpvotes = function(post) { post.upvotes += 1; };
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0,
          comments: [
            {author: 'Joe', body: 'Cool post!', upvotes: 0},
            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
          ]
        });
      $scope.title = '';
      $scope.link = '';
    };
}]);
