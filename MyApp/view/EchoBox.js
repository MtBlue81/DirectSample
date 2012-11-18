Ext.define('MyApp.view.EchoBox', {

    alias  : 'widget.myapp-echobox',

    extend : 'Ext.Panel',

    frame : true,

    title : 'ダイレクト呼び出し確認',

    layout: 'vbox',

    items : [{

        xtype : 'textfield',

        fieldLabel : 'Echo',

        enableKeyEvents : true,

        listeners : {

            specialkey : function(p, evt) {

                if (evt.getKey() == evt.ENTER) {
                    EchoClass.call(p.getValue(), function(ret) {
                        Ext.Msg.alert("ECHO", ret);
                    });
                }

            }
        }
    }, {

        xtype : 'button',

        text  : 'Server Info',

        handler : function(btn) {

            EchoClass.who(function(ret) {
                var contents = "",
                    template = new Ext.XTemplate(
                    '<div>',
                    '{key}:{value}',
                    '</div>'
                );

                Ext.iterate(ret, function(key, value) {
                    contents += template.apply({
                        key   : key,
                        value : value
                    });
                });

                Ext.Msg.alert("Server Info", contents);
            });

        }
    }]
});
