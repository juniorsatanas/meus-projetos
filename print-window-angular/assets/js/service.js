app.service('User', function(DS) {
    return DS.defineResource({
        name: 'user'
    });
});
