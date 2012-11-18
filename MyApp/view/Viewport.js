Ext.define('MyApp.view.Viewport', {

    layout : {
        type    : 'border',
        padding : 5
    },

    extend : 'Ext.container.Viewport',

    items  : [{

        xtype  : 'myapp-header',

        height : 35,

        region : 'north'

    }, {

        xtype  : 'myapp-member-list',

        region : 'center'

    }, {

        //xtype  : 'container',

        region : 'south',

        xtype  : 'myapp-footer',

        split  : true,

        height : 300

        //height : 100
    }]
});
