class GithubController {
    constructor($scope, $repositoryService) {
        this.$service = $repositoryService;
        this.$scope = $scope;
        this.init();
    }

    find () {
        this.$service.search(this.$scope.filter).success((result) => {
            this.$scope.repository = result.items;
        }).error((error) => {
            alert('Ocorreu um erro ao processar consulta: ' + (error? error.message: ' Desconhecido'));
        });
    }

    init () {
        this.$scope.filter = "java";
        this.find();
    }
}

export default GithubController;
