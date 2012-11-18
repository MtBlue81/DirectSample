Ext.Loader.setConfig({
    enabled: true // これ便利
});
Ext.BLANK_IMAGE_URL = 'MyApp/resources/images/s.gif'; // IE用

Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();
    Ext.direct.Manager.addProvider(Ext.app.REMOTING_API);
});

// アプリケーション設定
Ext.application({

    // アプリケーション名
    name      : 'MyApp',

    // アプリケーションフォルダパス
    appFolder : 'MyApp',

    // 使用コントローラー定義
    controllers : [
        'Footer',
        'Members',
        'Buttons'
    ],

    // 使用ストア定義
    stores : ['Members'],

    // アプリケーション起動時イベントハンドラ
    launch: function() {
        Ext.create('MyApp.view.Viewport');
    }
});

