Ext.define('MyApp.controller.Members', {

    extend: 'Ext.app.Controller',

    views : ['Footer', 'MemberList', 'Header'],

    refs  : [{
        ref     : 'list',
        selector: 'myapp-member-list'
    }],

    init : function() {
        var me = this;

        me.getController('Buttons').on({
            'clickadd' : function(btn) {
                var st = me.getList().getStore(),
                    member = Ext.ModelManager.create({}, 'MyApp.model.Member');
                st.add(member); // add empty data
            },
            'clickdelete' : function(btn) {
                var st = me.getList().getStore(),
                    sel = me.getList().getSelectionModel().getSelection()[0];
                st.remove(sel);
            }
        });
    }
});
