Ext.define('QuickStart.view.Modal.Modal', {
    extend: 'Ext.window.Window',

    viewModel: {
        type: 'Modal'
    },
    controller: 'Modal',
    xtype: 'modal',
    width: 500,
    height: 300,
    minWidth: 300,
    minHeight: 220,
    layout: 'fit',
    plain: true,

    items: [{
        xtype: 'form',

        defaultType: 'textfield',
        fieldDefaults: {
            labelWidth: 60
        },

        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        bodyPadding: 5,
        border: false,

        items: [{
            fieldLabel: 'Краткое описание',
            name: 'shortDescriptionField',
            bind: {
                value: '{shortDescription}'
            }
        }, {
            xtype: 'textareafield',
            name: 'descriptionField',
            fieldLabel: 'Описание',
            flex: 1,
            bind: {
                value: '{description}',
            }
        }]
    }],

    buttons: [{
        text: 'Save',
        handler: 'clickSave'
    }]
});
