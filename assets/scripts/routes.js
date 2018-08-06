angular.module('app.routes', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
		// Login Page
        .state("login", {
            url: "/login",
            templateUrl: 'assets/scripts/templates/login.html',
            controller: 'loginController'
        })
		.state("signup", {
            url: "/signup",
            templateUrl: 'assets/scripts/templates/signup.html',
            controller: 'signupController'
        })
		// Authenticated
        .state("auth", {
            abstract: true,
            // this state url
            url: "",
            templateUrl: 'assets/scripts/templates/authenticated.html'
        })	
        .state('auth.main', {
            url: '/main',
            templateUrl: 'assets/scripts/templates/main.html',
            controller: 'mainController'
        })
        .state('auth.updater', {
            url: '/updater',
            templateUrl: 'assets/scripts/templates/updater.html',
            controller: 'updateController'
        })
        /* .state('auth.signup', {
            url: '/signup',
            templateUrl: 'assets/scripts/templates/signup.html',
            controller: 'signupController'
        }) */

    $urlRouterProvider.otherwise('/login')
}]);
