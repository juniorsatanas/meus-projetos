'use strict';

var React = require('react');

module.exports = React.createClass({
    statics: {
        find: function(table, callback){
            var refFirebase = this.getInstanceFirebase(table);
            refFirebase.orderByChild('code').on('child_added', function(snapshot) {
                callback(snapshot);
            });
        },
        findByCode: function(table, code, event, callback){
            var self = this;
            var refFirebase = this.getInstanceFirebase(table);
            refFirebase.orderByChild('code').equalTo(String(code)).once(event, function(snapshot) {
                var existObject = (snapshot && snapshot.val());
                if(!existObject) {
                    callback();
                    return;
                }

                var key = Object.keys(snapshot.val())[0];
                var objectRef = self.getInstanceFirebase(table + '/' + key)
                callback(objectRef, snapshot);
            });
        },
        saveOrUpdate: function(table, object){
            var self = this;
            var isSave = !(object.update);
            var refFirebase = this.getInstanceFirebase(table);
            this.findByCode(table, object.code, 'value', function(objectDB){
                var objectExistsInDB = (objectDB && objectDB.key());
                if(objectExistsInDB && isSave){
                    alert('Já existe um objeto na tabela "' + table + '" com o código: ' + object.code)
                    return;
                }

                if(isSave) refFirebase.push(object)
                else objectDB.update(object);
            });
        },
        delete: function(table, codeObject, callback){
            var self = this;
            var refFirebase = this.getInstanceFirebase(table);
            this.findByCode(table, codeObject, 'value', function(objectDB){
                var objectExistsInDB = (objectDB);
                objectDB.remove(callback);
            });
        },
        off: function(table){
            this.ref[table].off();
            this.ref[table] = undefined;
        },
        getInstanceFirebase: function(table){
            var existRef = this.ref[table];
            if(existRef) return existRef;

            var authHandler = function(error, authData) {
                if (error) console.log('Login Failed!', error);
            }
            var login = 'emirdeliz@gmail.com',
                password = '123',
                token = 'be02e9c8-9774-49ed-bbc3-9de9379fa151';

            var newRef = new Firebase('https://blazing-fire-2429.firebaseio.com/' + table);
            newRef.authWithPassword({
                email    : login,
                password : password
            }, authHandler);

            this.ref[table] = newRef;
            return newRef;
        },
        ref: {}
    },
    render: function() {

    }
});
