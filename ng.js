var app = angular.module("toDoList", []);
app.controller("things", function($scope){
  $scope.things = ['study angular!', 'better aquainted with javascript!', 'look for jobs', 'network!', 'attend some meetups', 'do not stress!', 'have fun!'];

  $scope.add = function(){
    $scope.things.push($scope.thingsToDo);
    $scope.thingsToDo = "" ;
  };

  // write a function that do not refresh the page and/or keeps list items checked when clicked on.




});
