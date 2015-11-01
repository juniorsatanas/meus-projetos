window.onload = function(){
    initApp();
};

function initMaterial(){
    setTimeout(function(){
        initTableMaterial();
        initComponentHandlerMaterial();
    }, 300);
}

function initComponentHandlerMaterial(){
    componentHandler.upgradeAllRegistered();
}

function initTableMaterial(){
    var table = document.querySelector('table');
    var headerCheckbox = table.querySelector('thead .mdl-data-table__select input');
    var boxes = table.querySelectorAll('tbody .mdl-data-table__select');
    var headerCheckHandler = function(event) {
        for (var i = 0, length = boxes.length; i < length; i++){
            if(event.target.checked)
                boxes[i].MaterialCheckbox.check();
            else
                boxes[i].MaterialCheckbox.uncheck();
        }
    };
    headerCheckbox.addEventListener('change', headerCheckHandler);
}

function initApp(){
    System.import('bootstrap').then(function(){
        initMaterial();
    }).catch(function (e) {
        console.error(e, 'Report this error at https://github.com/mgechev/angular2-seed/issues');
    });
}
