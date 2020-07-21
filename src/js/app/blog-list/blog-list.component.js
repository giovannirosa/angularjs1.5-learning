"use strict";

angular.module("blogList").component("blogList", {
  templateUrl: "/templates/blog-list.html",
  controller: function (post, $routeParams, $scope) {
    $scope.items = post.query();

    $scope.title = "Hi there";
    $scope.someClick = function () {
      console.log("clicked");
      $scope.title = "Clicked";
    };
  },
});
