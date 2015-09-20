AppScrollTbody.directive("scrolltbody", [function () {
    return {
    	restrict : "A",
		replace : false,
        compile : function (element, attrs) {
        	angular.element(document).ready(function(){
	        	var wTable = angular.element(element).attr("widthscroll");
	        	var th = angular.element(element).find("th");
	        	var tr = angular.element(element).find("tr");
	        	
	        	angular.forEach(th, function (itemTh, indexTh){
	                var wElement = angular.element(itemTh).attr("widthscroll");
	                var wElementCalc = (wElement * wTable) / 100;
	                angular.forEach(tr, function (itemTr, indexTr){
	                	if(indexTr > 0) angular.element(itemTr).find("td").eq(indexTh).css("width", wElementCalc);
	                });
	        	});
        	});
        }
    };
}]);
