Ext.define('QuickStart.view.main.Main', {
    extend: 'Ext.tab.Panel',

    viewModel: {
        type: 'main'
    },
    controller: 'main',

    layout: {
        type: 'fit',
    },
    items: []
});
