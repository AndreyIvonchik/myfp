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
                            autoSelect: true,
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
                            width: 160,
                            name: 'radioBtnType',
                            items: [
                                {boxLabel: 'to rent', inputValue: 'rent'},
                                {boxLabel: 'to sale', inputValue: 'buy'}
                            ],
                            simpleValue: true,
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
                            tooltip: 'Show favorites',
                            handler: 'loadLocalStorage',
                            iconCls: 'x-fa fa-star',
                        },
                        {
                            xtype: 'button',
                            tooltip: 'Clear favorites',
                            handler: 'clearStorage',
                            iconCls: 'x-fa fa-trash',
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
                    ui: 'test-ui-panel',
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
                                fieldLabel: 'Prise'
                            },
                            items: [{
                                xtype: 'numberfield',
                                name: 'minPriceField',
                                fieldLabel: 'Start',
                                margin: '0 5 5 0',
                                bind: {
                                    value: '{minPriceField}'
                                }
                            }, {
                                xtype: 'numberfield',
                                name: 'maxPriceField',
                                fieldLabel: 'End',
                                bind: {
                                    value: '{maxPriceField}'
                                }
                            }]
                        },
                        {
                            xtype: 'multislider',
                            fieldLabel: 'Bathrooms',
                            name: 'Bathrooms',
                            labelAlign: 'top',
                            width: '100%',
                            values: [0, 15],
                            increment: 1,
                            minValue: 0,
                            maxValue: 15,
                            bind: {
                                value: '{bathroomsValues}'
                            }
                        },
                        {
                            xtype: 'multislider',
                            fieldLabel: 'Bedrooms',
                            name: 'Bedrooms',
                            labelAlign: 'top',
                            width: '100%',
                            values: [0, 15],
                            increment: 1,
                            minValue: 0,
                            maxValue: 15,
                            bind: {
                                value: '{bedroomsValues}'
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Clear All',
                            width: '100%',
                            handler: 'clearFilter'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    name: 'mainPanel',
                    waitMsgTarget: true,
                    collapsible: false,
                    region: 'center',
                    autoScroll: true,
                    ui: 'test-ui-panel',
                    bind: {
                        title: '{mainTitle}',
                        data: '{recordsStore}',
                    },
                    listeners: {
                        click: {
                            element: 'body',
                            fn: 'clickRecord'
                        }
                    },
                    tpl: `
                       <tpl for=".">
                                <div id="{#}" name="card" class="card horizontal">
                                    <div class="card-image">
                                        <img src="{img_url}">
                                    </div>
                                    <div class="card-stacked">
                                        <div class="card-content">                                            
                                            <p class="title">{title}</p>
                                            <p class="price">{price_formatted}</p>
                                            <p class="descr">{summary}</p>
                                            <tpl if="values.favorite"> 
                                                <button id="dellFavorite" class="btnFavoriteDell">Delete favorite</button>
                                            <tpl else>
                                                <button id="addFavorite" class="btnFavorite">Add favorite</button>
                                            </tpl>                                           
                                        </div>  
                                    </div>
                                </div>           
                        </tpl>`
                },
                {
                    xtype: 'container',
                    region: 'south',
                    layout: 'hbox',
                    bind:{
                      hidden: '{!showPagination}'
                    },
                    items:[
                        {
                            xtype: 'button',
                            tooltip: 'Previous page',
                            name: 'pagePrev',
                            handler: 'clickPagination',
                            iconCls: 'x-fa fa-chevron-left',
                        },
                        {
                          xtype: 'displayfield',
                          margin: '0 5',
                          bind: {
                              value: '{page}'
                          }
                        },
                        {
                            xtype: 'button',
                            name: 'pageNext',
                            tooltip: 'Next page',
                            handler: 'clickPagination',
                            iconCls: 'x-fa fa-chevron-right',
                        }
                    ]

                }
            ]
        }
    ]
});
