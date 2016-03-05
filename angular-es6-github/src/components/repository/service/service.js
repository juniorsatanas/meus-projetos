class RepositoryService {
    constructor($http) {
        this.$http = $http;
    }

    search (query) {
        return this.$http.get('https://api.github.com/search/repositories?q=' + query + '&sort=stars&order=desc');
    }
}

export default RepositoryService;
