
var Song = Backbone.Model.extend({
    name: '',
    compositor: '',
    log: function () {
        console.log('música: ' + this.get('name') + ', compositor: ' + this.get('compositor'))
    },
    initialize: function(){
        var li = "<li>" + 'música: ' + this.get('name') + ', compositor: ' + this.get('compositor') + "</li>";
        this.$lista = $('#lista-container-song');
        this.$lista.append(li);
    }
});
var music01 = new Song({
    name: 'Águas de março',
    compositor: 'Tom Jobim'
});
var music02 = new Song({
    name: 'Garota de Ipanema',
    compositor: 'Tom Jobim e Vinícius de Moraes'
});
var music03 = new Song({
    name: 'Aquarela',
    compositor: 'Toquinho'
});
