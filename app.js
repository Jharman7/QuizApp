var app = angular.module('quizApp',['ui.router']);


app.config(  function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('home',{
    url:'/',
    templateUrl: '/components/home/homeView.html',
    controller: 'homeCtrl',
    resolve: {
      quizList: function (quizService) {
        return quizService.getQuizNames();
      }
    }
  });

})
