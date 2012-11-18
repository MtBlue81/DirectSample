Ext.define('MyApp.view.Footer', {
    alias    : 'widget.myapp-footer',
    extend   : 'Ext.Panel',
    requires : [
       'MyApp.view.EchoBox',
       'MyApp.view.StatusChart'
    ],
    hideHeaders : true,
    frame : true,
    layout: 'hbox',
    items : [{
        xtype : 'status-chart',
        flex  : 1,
        height: 300
    }, {
        xtype : 'myapp-echobox',
        flex  : 1
    }]
});
