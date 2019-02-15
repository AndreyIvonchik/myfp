Ext.define('QuickStart.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    routes: {
        'description/:id': {
            action: 'showDescription'
        },
        'home': {
            action: 'showMainPage'
        }
    },

    showMainPage: function () {
        let mainAppContainer = this.getView(),
            vm = this.getViewModel(),
            self = this;
        mainAppContainer.removeAll();
        vm.set('selToDoItem', null);
        this.loadLocalStorage();
        mainAppContainer.add({
            xtype: 'main-page',
            title: 'ToDo List',
            saveToLs: self.saveLocalStorage,
            viewModel: {
                parent: vm
            }
        });
        mainAppContainer.add({
            xtype: 'xtemplate-page',
            title: 'XTemplate'
        });
        mainAppContainer.add({
            xtype: 'nestoria-page',
            title: 'Nestoria'
        });
    },

    showDescription: function (id) {
        let mainAppContainer = this.getView(),
            vm = this.getViewModel(),
            store = vm.get('toDoList'),
            record = store.query('taskId', id).first();
        mainAppContainer.removeAll();
        mainAppContainer.add({
            xtype: 'description-page',
            viewModel: {
                data: {
                    shortDescription: record.get('shortDescription'),
                    description: record.get('description'),
                    date: record.get('date'),
                    status: record.get('status')
                }
            }
        });
    },

    saveLocalStorage: function () {
        let vm = this.getViewModel(),
            store = vm.get('toDoList'),
            array = [];
        Ext.Array.each(store.data.items, function (item) {
            let itm = Ext.clone(item.getData());
            delete itm.id;
            array.push(itm);
        });
        localStorage.setItem('toDoListStore', Ext.JSON.encode(array));
    },

    loadLocalStorage: function () {
        let vm = this.getViewModel(),
            store = vm.get('toDoList'),
            array = Ext.JSON.decode(localStorage.getItem('toDoListStore'));
        store.removeAll();
        store.add(array);
    }
});
