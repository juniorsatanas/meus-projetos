var SearchView = Backbone.View.extend({
    el: $("#formulario-container"),
    initialize: function(){
        this.render();
    },
    render: function(){
        this.template = _.template($("#formulario-template").html(), {} );
        this.$el.html( this.template );
    },
    //
    // Delegando eventos
    //
    events: {
        // Evento click para o único botão do template
        // executamos o callback `doSearch` quando o evento é disparado
        "click input[type=button]": "doSearch"
    },
    //
    // Função de callback para o evento do botão
    //
    doSearch: function( event ){
        console.log( "Buscar por " + $("#txtTermo").val() );
    }
});

var search_view = new SearchView();
