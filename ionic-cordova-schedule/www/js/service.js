angular.module('AppCommitted').service('$serviceCommitted', ServiceCommitted);

function ServiceCommitted (){
    this.committed = mockCommitted();
    this.saveOrUpdate = function(committedItem){
        var isUpdate = committedItem.id;
        if(isUpdate){
            angular.forEach(this.committed, function(item, index) {
                if(item.id == committedItem.id){
                    item = committedItem;
                    return false;
                }
            });
        }else{
            committedItem.id = Math.random();
            this.committed.push(committedItem);
        }
        return committedItem;
    };

    this.remove = function(committedItem){
        var index = this.committed.indexOf(committedItem);
        this.committed.splice(index, 1)
        return this.committed;
    };

    this.find = function(committed){
        return this.committed;
    };

    this.findByIndex = function(index){
        return this.committed[index];
    };
}

function mockCommitted(){
    var dateTemplate = new Date();
    var mock =
    [
        {
            name : 'Jogar tênis',
            date : new Date(dateTemplate.getFullYear(), dateTemplate.getMonth(), dateTemplate.getDay() + 1),
            description : 'Ir ao jogo de tês com Paulo. Chegar 15 min antes',
            active : true,
            completed : false,
            id: Math.random()
        },
        {
            name : 'Comprar video game',
            date : new Date(dateTemplate.getFullYear(), dateTemplate.getMonth(), dateTemplate.getDay() + 2),
            description : 'Comprar video game Xbox One na promoção',
            active : true,
            completed : false,
            id: Math.random()
        },
        {
            name : 'Comprar ingresso',
            date : new Date(dateTemplate.getFullYear(), dateTemplate.getMonth(), dateTemplate.getDay() + 3),
            description : 'Comprar ingresso filme star wars para estreia',
            active : false,
            completed : false,
            id: Math.random()
        },
        {
            name : 'Comprar ingresso jogo JEC',
            date : new Date(dateTemplate.getFullYear(), dateTemplate.getMonth(), dateTemplate.getDay() + 4),
            description : 'Comprar ingresso antecipado caso esteja em promoção',
            active : true,
            completed : false,
            id: Math.random()
        },
        {
            name : 'Preparar festa suspresa',
            date : new Date(dateTemplate.getFullYear(), dateTemplate.getMonth(), dateTemplate.getDay() + 5),
            description : 'Preparar festa surpresa para aniversário de casamento dos pais',
            active : true,
            completed : true,
            id: Math.random()
        }
    ];
    return mock;
}
