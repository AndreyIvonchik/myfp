Ext.define('QuickStart.view.Modal.ModalController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.Modal',

    clickSave: function () {
        let vm = this.getViewModel(),
            description = vm.get('description'),
            shortDescription = vm.get('shortDescription'),
            store = vm.get('toDoList'),
            initId = 1,
            view = this.getView(),
            selToDoItem = vm.get('selToDoItem');

        if(vm.get('isEdit')){
            selToDoItem.set('description', description);
            selToDoItem.set('shortDescription', shortDescription);
        } else {
            while(store.query('taskId', initId).items.length){
                initId = Math.floor(Math.random() * 10000);
            }
            store.add({
                taskId: initId,
                shortDescription: shortDescription,
                description: description,
                date: Ext.Date.format(new Date(), 'd.m.y'),
                status: 3
            });
        }
        view.saveToLs();
        view.close();
    }
});
