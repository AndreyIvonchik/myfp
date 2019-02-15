Ext.define('QuickStart.view.modalDescription.ModalDescription', {
    extend: 'Ext.container.Container',

    viewModel: {
        type: 'description-page'
    },
    controller: 'description-page',

    xtype: 'description-page',
    layout: {
        type: 'fit',
        align: 'middle'
    },
    items: [
        {
            xtype: 'panel',
            bind:{
                title: '{shortDescription}',
                html: '{description}'
            },
            bodyPadding: 10,
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'displayfield',
                            bind:{
                                value: '{date}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            bind:{
                                value: '{setStatus}'
                            }
                        },
                        '->',
                        {
                            xtype: 'button',
                            iconCls: 'x-fa fa-home',
                            handler: 'btnHome',
                            tooltip: 'Домой'
                        }]
                }],
            items: []
        }]
});
