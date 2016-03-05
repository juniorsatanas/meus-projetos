import '../assets/styl/style.styl';

class CommentController {
    constructor($scope, $commentService) {
        this.$scope = $scope;
        this.$service = $commentService;
        this.showComments();
    }

    init () {
        this.showComments();
    }

    showComments () {
        var url = this.$scope.issue.comments_url;
        this.$service.search(url).success((result) => {
            this.$scope.comments = result;
        }).error((error) => {
            alert('Ocorreu um erro ao processar consulta: ' + (error? error.message: ' Desconhecido'));
        });
    }
}

export default CommentController;
