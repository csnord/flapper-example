// app.js
var app = angular.module('flapperNews', []);

// Create a service
app.factory('postFactory', [function(){
  var o = {posts:[{title: 'post 1', upvotes: 5}, {title: 'post 2', upvotes: 2},  {title: 'post 3', upvotes: 15},
                  {title: 'post 4', upvotes: 9},{title: 'post 5', upvotes: 44}]
          };
  return o;
}]);

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
          upvotes: 0
        });
      $scope.title = '';
      $scope.link = '';
    };
}]);
