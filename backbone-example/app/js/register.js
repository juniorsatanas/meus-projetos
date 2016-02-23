var AppView = Backbone.View.extend({
    el: $("#app-container"),

    initialize: function(){
        this.$lista   = $('#lista-container');
        this.$txtItem = $('#txt-item');
    },

    events: {
        "click #btn-salvar" : "salvar",
        "click a" : "remover"
    },

    salvar: function() {
        var li = "<li><a href='#'> x </a>" + this.$txtItem.val() + "</li>";
        this.$lista.append(li);
    },

    remover: function(el) {
        $(el.target).parent().remove();
    }
});

var app_view = new AppView();
