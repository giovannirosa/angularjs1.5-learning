"use strict";

angular.module("app").config(function ($locationProvider, $routeProvider) {
  $locationProvider.html5Mode({ enabled: true });
  $routeProvider
    .when("/", {
      template: "<blog-list />",
    })
    .when("/about", {
      templateUrl: "/templates/about.html",
    })
    .when("/blog/:id", {
      template: "<blog-detail />",
    })
    .otherwise({
      template: "Not Found",
    });
});
