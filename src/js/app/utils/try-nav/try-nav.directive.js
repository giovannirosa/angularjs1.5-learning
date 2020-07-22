"use strict";

angular.module("tryNav").directive("tryNav", function (post, $location) {
  return {
    restrict: "E",
    templateUrl: "/templates/nav.html",
    link: function (scope, element, attr) {
      scope.items = post.query();
      scope.selectItem = function ($item, $model, $label) {
        $location.path("/blog/" + $item.id);
        scope.searchQuery = "";
      };
      scope.searchItem = function () {
        $location.path("/blog/").search("q", scope.searchQuery);
        scope.searchQuery = "";
      };
    },
  };
});
