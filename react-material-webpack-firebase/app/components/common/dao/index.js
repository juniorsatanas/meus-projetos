
var React = require('react');

module.exports = React.createClass({displayName: "exports",
    statics: {
        find: function(table, key, callback){
            var refFirebase = this.getInstanceFirebase(table);
            refFirebase.orderByChild("key").equalTo(key).on('value', function(snapshot) {
                callback(snapshot);
            });
        },
        findByCode: function(table, code, callback){
            var refFirebase = this.getInstanceFirebase(table);
            refFirebase.orderByChild("code").equalTo(code).once('value', function(snapshot) {
                console.log(code)
                callback(snapshot);
            });
        },
        saveOrUpdate: function(table, object){
            var self = this;
            var refFirebase = this.getInstanceFirebase(table);
            var isSave = !(object.key);

            if(isSave){
                this.findByCode(table, object.code, function(objectDB){
                    var objectExistsInDB = (objectDB && objectDB.val());
                    if(objectExistsInDB){
                        alert('Já existe um objeto na tabela "' + table + '" com o código: ' + object.code)
                        return;
                    }
                    refFirebase.push(object);
                })
            }else
                refFirebase.set(object);
        },
        getInstanceFirebase: function(table){
            var authHandler = function(error, authData) {
                if (error) console.log("Login Failed!", error);
            }
            var login = 'emirdeliz@gmail.com',
                password = '123',
                token = 'be02e9c8-9774-49ed-bbc3-9de9379fa151';

            var ref = new Firebase("https://blazing-fire-2429.firebaseio.com/" + table);
            ref.authWithPassword({
                email    : login,
                password : password
            }, authHandler);
            return ref;
        }
    },
    render: function() {

    }
});