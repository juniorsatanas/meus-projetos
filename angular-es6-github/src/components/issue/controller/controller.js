import '../assets/styl/style.styl';

class GithubIssueController {

    constructor ($scope, $issueService) {
        this.$service = $issueService;
        this.$scope = $scope;
        this.init();
    }

    init () {
        this.$scope.$on('open-issue', () => {
            this.showIssues();
        });
    }

    showIssues () {
        if(!this.$scope.issues || this.$scope.issues.length == 0) {
            var url = this.$scope.repository.issues_url;
            this.$service.search(url.substring(0, url.indexOf('{/number}'))).success((result) => {
                this.$scope.issues = result;
            }).error((error) => {
                alert('Ocorreu um erro ao processar consulta: ' + (error? error.message: ' Desconhecido'));
            });
        }
    }
}

export default GithubIssueController;
