Ext.define('MyApp.controller.Footer', {

    extend : 'Ext.app.Controller',

    views  : ['Footer'],

    refs   : [{
        ref     : 'chart',
        selector: 'status-chart'
    }],

    init : function() {
        var me = this;
        me.control({
           'myapp-member-list': {
                afterrender : function(p) {
                    var edit = p.getPlugin();
                    edit.on({
                        edit : function(editor, edit) {
                            var row = edit.store.getAt(edit.rowIdx);
                            me.update(row.data);
                        }
                    });
                },
                selectionchange : function(sm, sel, opt) {
                    var me = this,
                        data = sel[0] ? sel[0].data : {};
                    me.update(data);
                }
            }
        });
    },

    update : function(data) {
        var me = this,
            store = me.getChart().getStore(),
            state = {
            '好調' : 90,
            '微妙' : 60,
            '不調' : 20
        };
        store.loadData([
            {'name': 'offence',   'label':'攻撃力',   'value':data.offence},
            {'name': 'deffence',  'label':'防御力',   'value':data.defence},
            {'name': 'speed',     'label':'スピード', 'value':data.speed},
            {'name': 'condition', 'label':'状態',     'value':state[data.condition]}
        ]);
    }
});
