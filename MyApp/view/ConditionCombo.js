Ext.define('MyApp.view.ConditionCombo', {

    alias     : 'widget.condition-combo',

    extend    : 'Ext.form.ComboBox',

    queryMode : 'local',

    editable  : false,

    valueField    : 'condition',

    displayField  : 'condition',

    triggerAction : 'all',

    xtype : 'combo',

    store : new Ext.data.ArrayStore({
        fields : [
            'condition'
        ],
        data : [
            ['好調'],
            ['微妙'],
            ['不調']
        ]
    })
});
