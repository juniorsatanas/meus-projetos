'use strict';

var React = require('react'),
Router    = require('react-router'),
mui       = require('material-ui'),
LeftNav   = mui.LeftNav;

require('./style');

module.exports = React.createClass({

    mixins: [Router.Navigation, Router.State],

    render: function() {
        var menuItems = [
            {route: '/', text: 'Home'},
            {route: '/about', text: 'About'},
            {route: '/register', text: 'Register'}
        ];

        var header = <div className='header'>my-house</div>;

        return (
            <LeftNav className='sideNav' ref='leftNav' header={header} menuItems={menuItems} docked={false} onChange={this.onLeftNavChange} />
        );
    },

    toggle: function() {
        this.refs.leftNav.toggle();
    },

    onLeftNavChange: function(e, key, payload) {
        this.transitionTo(payload.route);
    }
});
