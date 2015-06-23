app.controller("GoogleMapsCustomController", function($scope) {
	$scope.map = { center: { latitude: -23.586172, longitude: -46.657085 }, zoom: 10};
	$scope.map.randomMarkers = [];
	var adressOfCustomer = [
	                         ["BAZAR BARAO LTDA ME", "AV.JOAO XXIII,84-V.FORMOSA, SP"],                                          
	                         ["MAGAZINE BELEZA CENTER LTDA", "AV DOS IGARAPES, 1571, SP"],                                                
	                         ["ESTACIONAMENTO CARREIRA LTDA ME", "AV.SAPOPEMBA,3016 SAPOPEMBA, SP"],                                          
	                         ["LUIS GONZAGA GARDINALI ME", "R.FREI CANECA,22 - CENTRO, SP"],                                             
	                         ["A R NETTO", "R.ANTONIO GONCALVES TEIXEIRA, 53, SP"],                                     
	                         ["O DONEGA MOJI MIRIM ", "R.BUTANTA, 17-PINHEIROS, SP"],                                               
	                         ["MAGAZINE MISS ELEGAN LTDA", "R GOVERNADOR PEDRO DE TOLEDO 1021, SP"],                                   
	                         ["O.Y.OKI & CIA.LTDA ", "R.JOSE BONIFACIO,60, SP"]
	                     ];
	 
	$scope.setMarkers = function(numberOfMarkers) {
		setLatitudeAndLongitudeByAdress(adressOfCustomer, $scope.map);
	};
	
	$scope.onMarkerClicked = function(marker){
		marker.showWindow = true;
		$scope.$apply();
	};
});

app.controller("InfoController", function($scope) {
	$scope.templateValue = 'hello from the template itself';
	$scope.clickedButtonInWindow = function() {
		var msg = 'clicked a window in the template!';
		$log.info(msg);
		alert(msg);
	}
});

function setLatitudeAndLongitudeByAdress(adressOfCustomer, map){
    var geocoder = new google.maps.Geocoder();

    angular.forEach(adressOfCustomer, function(value, key) {
        var adress = value[1];
        geocoder.geocode({ 'address': adress + ', Brasil', 'region': 'BR' }, function (results, status) {
            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            var customer = value[0];
			var itemMap = {
				latitude : latitude,
				longitude : longitude,
				title : customer,
				id : key,
				adress : adress,
				date : "10/11/2015"
			};
            map.randomMarkers.push(itemMap);
        });
    });
}

function init(){
    
    var adressOfCustomer = [
        ["BAZAR BARAO LTDA ME", "AV.JOAO XXIII,84-V.FORMOSA, SP"],                                          
        ["MAGAZINE BELEZA CENTER LTDA", "AV DOS IGARAPES, 1571, SP"],                                                
        ["ESTACIONAMENTO CARREIRA LTDA ME", "AV.SAPOPEMBA,3016 SAPOPEMBA, SP"],                                          
        ["LUIS GONZAGA GARDINALI ME", "R.FREI CANECA,22 - CENTRO, SP"],                                             
        ["A R NETTO", "R.ANTONIO GONCALVES TEIXEIRA, 53, SP"],                                     
        ["O DONEGA MOJI MIRIM ", "R.BUTANTA, 17-PINHEIROS, SP"],                                               
        ["MAGAZINE MISS ELEGAN LTDA", "R GOVERNADOR PEDRO DE TOLEDO 1021, SP"],                                   
        ["O.Y.OKI & CIA.LTDA ", "R.JOSE BONIFACIO,60, SP"]
    ];

    var locationOfCustomer = getLatitudeAndLongitudeByAdress(adressOfCustomer);
    initializeMaps(locationOfCustomer);
}