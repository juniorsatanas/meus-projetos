/*
// initialize fake REST server and data
var restServer = new FakeRest.Server();
restServer.init({
    'books': [
        { id: 0, author_id: 0, title: 'Anna Karenina' },
        { id: 1, author_id: 0, title: 'War and Peace' },
        { id: 2, author_id: 1, title: 'Pride and Prejudice' },
        { id: 3, author_id: 1, title: 'Sense and Sensibility' }
    ]
});

// use sinon.js to monkey-patch XmlHttpRequest
var server = sinon.fakeServer.create();
restServer.toggleLogging(); // logging is off by default, enable it
// all requests are blocking in this example, so the following is not necessary
// however this is required when doing asynchronous XmlHttpRequest
// server.autoRespond = true;
server.respondWith(restServer.getHandler());

Book = Backbone.Model.extend({
    urlRoot: 'book/'
});

var book = new Book({id: 1});
book.fetch({
    success: function (modeloResposta) {
        console.log("OK");
        console.log(modeloResposta);
    },
    error: function (model, xhr, options) {
        console.log("Erro");
    }
});

console.log(" ==>>> " + book.get('title')); // "undefined"
*/
