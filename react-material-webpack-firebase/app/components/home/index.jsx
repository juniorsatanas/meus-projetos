'use strict';

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
        link : [' Pessoas'],
        ref : ['people/view'],
        featured : false,
        icon : 'cogs',
        color: 'FF595C'
    },{
        key : 2,
        title : 'Sobre',
        link : [' about'],
        ref : ['', '', ''],
        featured : true,
        icon : 'home',
        color: 'E8D993'
    }
]

module.exports = React.createClass({
    mixins: [Router.Navigation, Router.State],
    render: function() {
        return(
            <GridList className="grid">
            {
                tilesData.map(tile =>
                <GridTile className="item-grid" style={{background: '#' + tile.color}} key={tile.key} title={tile.title} subtitle={
                        tile.link.map((li, i) =>
                            <span key={li}>/ <a><b onClick={this.click.bind(this, tile.ref[i])}>{li}</b></a> </span>
                        )
                    }
                    actionIcon={
                        <IconButton></IconButton>
                    }><Icon name={tile.icon} size="4x"/>
                </GridTile>)

            }
            </GridList>
        );
    },

    click: function(redirectUrl) {
        this.context.router.transitionTo('/' + redirectUrl);
    }
});
