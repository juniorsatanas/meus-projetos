'use strict';

var React        = require('react'),
Router       = require('react-router'),
Route        = Router.Route,
DefaultRoute = Router.DefaultRoute;

// polyfill
if (!Object.assign) {
    Object.assign = React.__spread;
}

// export routes
module.exports = (
    <Route name='app' path='/' handler={require('./components/app')}>
        <Route name='about' handler={require('./components/about')} />
        <Route name='people/view' handler={require('./components/register/people/view')} />
        <Route name='people/edit/:peopleId' handler={require('./components/register/people/edit')} />
        <Route name='people/add' handler={require('./components/register/people/edit')} />
        <DefaultRoute handler={require('./components/home')} />
    </Route>
);
