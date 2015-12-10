
var React  = require('react'),
Icon       = require('react-fa'),
mui        = require('material-ui'),
AppBar     = mui.AppBar,
Paper      = mui.Paper,
IconButton = mui.IconButton;
//MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');

require('./style');

module.exports = React.createClass({displayName: "exports",
    render: function() {
        var menuButton =
            React.createElement(IconButton, {onMouseOver: this.props.onMenuIconButtonTouch}, 
                React.createElement(Icon, {name: "ellipsis-v", size: "2x"}), ";"
            )

        return (
            React.createElement(Paper, {className: "topNav", rounded: false}, 
                React.createElement(AppBar, {iconElementLeft: menuButton, title: "my-house", zDepth: 0})
            )
        );
    }
});