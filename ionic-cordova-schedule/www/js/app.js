angular.module('AppCommitted', ['ionic', 'jett.ionic.filter.bar'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider.state('init', {
        url: '/',
        templateUrl: '../template/home.html'
    })

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: '../template/home.html'
    })

    $stateProvider.state('item', {
        url: '/item',
        templateUrl: '../template/item.html'
    })

    $stateProvider.state('edit', {
        url: '/item/:index',
        templateUrl: '../template/item.html'
    })
})
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
