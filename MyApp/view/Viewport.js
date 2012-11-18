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
//        xtype  : 'container',
        xtype  : 'myapp-footer',
        region : 'south',
//        height : 100
        height : 200
    }]
});
