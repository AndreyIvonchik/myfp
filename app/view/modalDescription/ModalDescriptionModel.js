Ext.define('QuickStart.view.modalDescription.ModalDescriptionModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.description-page',

    data: {
        setStatus: null
    },

    formulas: {
        setStatus: {
            bind: {
                val1: '{status}'
            },
            get: function (data) {
                switch (+data.val1){
                    case 1:
                        return '<span style="color: #dfe40b;">В прогрессе</span>';
                        break;
                    case 0:
                        return '<span style="color: #47c309;">Выполнено</span>';
                        break;
                    default:
                        return '<span style="color: #0a04f5;">Открыто</span>';;
                        break;
                }
            }
        }
    }
});
