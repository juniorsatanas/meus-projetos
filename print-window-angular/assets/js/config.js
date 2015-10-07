app.run(function($rootScope, User) {
    var count = 1;

    $rootScope.addUser = function (color) {
        User.inject({id: count, color: color, name: faker.name.findName(), email: faker.internet.email()});
        count++;
    };

    User.bindAll({
        color: 'blue'
    }, $rootScope, 'blueUsers');

    User.bindAll({
        where: {
            color: {
                '==': 'red'
            }
        }
    }, $rootScope, 'redUsers');
});
