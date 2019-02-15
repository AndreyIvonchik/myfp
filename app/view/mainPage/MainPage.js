Ext.define('QuickStart.view.mainPage.MainPage', {
    extend: 'Ext.container.Container',
    xtype: 'main-page',

    controller: 'main-page',

    layout: {
        type: 'fit'
    },
    items: [
        {
            xtype: 'panel',
            layout: {
                type: 'fit'
            },
            defaults: {
                width: '80%'
            },
            items: [
                {
                    xtype: 'grid',
                    padding: '20 20 20 20',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'top',
                            items: [
                                'Список задач',
                                '->',
                                {
                                    xtype: 'button',
                                    iconCls: 'x-fa fa-check',
                                    tooltip: 'Статус',
                                    menu: [{
                                        text: 'В прогрессе',
                                        name: '1',
                                        bind: {
                                            hidden: '{!showStatusProgress}'
                                        },
                                        handler: 'setStatus'
                                    }, {
                                        text: 'Выполнено',
                                        name: '0',
                                        bind: {
                                            hidden: '{!showStatusDone}'
                                        },
                                        handler: 'setStatus'
                                    }],
                                    bind: {
                                        disabled: '{!showStatusMenu}'
                                    }
                                },
                                '-',
                                {
                                    xtype: 'button',
                                    iconCls: 'x-fa fa-plus',
                                    handler: 'addEdit',
                                    tooltip: 'Добавить'
                                },
                                '-',
                                {
                                    xtype: 'button',
                                    iconCls: 'x-fa fa-edit',
                                    handler: 'addEdit',
                                    disabled: true,
                                    isEdit: true,
                                    tooltip: 'Редактировать',
                                    bind: {
                                        disabled: '{!selToDoItem}'
                                    }
                                },
                                '-',
                                {
                                    xtype: 'button',
                                    iconCls: 'x-fa fa-trash',
                                    handler: 'delete',
                                    disabled: true,
                                    tooltip: 'Удалить',
                                    bind: {
                                        disabled: '{!selToDoItem}'
                                    }
                                }]
                        }],
                    bind: {
                        store: '{toDoList}',
                        selection: '{selToDoItem}'
                    },
                    columns: [
                        {
                            text: 'Описание',
                            dataIndex: 'shortDescription',
                            width: '50%'
                        },
                        {
                            text: 'Дата',
                            dataIndex: 'date',
                            align: 'center',
                            flex: 1
                        },
                        {
                            text: 'Статус',
                            dataIndex: 'status',
                            width: '25%',
                            renderer: 'renderStatus'
                        }
                    ],
                    listeners: {
                        itemdblclick: 'openDescription'
                    }
                }
            ]
        }
    ]
});
