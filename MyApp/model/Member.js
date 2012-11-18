Ext.define('MyApp.model.Member', {
    extend     : 'Ext.data.Model',
    fields     : [
        {name: 'section'   , type: 'string', defaultValue: 'その他'},
        {name: 'name'      , type: 'string'},
        {name: 'offence'   , type: 'int'},
        {name: 'defence'   , type: 'int'},
        {name: 'speed'     , type: 'int'},
        {name: 'condition' , type: 'string', defaultValue: '好調'},
        {name: 'birth'     , type: 'date'},
        {name: 'note'      , type: 'string'}
    ]
});
