Ext.define('QuickStart.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    data: {
        selToDoItem: null,
        showStatusProgress: true,
        showStatusDone: true,
        showStatusMenu: false
    },

    formulas: {
        showStatusMenu: {
            bind: {
                item: '{selToDoItem}',
            },
            get: function (data) {

                return (data.item && data.item.get('status'));
            }
        },
        showStatusProgress: {
            bind: {
                item: '{selToDoItem}',
            },
            get: function (data) {
                return (data.item && data.item.get('status') && data.item.get('status') !== 1);
            }
        },

        showStatusDone: {
            bind: {
                item: '{selToDoItem}',
            },
            get: function (data) {
                return (data.item && data.item.get('status') !== 0);
            },
        }
    },

    stores: {
        toDoList: {
            fields: ['taskId', 'shortDescription', 'description', 'date', 'status'],
            data: []
        }
    },
});
