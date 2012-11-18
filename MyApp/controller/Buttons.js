Ext.define('MyApp.controller.Buttons', {

    extend : 'Ext.app.Controller',

    views  : ['MemberList'],

    refs   : [{
        ref     : 'list',
        selector: 'myapp-member-list'
    }],

    init : function() {
        var me = this;

        me.control({
            'myapp-member-list toolbar button': {
                click: function(btn) {
                    me.fireEvent('click' + btn.action, me, btn);
                }
            },
           'myapp-member-list': {
                selectionchange : function(sm, sel, opt) {
                    var me = this,
                        btn = me.getList().query('toolbar button[action=delete]')[0];
                    btn.setDisabled(sel.length !== 1);
                }
            }
        });

        me.addEvents('clickadd', 'clickdelete');
    }
});
