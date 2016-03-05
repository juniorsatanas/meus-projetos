import template from './template/index.html';

class Repository {
    constructor() {
        this.restrict = 'E';
        this.scope = {item: '='};
        this.controller = 'GithubRepositoryController';
        this.controllerAs = 'GitRepotCtrl'
        this.template = template;
    }

    link($scope, $el, $attr) {
        $el.find('i').on('click', function(event){
            $scope.$broadcast('open-issue');
        });
    }
}

export default Repository;
