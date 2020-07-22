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
          resetReply();
        }
      });
    });

    function resetReply() {
      $scope.reply = {
        id: $scope.post.comments?.length + 1,
        text: "",
      };
    }
    $scope.addReply = function () {
      console.log($scope.reply);
      $scope.post.comments.push($scope.reply);
      resetReply();
    };
    $scope.deleteComment = function (comment) {
      $scope.$apply($scope.post.comments.splice(comment, 1));
    };

    if ($scope.notFound) {
      console.log("Not Found");
      $location.path("/");
    }
  },
});
