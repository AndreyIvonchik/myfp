Ext.define('QuickStart.view.nestoriaPage.NestoriaPage', {
    extend: 'Ext.container.Container',
    xtype: 'nestoria-page',

    controller: 'nestoria-page',

    viewModel: {
        type: 'nestoria-page'
    },

    layout: {
        type: 'fit'
    },
    padding: '20 20 20 20',
    items: [
        {
            xtype: 'panel',
            layout: 'border',
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'combobox',
                            name: 'countryField',
                            emptyText: 'Select a country...',
                            queryMode: 'local',
                            bind: {
                                value: '{countryFieldValue}',
                                store: '{country}'
                            },
                            displayField: 'title',
                            valueField: 'link'
                        },
                        {
                            xtype: 'textfield',
                            name: 'cityField',
                            emptyText: 'Select a city...',
                            bind: {
                                value: '{cityFieldValue}'
                            }
                        },
                        {
                            xtype: 'radiogroup',
                            width: 150,
                            name: 'radioBtnType',
                            items: [
                                {boxLabel: 'to rent', inputValue: 'rent'},
                                {boxLabel: 'to sale', inputValue: 'buy', checked: true}
                            ],
                            bind: {
                                value: '{typeValue}'
                            }
                        },
                        {
                            xtype: 'button',
                            name: 'searchBtn',
                            iconCls: 'x-fa fa-search',
                            text: 'Search',
                            scale: 'small',
                            iconAlign: 'left',
                            bind: {
                                disabled: '{!showSearchBtn}'
                            },
                            handler: 'onSearchBtn'
                        },
                        '->',
                        {
                            xtype: 'button',
                            handler: 'callbackFunction',
                            iconCls: 'x-fa fa-star',
                        }
                    ]
                },
            ],
            defaults: {
                collapsible: true,
                split: false,
                bodyPadding: 10,
                margin: '5 0 0 0',
            },
            items: [
                {
                    title: 'Filters',
                    region: 'west',
                    collapsed: true,
                    floatable: true,
                    width: 200,
                    minWidth: 100,
                    maxWidth: 250,
                    border: 1,
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            labelAlign: 'top',
                            layout: 'vbox',
                            defaults: {
                                flex: 1,
                                hideLabel: true
                            },
                            bind: {
                                fieldLabel: 'Prise ({priceCurr})'
                            },
                            items: [{
                                xtype: 'numberfield',
                                name: 'minPriceField',
                                fieldLabel: 'Start',
                                margin: '0 5 5 0'
                            }, {
                                xtype: 'numberfield',
                                name: 'maxPriceField',
                                fieldLabel: 'End'
                            }]
                        },
                        {
                            xtype: 'slider',
                            fieldLabel: 'Bathrooms',
                            labelAlign: 'top',
                            width: '100%',
                            values: [1, 15],
                            increment: 1,
                            minValue: 0,
                            maxValue: 15,
                        },
                        {
                            xtype: 'slider',
                            fieldLabel: 'Bedrooms',
                            labelAlign: 'top',
                            width: '100%',
                            values: [1, 15],
                            increment: 1,
                            minValue: 0,
                            maxValue: 15,
                        },
                        {
                            xtype: 'button',
                            text: 'Clear All',
                            width: '100%'
                        }
                    ]
                },
                {
                    title: 'Lol',
                    collapsible: false,
                    region: 'center',
                    html: '<h2>Main Page</h2><p>This is where the main content would go</p>'
                }
            ]
        }
    ]
});