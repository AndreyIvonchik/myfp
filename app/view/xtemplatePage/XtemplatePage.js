Ext.define('QuickStart.view.xtemplatePage.XtemplatePage', {
    extend: 'Ext.container.Container',
    xtype: 'xtemplate-page',

    controller: 'xtemplate-page',

    layout: {
        type: 'hbox'
    },
    padding: '20 20 20 20',
    items: [
        {
            xtype: 'box',
            width: '50%',
            data: [
                {
                    title: 'Номер судебного дела',
                    value: '123123123',
                    type: 'text'
                },
                {
                    title: 'Электронная карточка дела',
                    value: 'werfwerf.ru',
                    type: 'link'
                },
                {
                    title: 'Вероятность благоприятного исхода в %',
                    value: 'Средняя (от 50-80%)',
                    type: 'text'
                }
                ,
                {
                    title: 'Обоснование вероятности',
                    value: 'цукуккцу',
                    type: 'text'
                },
                {
                    title: 'Примечания по делу',
                    value: 'фыввфы',
                    type: 'text'
                },
                {
                    title: 'Дело исключено из КПЭ',
                    value: false,
                    type: 'checkBox'
                },
                {
                    title: 'Признак прекращения дела до подачи в суд',
                    value: false,
                    type: 'checkBox'
                },
                {
                    title: 'Причина прекращения дела до подачи в суд',
                    value: '3333',
                    type: 'text'
                },
                {
                    title: 'Ответственное подражделение',
                    value: '1',
                    type: 'text'
                }
            ],
            margin: '0 5 0 0',
            tpl: `
                <tpl for=".">
                <div>
                    <div style="border-bottom: 1px inset grey; padding: 10px 0">          
                        <tpl if="values.type === 'text'">
                            <div style="color: #7b7b7b">{title}</div>
                            <div style="color: #0c6eb5">{value}</div>
                        <tpl elseif="values.type === 'checkBox'">
                            <p></p>
                            <input style="border-radius: 25px; border: 1px inset #0e5284" <tpl if="values.value">checked</tpl> id="input" type="checkBox" disabled>
                            <span style="color: #7b7b7b">{title}</span>
                        <tpl elseif="values.type === 'link'">
                            <div style="color: #7b7b7b">{title}</div>
                            <a style="color: #0c6eb5" href="{value}" style="display:block;">{value}</a>
                        </tpl>            
                   </div>
                </div>
                </tpl>`
        },
        {
            xtype: 'box',
            width: '50%',
            data: [
                {
                    title: 'Нормативный срок подачи документов',
                    value: '19.12.2018',
                    type: 'text'
                },
                {
                    title: 'Внутренний срок подачи документов',
                    value: '18.12.2018',
                    type: 'text'
                },
                {
                    title: 'Виртуальный иск',
                    value: true,
                    type: 'checkBox'
                }
                ,
                {
                    title: 'Округ',
                    value: 'Западный',
                    type: 'text'
                },
                {
                    title: 'Категория контроля',
                    value: 'Иное',
                    type: 'text'
                },
                {
                    title: 'Признак необходимости занесения дела в РСД',
                    value: false,
                    type: 'checkBox'
                },
                {
                    title: 'Дата внесения дела в РСД',
                    value: '01.02.2019',
                    type: 'text'
                },
                {
                    title: 'Признак рассмотрения дела в порядке заочного производства',
                    value: false,
                    type: 'checkBox'
                },
                {
                    title: 'Код доступа (для дел в порядке упрощённого производства)',
                    value: '333',
                    type: 'text'
                },
                {
                    title: 'Срок представления основных документов',
                    value: '09.02.2019',
                    type: 'text'
                },
                {
                    title: 'Срок представления дополнительных документов',
                    value: '16.02.2019',
                    type: 'text'
                }
            ],
            margin: '0 0 0 5',

            tpl: `
                <tpl for=".">
                <div>
                    <div style="border-bottom: 1px inset grey; padding: 10px 0">          
                        <tpl if="values.type === 'text'">
                            <div style="color: #7b7b7b">{title}</div>
                            <div style="color: #0c6eb5">{value}</div>
                        <tpl elseif="values.type === 'checkBox'">
                            <p></p>
                            <input <tpl if="values.value">checked</tpl> id="input" type="checkBox" disabled >
                            <span style="color: #7b7b7b">{title}</span>
                        <tpl elseif="values.type === 'link'">
                            <div style="color: #7b7b7b">{title}</div>
                            <a id="input" href="{value}" style="display:block;">{value}</a>
                        </tpl>            
                   </div>
                </div>
                </tpl>`
        }
    ]
});