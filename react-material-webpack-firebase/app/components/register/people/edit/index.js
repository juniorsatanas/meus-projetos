
var React   = require('react'),
ReactDOM    = require('react-dom'),
Router      = require('react-router'),
Icon        = require('react-fa'),
Firebase    = require('firebase'),
ReactFire   = require('reactfire'),
LinkedStateMixin = require('react-addons-linked-state-mixin'),
PeopleDao   = require('../../../common/dao'),
mui         = require('material-ui'),
IconButton  = mui.IconButton,
Checkbox    = mui.Checkbox,
TextArea    = mui.TextArea,
TextField   = mui.TextField,
SelectField = mui.SelectField;

require('./style');

var table = 'people';

module.exports = React.createClass({displayName: "exports",
    mixins: [Router.Navigation, Router.State, ReactFire, LinkedStateMixin],
    setApplicationDetails: function(pageData, item) {
        this.transitionTo('/people/view');
    },
    back: function() {
        event.preventDefault();
        this.transitionTo('/people/view');
    },
    save: function() {
        event.preventDefault();
        PeopleDao.saveOrUpdate(table, this.state);
    },
    findByCode: function(code){
        var self = this;
        PeopleDao.findByCode(table, code, function(object){
            var existObject = (object && object.val());
            console.log(object.val())
            if(existObject) self.setState(object.val());
        });
    },
    getInitialState: function() {
        return {
            code: 1,
            name: 'Jose Arthur',
            observation: 'Teste',
            genere: 1,
            active: true
        };
    },
    componentDidMount: function() {
        var peopleId = this.props.params.peopleId ? parseInt(this.props.params.peopleId) : 0;
        var isEdit = (peopleId > 0);
        if(isEdit) this.findByCode(peopleId);
    },
    render: function() {
        var self = this;
        var peopleId = this.props.params.peopleId;

        return(
            React.createElement("div", {className: "editor"}, 
                React.createElement("div", {className: "main full-width"}, 
                    React.createElement("h2", null, "Pessoa"), 
                    React.createElement("hr", null), 
                    React.createElement(TextField, {valueLink: this.linkState('code'), hintText: "Código", floatingLabelText: "Código", className: "full-width", disabled: (self.state.key)}), React.createElement("br", null), 
                    React.createElement(TextField, {valueLink: this.linkState('name'), hintText: "Nome", floatingLabelText: "Nome", className: "full-width"}), React.createElement("br", null), 
                    React.createElement(TextField, {valueLink: this.linkState('observation'), hintText: "Observação", floatingLabelText: "Observação", multiLine: true, className: "full-width"}), React.createElement("br", null), 
                    React.createElement(SelectField, {valueLink: this.linkState('genere'), hintText: "Sexo", floatingLabelText: "Sexo", menuItems: [
                        {payload: 0, text: ''},
                        {payload: 1, text: 'Masculino'},
                        {payload: 2, text: 'Feminina'}
                    ]}), React.createElement("br", null), 
                    React.createElement(Checkbox, {checkedLink: this.linkState('active'), label: "Ativo?"}), React.createElement("br", null)
                ), 
                React.createElement("ul", {className: "menu-float-edit"}, 
                    React.createElement("li", null, 
                        React.createElement(IconButton, {onClick: self.save}, 
                            React.createElement(Icon, {name: "floppy-o"})
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement(IconButton, null, 
                            React.createElement(Icon, {name: "trash-o"})
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement(IconButton, {onClick: self.back}, 
                            React.createElement(Icon, {name: "arrow-left"})
                        )
                    )
                )
            )
        );
    }
});