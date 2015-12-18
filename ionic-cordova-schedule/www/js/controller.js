angular.module('AppCommitted').controller('ItemController', ['$serviceCommitted', '$stateParams', ItemController]);
angular.module('AppCommitted').controller('HomeController', ['$serviceCommitted', '$ionicFilterBar', HomeController]);

function HomeController($serviceCommitted, $ionicFilterBar) {
	var vm = this;
	vm.filterBarInstance;
	vm.showFilterBar = function () {
		vm.filterBarInstance = $ionicFilterBar.show({
			items: vm.items,
			update: function (filteredItems) {
				vm.items = filteredItems;
			},
			filterProperties: 'description'
		});
	};
	vm.onItemDelete = function(item) {
		var committedUpdated = $serviceCommitted.remove(item);
    	vm.items = committedUpdated;
    };
	vm.find = function(){
		vm.items = $serviceCommitted.find();
	}
	vm.init = function(){
		vm.find();
	}
	return vm;
}

function ItemController($serviceCommitted, $stateParams) {
	var vm = this;
	vm.save = function(){
		$serviceCommitted.saveOrUpdate(vm.committed);
	}
	vm.findByIndex = function(index){
		vm.committed = $serviceCommitted.findByIndex(index);
	}
	vm.init = function(){
		var index = $stateParams.index;
		if(index) vm.findByIndex(index);
	}
	return vm;
}
