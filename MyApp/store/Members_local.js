Ext.define('MyApp.store.Members', {
    extend : 'Ext.data.Store',
    autoLoad : true,
    autoSync : true,
    model  : 'MyApp.model.Member',
    proxy  : {
        type : 'localstorage',
        reader : {
            type : 'json',
            root : 'data',
            successProperty : 'success'
        }
    }
});
