Ext.define('MyApp.view.Footer', {

    alias    : 'widget.myapp-footer',

    extend   : 'Ext.Panel',

    requires : [
       'MyApp.view.EchoBox',
       'MyApp.view.StatusChart'
    ],

    frame  : true,

    layout : {
        type  : 'hbox',
        align : 'stretch'
    },

    items : [{

        xtype : 'myapp-echobox',

        collapseDirection : 'left',

        collapsible : true,

        collapsed   : true,

        width : 300

    }, {

        xtype : 'status-chart',

        flex  : 1

    }]
});
