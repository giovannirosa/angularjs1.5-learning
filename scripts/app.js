var myApp = angular.module("app", ["ngRoute"]);
var controllers = {};
controllers.SimpleController = function ($scope) {
  $scope.customers = [
    { name: "John Smith", city: "Phoenix" },
    { name: "John Doe", city: "New York" },
    { name: "Jane Doe", city: "San Francisco" },
  ];

  $scope.addCustomer = function () {
    $scope.customers.push({
      name: $scope.newCustomer.name,
      city: $scope.newCustomer.city,
    });
  };
};

myApp.controller(controllers);
myApp.config(function ($routeProvider) {
  $routeProvider
    .when("/view1", {
      controller: "SimpleController",
      templateUrl: "view1.html",
    })
    .when("/view2", {
      controller: "SimpleController",
      templateUrl: "view2.html",
    })
    .otherwise({ redirectTo: "/view1" });
});
