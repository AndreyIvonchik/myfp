Ext.define('QuickStart.view.nestoriaPage.NestoriaPageModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.nestoria-page',

    data: {
        showSearchBtn: false,
        countryFieldValue: null,
        cityFieldValue: null,
        priceCurr: '$',
        typeValue: 'buy',
        page: 1,
    },

    formulas: {
        showSearchBtn: {
            bind: {
                val1: '{countryFieldValue}',
                val2: '{cityFieldValue}'
            },
            get: function (data) {
                return (data.val1 && data.val2);
            }
        },
    },

    stores: {
        country: {
            fields: [],
            data: [
                {
                    title: 'UK',
                    link: 'nestoria.co.uk'
                },
                {
                    title: 'Deutschland',
                    link: 'nestoria.de'
                },
                {
                    title: 'Brasil',
                    link: 'nestoria.com.br'
                },
                {
                    title: 'Spain',
                    link: 'nestoria.es'
                },
                {
                    title: 'France',
                    link: 'nestoria.fr'
                },
                {
                    title: 'India',
                    link: 'nestoria.in'
                },
                {
                    title: 'Italia',
                    link: 'nestoria.it'
                },
                {
                    title: 'Mexico',
                    link: 'nestoria.mx'
                }
            ]
        },

        records: {
            fields: [],
            data: [],
        }
    }
});
