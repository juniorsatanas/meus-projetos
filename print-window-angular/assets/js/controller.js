app.controller('PrintCtrl', function($scope, $rootScope, $window){
    angular.forEach(['red', 'red', 'red', 'red', 'red'], function(value, key) {
        $rootScope.addUser(value);
    });

    angular.forEach(['blue', 'blue', 'blue', 'blue', 'blue'], function(value, key) {
        $rootScope.addUser(value);
    });

    $scope.print = function(){
        var head = angular.element(document.head).clone();
        angular.element(head).find('script').remove();

        var body = angular.element(document.body).clone();
        angular.element(body).find('button').remove();

        var scriptPrint = "<script>window.onload = window.print();</script>";
        var conteudo = "<head>" + angular.element(head).html() + "</head>" +
                       "<body>" + angular.element(body).html() + "</body>" + scriptPrint;
        window.open().document.write(conteudo);
    };
});
