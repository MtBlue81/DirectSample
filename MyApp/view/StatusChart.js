Ext.define('MyApp.view.StatusChart', {
    alias     : 'widget.status-chart',
    extend    : 'Ext.chart.Chart',
    axes: [{
        type: 'Radial',
        position: 'radial',
        maximum : 100,
        label: {
            display: true
        }
    }],
    insetPadding: 50,
    animate : true,
    store : Ext.create('Ext.data.JsonStore', {
        fields: ['name', 'value', 'label'],
        data: [
            {'name': 'offence', 'label':'攻撃力'},
            {'name': 'deffence', 'label':'防御力'},
            {'name': 'speed', 'label':'スピード'},
            {'name': 'condition', 'label':'状態'},
        ]
    }),
    series: [{
        type: 'radar',
        xField: 'label',
        yField: 'value',
        highlight: true,
        showInLegend: true,
        showMarkers: true,
        markerConfig: {
            radius: 5,
            size: 5
        },
        style: {
            'stroke-width': 2,
            fill: 'none'
        }
    }]
});
