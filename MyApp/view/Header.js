Ext.define('MyApp.view.Header', {

    alias: 'widget.myapp-header',

    extend: 'Ext.container.Container',

    layout: {
        type : 'hbox',
        pack : 'center'
    },

    items :[{

        xtype : 'container',

        html : {
            html : 'テストアプリ',
            tag  : 'h1'
        }

    }]
});
