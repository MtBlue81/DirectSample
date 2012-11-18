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
            ['第一開発部'],
            ['第二開発部'],
            ['第三開発部'],
            ['第四開発部'],
            ['第五開発部'],
            ['事業推進室'],
            ['企画営業部'],
            ['経理部'],
            ['業務部'],
            ['総務部'],
            ['管理部'],
            ['その他']
        ]
    })
});
