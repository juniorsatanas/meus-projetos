var React = require('react'),
ReactDOM  = require('react-dom'),
Router    = require('react-router'),
mui       = require('material-ui'),
Icon      = mui.Icon;

class Template extends React.Component {
    render() {
        return (
            {this.props.element}
        );
    }
};

module.exports = Template;
