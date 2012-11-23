Ext.define('MyApp.view.SectionCombo', {

    alias     : 'widget.section-combo',

    extend    : 'Ext.form.ComboBox',

    queryMode : 'local',

    editable  : false,

    valueField    : 'section',

    displayField  : 'section',

    triggerAction : 'all',

    xtype : 'combo',

    store : new Ext.data.ArrayStore({
        fields : [
            'section'
        ],
        data : [
            ['NERV(パイロット)'],
            ['NERV(おとなのひとたち)'],
            ['普通の中学生'],
            ['不思議なひと']
        ]
    })
});
