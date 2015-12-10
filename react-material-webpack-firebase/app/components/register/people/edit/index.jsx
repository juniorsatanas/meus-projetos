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
            <div className="editor">
                <div className="main full-width">
                    <h2>Pessoa</h2>
                    <hr/>
                    <TextField valueLink={this.linkState('code')} hintText="Código" floatingLabelText="Código" className="full-width" disabled={(self.state.key)}/><br/>
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
                        <IconButton>
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
