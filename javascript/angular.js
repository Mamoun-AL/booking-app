
var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
  $scope.count = 1;
  $scope.v1 = 10;
  $scope.v2 =  40;
  $scope.order_show = false;
  $scope.dispcur = false;
  $scope.d1 = true;
  $scope.d2 = false;
  $scope.d3 = false;
  $scope.count1 = 1;
  $scope.count2 = 0;
  $scope.amet_show = false;
  
  $scope.increment = function () {
    if ($scope.count >= 1 && $scope.count < 9) {
      $scope.count++;
    }
  };
  $scope.dispcurfun = function () {
    $scope.dispcur = !$scope.dispcur;

  };
  $scope.disporder = function () {
    $scope.order_show = !$scope.order_show;

  };

  $scope.amefun = function () {
      $scope.amet_show  = !$scope.amet_show;
  
    };

  $scope.minus = function () {
    if ($scope.count > 1) {
      $scope.count--;
    }
  };
  $scope.increment1 = function () {
    if ($scope.count1 >= 1 && $scope.count1 < 9) {
      $scope.count1++;
    }
  };
  $scope.minus1 = function () {
    if ($scope.count1 > 1) {
      $scope.count1--;
    }
  };
  $scope.increment2 = function () {
    if ($scope.count2 >= 0 && $scope.count2 < 9) {
      $scope.count2++;
    }
  };
  $scope.minus2 = function () {
    if ($scope.count2 > 0) {
      $scope.count2--;
    }
  };
  $scope.m1fun = function () {
    $scope.d1 = true;
    $scope.d2 = false;
    $scope.d3 = false;
  };
  $scope.m2fun = function () {
    $scope.d1 = false;
    $scope.d2 = true;
    $scope.d3 = false;
    angular.element("#places").addClass("selected");
  };
  $scope.m3fun = function () {
    $scope.d1 = false;
    $scope.d2 = false;
    $scope.d3 = true;
  };
});
