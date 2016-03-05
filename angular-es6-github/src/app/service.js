class LoadingUtils {
    constructor ($q, $rootScope, $log) {
        this.$q = $q;
        this.$rootScope = $rootScope;
        this.$log = $log;
        return this.init();
    }

    init () {

        this.xhrCreations = 0;
        this.xhrResolutions = 0;

        this.updateStatus = () => {
            this.$rootScope.loading = (this.xhrResolutions < this.xhrCreations);
        }

        var self = this;
        return {
            request: (config) => {
                self.xhrCreations++;
                self.updateStatus();
                return config;
            },
            requestError: (rejection) => {
                self.xhrResolutions++;
                self.updateStatus();
                this.$log.error('Request error:', rejection);
                return this.$q.reject(rejection);
            },
            response: (response) => {
                self.xhrResolutions++;
                self.updateStatus();
                return response;
            },
            responseError: (rejection) => {
                self.xhrResolutions++;
                self.updateStatus();
                this.$log.error('Response error:', rejection);
                return this.$q.reject(rejection);
            }
        };
    }
}

export default LoadingUtils;
