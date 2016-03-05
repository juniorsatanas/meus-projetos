import template from './template/index.html';

class Comment {
    constructor() {
        this.restrict = 'E';
        this.scope = {issue: '='};
        this.controller = 'GithubCommentController';
        this.controllerAs = 'GitCmtCtrl';
        this.template = template;
    }
}

export default Comment;
