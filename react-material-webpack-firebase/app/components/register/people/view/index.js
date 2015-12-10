
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

module.exports = React.createClass({displayName: "exports",
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
            React.createElement("div", null, 
                React.createElement(Table, {height: state.height, fixedHeader: state.fixedHeader, 
                    fixedFooter: state.fixedFooter, selectable: state.selectable, 
                    multiSelectable: state.multiSelectable}, 
                    React.createElement(TableHeader, {enableSelectAll: true}, 
                        React.createElement(TableRow, null, 
                            React.createElement(TableHeaderColumn, {tooltip: "Id"}, "Editar / Id"), 
                            React.createElement(TableHeaderColumn, {tooltip: "Nome"}, "Nome")
                        )
                    ), 
                    React.createElement(TableBody, {deselectOnClickaway: true, 
                        showRowHover: true, stripedRows: true}, 
                        
                            _rows.map((item, index) =>
                                React.createElement(TableRow, {setApplicationDetails: self.setApplicationDetails, key: index}, 
                                    React.createElement(TableRowColumn, null, 
                                        React.createElement(IconButton, {onClick: self.edit.bind(this, item), item: item}, 
                                            React.createElement(Icon, {name: "pencil", size: "2x"}), ";"
                                        ), 
                                        item.id
                                    ), 
                                    React.createElement(TableRowColumn, null, item.title)
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