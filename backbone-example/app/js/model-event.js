var Person = Backbone.Model.extend({
    // Valores padrão que são atribuídos ao instanciarmos o objeto
    defaults: {
        name: '',
        age: 0
    },

    initialize: function() {
        // Escutando as alterações na propriedade `name`
        this.on("change:name", function(model){
            $("#name").html(model.get('name'));
        });

        // Escutando as alterações na propriedade `age`
        this.on("change:age", function(model){
            $("#age").html(model.get('age'));
        });
    }
});

var AppView = Backbone.View.extend({
    // este é o elemento principal
    el: $('#app-container-model-event'),
    // executado ao instanciarmos a visão
    initialize: function () {
        // armazenado campos de textos
        this.$txtNome  = this.$el.find('#txtNome');
        this.$txtIdade = this.$el.find('#txtAge');
        this.model = new Person({});
        this.model.on('change', this.render, this);
    },
    // lógica de renderização
    render: function () {
        this.$txtNome.val(this.model.get('name'));
        this.$txtIdade.val(this.model.get('age'));
    }
});

//
// Iniciamos a aplicação
//
var view = new AppView();

view.model.set({name: 'flavio', age: 20});
view.model.set({name: 'Alexandre', age: 30});
view.model.set({name: 'Micheletti', age: 40});
