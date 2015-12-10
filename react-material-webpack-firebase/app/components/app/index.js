'use strict';

var React       = require('react'),
RouteHandler    = require('react-router').RouteHandler,
mui             = require('material-ui'),
ThemeManager    = require('material-ui/lib/styles/theme-manager'),
LightRawTheme   = require('material-ui/lib/styles/raw-themes/light-raw-theme'),
TopNav          = require('../top-nav'),
SideNav         = require('../side-nav');

require('./style');

var Application = React.createClass({
    getChildContext: function() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },

    render: function() {
        return (
            <div className={'application'}>
                <TopNav onMenuIconButtonTouch={this._onMenuIconButtonTouch}/>
                <SideNav ref='sideNav'/>
                <RouteHandler />
            </div>
        );
    },

    _onMenuIconButtonTouch: function() {
        this.refs.sideNav.toggle();
    }
});

Application.childContextTypes = {
    muiTheme: React.PropTypes.object
};

module.exports = Application;
