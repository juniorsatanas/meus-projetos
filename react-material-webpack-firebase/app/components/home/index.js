
var React     = require('react'),
Icon          = require('react-fa'),
Router        = require('react-router'),
RouteHandler  = require('react-router').RouteHandler,
ThemeManager  = require('material-ui/lib/styles/theme-manager'),
LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme'),
mui           = require('material-ui'),
GridList      = mui.GridList,
IconButton    = mui.IconButton,
StarBorder    = mui.StarBorder,
GridTile      = mui.GridTile,
Paper         = mui.Paper;

require('./style');

var tilesData = [
    {
        key : 1,
        title : 'Cadastros',
        link : [' Pessoas', ' Clientes', 'Imóveis', ' Tipos'],
        ref : ['people/view', '', '', ''],
        featured : false,
        icon : 'cogs',
        color: 'FF595C'
    },{
        key : 2,
        title : 'Manutenção',
        link : [' Visitas', ' Clientes', ' Imóveis'],
        ref : ['', '', ''],
        featured : true,
        icon : 'home',
        color: 'E8D993'
    },{
        key : 3,
        title : 'Outros',
        link : ['horewer'],
        ref : [''],
        featured : false,
        icon : 'registered',
        color: '4CFF55'
    }
]

module.exports = React.createClass({displayName: "exports",
    mixins: [Router.Navigation, Router.State],

    render: function() {
        return(
            React.createElement(GridList, {className: "grid"}, 
            
                tilesData.map(tile =>
                React.createElement(GridTile, {className: "item-grid", style: {background: '#' + tile.color}, key: tile.key, title: tile.title, subtitle: 
                        tile.link.map((li, i) =>
                            React.createElement("span", {key: li}, "/ ", React.createElement("a", null, React.createElement("b", {onClick: this.click.bind(this, tile.ref[i])}, li)), " ")
                        ), 
                    
                    actionIcon: 
                        React.createElement(IconButton, null)
                    }, React.createElement(Icon, {name: tile.icon, size: "4x"})
                ))

            
            )
        );
    },

    click: function(redirectUrl) {
        this.context.router.transitionTo('/' + redirectUrl);
    }
});