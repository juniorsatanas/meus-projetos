
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
    getInitialState: function() {
        return {
            code: '0',
            name: '',
            observation: '',
            genere: 0,
            active: true,
            key : 0,
            update: false
        };
    },
    componentDidMount: function() {
        //this.mock();
        var peopleId = this.props.params.peopleId;
        var isEdit = (peopleId && !isNaN(peopleId));
        if(isEdit) this.findByCode(parseInt(peopleId));
    },
    componentWillUnmount: function() {
        PeopleDao.off(table);
    },
    back: function() {
        event.preventDefault();
        this.transitionTo('/people/view');
    },
    mock: function(){
        PeopleDao.saveOrUpdate(table, {
            code: '1',
            name: 'Jael',
            observation: 'Jael Obs',
            genere: 0,
            active: true,
            key: 0
        });

        PeopleDao.saveOrUpdate(table, {
            code: '1',
            name: 'Jael edit',
            observation: 'Jael Obs edit',
            genere: 0,
            active: true,
            key: 0,
            update: true
        });

        PeopleDao.saveOrUpdate(table, {
            code: '2',
            name: 'Lima',
            observation: 'Lima Obs',
            genere: 1,
            active: true,
            key: 0
        });
    },
    save: function() {
        PeopleDao.saveOrUpdate(table, this.state);
        this.transitionTo('/people/view');
    },
    findByCode: function(code){
        var self = this;
        PeopleDao.findByCode(table, code, 'child_added', function(objectRef, objectValue){
            var objectDB = objectValue.val();
            var existObject = (objectValue && objectValue.val());

            if(existObject && objectDB){
                objectDB['update'] = true;
                self.setState(objectDB);
            }
        });
    },
    del: function(event) {
        event.preventDefault();
        var self = this;
        var peopleCode = self.state.code;
        var delConfirmed = confirm('Remover selecionados?');
        if(!delConfirmed) return;

        PeopleDao.delete(table, peopleCode, function(error){
            if(error) alert('Ocorreu um erro ao excluir: ' + error);
            else self.transitionTo('/people/view');
        });
    },
    render: function() {
        var self = this;
        return(
            React.createElement("div", {className: "editor"}, 
                React.createElement("div", {className: "main full-width"}, 
                    React.createElement("h2", null, "Pessoa"), 
                    React.createElement("hr", null), 
                    React.createElement(TextField, {valueLink: this.linkState('code'), hintText: "Código", floatingLabelText: "Código", className: "full-width", disabled: self.state.update}), React.createElement("br", null), 
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
                        React.createElement(IconButton, {onClick: self.del}, 
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