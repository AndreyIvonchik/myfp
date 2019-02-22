Ext.define('QuickStart.view.nestoriaPage.NestoriaPageModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.nestoria-page',

    data: {
        mainTitle: 'Nestoria',
        showSearchBtn: false,
        countryFieldValue: null,
        cityFieldValue: null,
        typeValue: null,
        minPriceField: 0,
        maxPriceField: 'max',
        bedroomsValues: [0, 15],
        bathroomsValues: [0, 15],
        page: 1,
        showPagination: false

    },

    formulas: {
        showSearchBtn: {
            bind: {
                val1: '{countryFieldValue}',
                val2: '{cityFieldValue}',
                val3: '{typeValue}'
            },
            get: function (data) {
                return (data.val1 && data.val2 && data.val3);
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
    }
});
