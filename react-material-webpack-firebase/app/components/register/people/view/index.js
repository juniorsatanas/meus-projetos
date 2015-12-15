
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

module.exports = React.createClass({displayName: "exports",
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
            React.createElement("div", null, 
                React.createElement(Table, {height: state.height, fixedHeader: state.fixedHeader, 
                    fixedFooter: state.fixedFooter, selectable: state.selectable, 
                    multiSelectable: state.multiSelectable, onCellClick: state.onCellClick}, 
                    React.createElement(TableHeader, {enableSelectAll: state.enableSelectAll}, 
                        React.createElement(TableRow, null, 
                            React.createElement(TableHeaderColumn, {tooltip: "Id"}, "Editar / Código"), 
                            React.createElement(TableHeaderColumn, {tooltip: "Nome"}, "Nome"), 
                            React.createElement(TableHeaderColumn, {tooltip: "Nome"}, "Sexo"), 
                            React.createElement(TableHeaderColumn, {tooltip: "Nome"}, "Observação"), 
                            React.createElement(TableHeaderColumn, {tooltip: "Ativo?"}, "Ativo?")
                        )
                    ), 
                    React.createElement(TableBody, {deselectOnClickaway: true, 
                        showRowHover: true, stripedRows: true}, 
                        
                            self.linkState('people').value.map((item, index) =>
                                React.createElement(TableRow, {setApplicationDetails: self.setApplicationDetails, key: index}, 
                                    React.createElement(TableRowColumn, null, 
                                        React.createElement(IconButton, {onClick: self.edit.bind(this, item), item: item}, 
                                            React.createElement(Icon, {name: "pencil", size: "2x"})
                                        ), 
                                        item.code
                                    ), 
                                    React.createElement(TableRowColumn, null, item.name), 
                                    React.createElement(TableRowColumn, null, item.genere==1?'Masculino':item.genere==2?'Feminino':''), 
                                    React.createElement(TableRowColumn, null, item.observation), 
                                    React.createElement(TableRowColumn, null, item.active?'Sim':'Não')
                                )
                            )
                        
                    )
                ), 
                React.createElement("ul", {className: "menu-float-view"}, 
                    React.createElement("li", null, 
                        React.createElement(IconButton, {onClick: self.add}, 
                            React.createElement(Icon, {name: "plus"})
                        )
                    ), 
                    React.createElement("li", null, 
                        React.createElement(IconButton, null, 
                            React.createElement(Icon, {name: "trash", onClick: self.del})
                        )
                    )
                )
            )
        );
    }
});