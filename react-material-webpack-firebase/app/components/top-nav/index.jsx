'use strict';

var React  = require('react'),
Icon       = require('react-fa'),
mui        = require('material-ui'),
AppBar     = mui.AppBar,
Paper      = mui.Paper,
IconButton = mui.IconButton;
//MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');

require('./style');

module.exports = React.createClass({
    render: function() {
        var menuButton =
            <IconButton onMouseOver={this.props.onMenuIconButtonTouch}>
                <Icon name="ellipsis-v" size="2x"/>;
            </IconButton>

        return (
            <Paper className='topNav' rounded={false}>
                <AppBar iconElementLeft={menuButton} title='my-house' zDepth={0} />
            </Paper>
        );
    }
});
