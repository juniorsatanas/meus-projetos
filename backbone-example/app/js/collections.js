var Car = Backbone.Model.extend({}),
Cars = Backbone.Collection.extend({
    model: Car
}),
ViewCollection = Backbone.View.extend({
    el: '#app-container-collection',
    template: _.template($("#details").html()),
    initialize: function () {
        this.coll = new Cars();
        this.listenTo(this.coll, 'reset', this.render);

        this.coll.reset([
            {id: 1, name: 'Gol',   Marca: 'VW'},
            {id: 2, name: 'Palio',   lastName: 'Fiat'},
            {id: 3, name: 'Fox', lastName: 'VW'},
            {id: 4, name: 'Chevete',  lastName: 'VW'}
        ]);
    },
    render: function () {
        this.$el.html(this.template({cars: this.coll.toJSON()}));
        return this;
    }
});

var colection = new ViewCollection();
