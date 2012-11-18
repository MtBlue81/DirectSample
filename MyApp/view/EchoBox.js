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
                        Ext.Msg.alert(ret);
                    });
                }
            }
        }
    }, {
        xtype : 'button',
        text  : 'Who?',
        handler : function(btn) {
            EchoClass.who(function(ret) {
                Ext.Msg.alert(ret);
            });
        }
    }]
});
