class IssueService {
    constructor($http) {
        this.$http = $http;
    }

    search (urlIssue){
        return this.$http.get(urlIssue);
    }
}

export default IssueService;
