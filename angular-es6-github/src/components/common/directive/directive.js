class NgEnter {
    link($scope, $element, $attrs) {
            $element.bind('keydown keypress', (event) => {
            var isEnter = event.which === 13;
            if(isEnter) {
                $scope.$apply(function (){
                    $scope.$eval($attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    }
}

export default NgEnter;
