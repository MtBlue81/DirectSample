Ext.define('MyApp.store.Members', {
    extend : 'Ext.data.Store',
    autoLoad : true,
    autoSync : true,
    model  : 'MyApp.model.Member',
    proxy  : {
        type : 'direct',
        api  : {
            create  : Members.add,
            read    : Members.getAll,
            update  : Members.update,
            destroy : Members.remove
        },
        reader : {
            type : 'json',
            root : 'data',
            successProperty : 'success'
        }
    }
});
