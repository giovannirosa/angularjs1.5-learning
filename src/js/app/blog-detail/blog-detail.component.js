"use strict";

angular.module("blogDetail").component("blogDetail", {
  templateUrl: "/templates/blog-detail.html",
  controller: function (post, $http, $location, $routeParams, $scope) {
    post.query(function (data) {
      $scope.notFound = true;
      angular.forEach(data, function (post) {
        if (post.id.toString() === $routeParams.id) {
          $scope.notFound = false;
          $scope.post = post;
        }
      });
    });

    if ($scope.notFound) {
      console.log("Not Found");
      $location.path("/");
    }
  },
});
