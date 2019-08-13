(function () {
'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
$scope.Check = function () {
  var message = CheckLunch($scope.ListItem);
  $scope.output = message;
  }
};

function CheckLunch(list) {
  var message = "Please enter data first";
  if(!list) {
    return message;
  } else {
      var items = list.split(",");
      if (items.length<=3) {
        message = "Enjoy!";
      } else {
        message = "Too much!";
      }
    }
  return message;
}
})();
