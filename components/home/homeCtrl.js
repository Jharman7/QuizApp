var app = angular.module('quizApp');
app.controller('homeCtrl', function ($scope, quizList) {
  console.log(pastQuizList);
  $scope.quizzes = quizList;
})
