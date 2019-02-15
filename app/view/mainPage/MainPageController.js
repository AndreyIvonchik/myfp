Ext.define('QuickStart.view.mainPage.MainPageController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-page',

    addEdit: function (btn) {
        let vm = this.getViewModel(),
            item = vm.get('selToDoItem'),
            view = this.getView();
        modal = Ext.create({
            xtype: 'modal',
            title: btn.isEdit ? 'Редактировать' : 'Добавить',
            saveToLs: view.saveToLs,
            viewModel: {
                data: btn.isEdit ? {
                    isEdit: true,
                    shortDescription: item.get('shortDescription'),
                    description: item.get('description')
                } : {},
                parent: vm
            }
        });
        vm.set('shortDescription', null);
        vm.set('description', null);
        modal.show();
    },

    delete: function () {
        let vm = this.getViewModel(),
            selToDoItem = vm.get('selToDoItem'),
            store = vm.get('toDoList'),
            view = this.getView();
        store.remove(selToDoItem);
        view.saveToLs();
    },

    openDescription: function (grid, record) {
        let id = record.get('taskId');
        this.redirectTo('description/' + id);
    },

    renderStatus: function (loader) {
        switch (+loader) {
            case 1:
                return '<span style="color: #dfe40b;">В прогрессе</span>';
                break;
            case 0:
                return '<span style="color: #47c309;">Выполнено</span>';
                break;
            default:
                return '<span style="color: #0a04f5;">Открыто</span>';
                break;
        }
    },

    setStatus: function (btn) {
        let vm = this.getViewModel(),
            selItem = vm.get('selToDoItem'),
            view = this.getView();
        selItem.set('status', +btn.name);
        view.saveToLs();
    },
});
