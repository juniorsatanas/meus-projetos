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
Icon              = require('react-fa'),
mui               = require('material-ui'),
IconButton        = mui.IconButton;

require('./style.sass');

var _rows = [];
for (var i = 1; i < 10; i++) {
    _rows.push({
        id: i,
        title: 'Title ' + i,
        count: i * 100
    });
}

var applicationData = {
    goToPage: 'home',
    memberDetails: []
};

module.exports = React.createClass({
    mixins: [Router.Navigation, Router.State],
    setApplicationDetails: function(pageData, item) {
        this.transitionTo('/people/edit/' + item.id);
    },
    edit: function(item) {
        event.preventDefault();
        this.setApplicationDetails('item', item);
    },
    add: function() {
        event.preventDefault();
        this.transitionTo('/people/add');
    },
    del: function() {
        event.preventDefault();
        var delConfirmed = confirm('Remover selecionados?');
        if(!delConfirmed) return;
    },
    render: function() {
        var self = this;
        var state = {
            fixedHeader: true,
            stripedRows: true,
            showRowHover: true,
            selectable: true,
            multiSelectable: true,
            enableSelectAll: true,
            deselectOnClickaway: true,
            height: '100%',
        };

        return (
            <div>
                <Table height={state.height} fixedHeader={state.fixedHeader}
                    fixedFooter={state.fixedFooter} selectable={state.selectable}
                    multiSelectable={state.multiSelectable}>
                    <TableHeader enableSelectAll={true}>
                        <TableRow>
                            <TableHeaderColumn tooltip='Id'>Editar / Id</TableHeaderColumn>
                            <TableHeaderColumn tooltip='Nome'>Nome</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody deselectOnClickaway={true}
                        showRowHover={true} stripedRows={true}>
                        {
                            _rows.map((item, index) =>
                                <TableRow setApplicationDetails={self.setApplicationDetails} key={index}>
                                    <TableRowColumn>
                                        <IconButton onClick={self.edit.bind(this, item)} item={item}>
                                            <Icon name="pencil" size="2x"/>;
                                        </IconButton>
                                        {item.id}
                                    </TableRowColumn>
                                    <TableRowColumn>{item.title}</TableRowColumn>
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
