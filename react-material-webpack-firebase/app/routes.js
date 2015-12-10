
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
    React.createElement(Route, {name: "app", path: "/", handler: require('./components/app')}, 
        React.createElement(Route, {name: "about", handler: require('./components/about')}), 
        React.createElement(Route, {name: "people/view", handler: require('./components/register/people/view')}), 
        React.createElement(Route, {name: "people/edit/:peopleId", handler: require('./components/register/people/edit')}), 
        React.createElement(Route, {name: "people/add", handler: require('./components/register/people/edit')}), 
        React.createElement(DefaultRoute, {handler: require('./components/home')})
    )
);