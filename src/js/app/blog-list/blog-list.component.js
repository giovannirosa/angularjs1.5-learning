"use strict";

angular.module("blogList").component("blogList", {
  templateUrl: "/templates/blog-list.html",
  controller: function ($scope) {
    var blogItems = [
      {
        title: "Some Title",
        id: 1,
        description: "This is a book",
        publishDate: "2016-09-11",
      },
      { title: "Title", id: 2, description: "This is a book" },
      { title: "Tea", id: 3, description: "This is a book" },
      { title: "Lite", id: 4, description: "This is a book" },
    ];
    $scope.items = blogItems;

    $scope.title = "Hi there";
    $scope.someClick = function () {
      console.log("clicked");
      $scope.title = "Clicked";
    };
  },
});
