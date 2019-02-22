Ext.define('QuickStart.view.nestoriaDescription.NestoriaDescription', {
    extend: 'Ext.window.Window',

    controller: 'nestoria-description',

    xtype: 'nestoria-description',
    width: '80%',
    //height: 300,
    //minWidth: 300,
    //minHeight: 220,
    layout: 'hbox',
    items: [
        {
            xtype: 'image',
            height: 200,
            width: 300,
            bind: {
                src: '{img}',
            }
        },
        {
            xtype: 'container',
            flex: 1,
            layout: 'vbox',
            padding: '5 5',
            items: [
                {
                    xtype: 'displayfield',
                    bind: {
                        value: 'Bedrooms: {bedrooms}'
                    }
                },
                {
                    xtype: 'displayfield',
                    bind: {
                        value: 'Bathrooms: {bathrooms}'
                    }
                },
                {
                    xtype: 'displayfield',
                    cls: 'price',
                    bind: {
                        value: '{price}'
                    }
                },
                {
                    xtype: 'displayfield',
                    bind: {
                        value: '{descr}'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Open site',
                    bind: {
                        href: '{urlSite}'
                    },
                    handler: function () {
                        if (this.href) {
                            window.location.href = this.href;
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Open google maps',
                    bind: {
                        href: '{urlMaps}'
                    },
                    handler: function () {
                        if (this.href) {
                            window.location.href = this.href;
                        }
                    }
                }
            ]
        },

    ]
});
