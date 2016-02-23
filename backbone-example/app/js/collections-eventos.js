//
// Model
//
Friend = Backbone.Model.extend({});

//
// Collection
//
Friends = Backbone.Collection.extend({
    // Repare que estamos fazendo uso do segundo parâmetro "options"
    initialize: function (models, options) {
        // Para cada modelo adicionado nesta coleção
        // executamos a função callback "view.render()"
        this.on('add',  options.view.render, this);
    }
});

AppView = Backbone.View.extend({
    el: $('#app-container-collection-eventos'),
    initialize: function () {
        // Criamos a coleção e criamos um referência a esta visão
        // passando como segundo parâmetro as opções (options).
        this.friends = new Friends(null, {view: this});
    },
    events: {
        'click #add-friend': 'showPrompt',
    },
    showPrompt: function () {
        var friend_name  = prompt('Who is your friend?');
        var friend_model = new Friend({name: friend_name});
        // Adicionamos e modelo a coleção e, consequentemente,
        // disparamos o callback definido na collection.
        this.friends.add(friend_model);
    },
    //
    // De onde vem o parâmetro 'model' ?
    //
    render: function (model) {
        $('#friends-list').append('<li>' + model.get('name') + '</li>');
    }
});

// Aqui é o ponto inicial
var appview = new AppView;

Friends = Backbone.Collection.extend({
    // Lembrando que ao inicializar a coleção podemos passar como
    // primeiro parâmetro: um lista com os modelos e
    // segundo parâmetro:  um objeto com opções
    initialize: function (models, options) {
        this.on('add',  options.callback, this);
    }
});

options = {
    // O parâmetro `model` será transmitido
    // ao callback  pela coleção quando disparamos
    // o evento através da função `add()`
    callback: function (model) {
        console.log(model.get('name'));
    }
}

// Criamos a coleção com uma lista vazia (primeiro parâmetro) e
// como segundo parâmetro passamos o nosso objeto de opções que
// contém o callback
var friends = new Friends(null, options);
