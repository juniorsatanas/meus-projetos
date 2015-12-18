angular.module('AppCommitted').filter('dateCustom', date);

function date($filter) {
    return function(input) {
        console.log(input);

        if(!input) return '';
        var output = $filter('date')(input, 'dd/MM/yyyy');
        return output;
    }
};
