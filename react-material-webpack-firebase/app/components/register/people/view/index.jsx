'use strict';

var React         = require('react'),
ReactDOM          = require('react-dom'),
Router            = require('react-router'),
Table             = require('material-ui/lib/table/table'),
TableBody         = require('material-ui/lib/table/table-body'),
TableFooter       = require('material-ui/lib/table/table-footer'),
TableHeader       = require('material-ui/lib/table/table-header'),
TableHeaderColumn = require('material-ui/lib/table/table-header-column'),
TableRow          = require('material-ui/lib/table/table-row'),
TableRowColumn    = require('material-ui/lib/table/table-row-column'),
LinkedStateMixin  = require('react-addons-linked-state-mixin'),
Icon              = require('react-fa'),
mui               = require('material-ui'),
IconButton        = mui.IconButton,
PeopleDao         = require('../../../common/dao');

require('./style.sass');

var table = 'people';
var applicationData = {
    goToPage: 'home',
    memberDetails: []
};

module.exports = React.createClass({
    mixins: [Router.Navigation, Router.State, LinkedStateMixin],
    setApplicationDetails: function(pageData, item) {
        this.transitionTo('/people/edit/' + item.code);
    },
    getInitialState: function() {
        return {
            people: []
        };
    },
    componentDidMount: function() {
        this.find();
    },
    componentWillUnmount: function() {
        PeopleDao.off(table);
    },
    edit: function(item) {
        this.setApplicationDetails('item', item);
    },
    add: function() {
        event.preventDefault();
        this.transitionTo('/people/add');
    },
    del: function(event) {
        event.preventDefault();
        var self = this;
        var delConfirmed = confirm('Remover selecionados?');
        if(!delConfirmed) return;

        for(var i in self.state){
            if(self.state[i].delete)
                PeopleDao.delete(table, self.state[i].code, function(error){
                    if(error) alert('Ocorreu um erro ao excluir: ' + error);
                    location.reload();
                });
        }
    },
    find: function(){
        var self = this;
        PeopleDao.find(table, function(object){
            var existObject = (object && object.val());
            if(existObject){
                self.state.people.push(object.val());
                self.setState(self.state.people);
            }
        });
    },
    select: function(rowNumber, columnId){
        var self = this;
        self.state[rowNumber].delete = !self.state[rowNumber].delete;
    },
    render: function() {
        var self = this;
        var state = {
            fixedHeader: true,
            stripedRows: true,
            showRowHover: true,
            selectable: true,
            multiSelectable: true,
            enableSelectAll: false,
            deselectOnClickaway: true,
            height: '100%',
            onCellClick: self.select
        };

        return (
            <div>
                <Table height={state.height} fixedHeader={state.fixedHeader}
                    fixedFooter={state.fixedFooter} selectable={state.selectable}
                    multiSelectable={state.multiSelectable} onCellClick={state.onCellClick}>
                    <TableHeader enableSelectAll={state.enableSelectAll}>
                        <TableRow>
                            <TableHeaderColumn tooltip='Id'>Editar / Código</TableHeaderColumn>
                            <TableHeaderColumn tooltip='Nome'>Nome</TableHeaderColumn>
                            <TableHeaderColumn tooltip='Nome'>Sexo</TableHeaderColumn>
                            <TableHeaderColumn tooltip='Nome'>Observação</TableHeaderColumn>
                            <TableHeaderColumn tooltip='Ativo?'>Ativo?</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody deselectOnClickaway={true}
                        showRowHover={true} stripedRows={true}>
                        {
                            self.linkState('people').value.map((item, index) =>
                                <TableRow setApplicationDetails={self.setApplicationDetails} key={index}>
                                    <TableRowColumn>
                                        <IconButton onClick={self.edit.bind(this, item)} item={item}>
                                            <Icon name="pencil" size="2x"/>
                                        </IconButton>
                                        {item.code}
                                    </TableRowColumn>
                                    <TableRowColumn>{item.name}</TableRowColumn>
                                    <TableRowColumn>{item.genere==1?'Masculino':item.genere==2?'Feminino':''}</TableRowColumn>
                                    <TableRowColumn>{item.observation}</TableRowColumn>
                                    <TableRowColumn>{item.active?'Sim':'Não'}</TableRowColumn>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
                <ul className="menu-float-view">
                    <li>
                        <IconButton onClick={self.add}>
                            <Icon name="plus"/>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton>
                            <Icon name="trash" onClick={self.del}/>
                        </IconButton>
                    </li>
                </ul>
            </div>
        );
    }
});
