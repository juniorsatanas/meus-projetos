import template from './template/index.html';

class Issue {
    constructor() {
        this.restrict = 'E';
        this.scope = {repository: '='};
        this.controller = 'GithubIssueController';
        this.controllerAs = 'GitIssueCtrl'
        this.template = template;
    }
}

export default Issue;
