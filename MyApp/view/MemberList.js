Ext.define('MyApp.view.MemberList', {

    alias  : 'widget.myapp-member-list',

    extend : 'Ext.grid.Panel',

    // 動的ローディング用
    requires : [
        'Ext.grid.plugin.RowEditing',
        'Ext.selection.RowModel',
        'MyApp.view.SectionCombo',
        'MyApp.view.ConditionCombo'
    ],

    dockedItems : [{

        xtype : 'toolbar',

        dock  : 'top',

        defaults : { // 下位部品のデフォルトセッティング
            scale : 'medium',
            width : 60,
            xtype : 'button'
        },

        items : ['->', { // 右寄せ

            // 追加ボタン
            iconCls  : 'icon-add',

            action   : 'add',

            text     : '追加'

        }, {

            // 削除ボタン
            iconCls  : 'icon-delete',

            action   : 'delete',

            disabled : true,

            text     : '削除'
        }]
    }],

    frame   : true,

    // 選択モデル
    selType : 'rowmodel',

    store   : 'Members',

    columns : [{
        dataIndex : 'section',
        header    : '部署',
        editor    : 'section-combo',
        width     : 120
    }, {
        dataIndex : 'name',
        header    : '名前',
        editor    : 'textfield',
        flex      : 1.0
    }, {
        dataIndex : 'offence',
        header    : '攻撃力',
        editor    : 'slider',
        flex      : 0.8
    }, {
        dataIndex : 'defence',
        header    : '防御力',
        editor    : 'slider',
        flex      : 0.8
    }, {
        dataIndex : 'speed',
        header    : 'スピード',
        editor    : 'slider',
        flex      : 0.8
    }, {
        dataIndex : 'condition',
        header    : '状態',
        editor    : 'condition-combo',
        width     : 50
    }, {
        dataIndex : 'birth',
        xtype     : 'datecolumn',
        format    : 'Y-m-d',
        header    : '誕生日',
        editor    : 'datefield',
        width     : 100
    }, {
        dataIndex : 'note',
        header    : 'ひとこと',
        editor    : 'textfield',
        flex      : 2
    }],

    plugins : [Ext.create('Ext.grid.plugin.RowEditing')]

});
