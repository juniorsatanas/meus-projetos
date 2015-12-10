
var React = require('react');

//require('./style');

module.exports = React.createClass({displayName: "exports",
    render: function() {
        return(
            React.createElement("div", null, "About")
        );
    }
});