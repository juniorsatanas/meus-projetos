'use strict';

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

module.exports = React.createClass({
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
            <div className="editor">
                <div className="main full-width">
                    <h2>Pessoa</h2>
                    <hr/>
                    <TextField valueLink={this.linkState('code')} hintText="Código" floatingLabelText="Código" className="full-width" disabled={self.state.update}/><br/>
                    <TextField valueLink={this.linkState('name')} hintText="Nome" floatingLabelText="Nome" className="full-width"/><br/>
                    <TextField valueLink={this.linkState('observation')} hintText="Observação" floatingLabelText="Observação" multiLine={true} className="full-width"/><br/>
                    <SelectField valueLink={this.linkState('genere')} hintText="Sexo" floatingLabelText="Sexo" menuItems={[
                        {payload: 0, text: ''},
                        {payload: 1, text: 'Masculino'},
                        {payload: 2, text: 'Feminina'}
                    ]}/><br/>
                    <Checkbox checkedLink={this.linkState('active')} label="Ativo?"/><br/>
                </div>
                <ul className="menu-float-edit">
                    <li>
                        <IconButton onClick={self.save}>
                            <Icon name="floppy-o"/>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton onClick={self.del}>
                            <Icon name="trash-o"/>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton onClick={self.back}>
                            <Icon name="arrow-left"/>
                        </IconButton>
                    </li>
                </ul>
            </div>
        );
    }
});
