export default {
  sections: [
    {
      id: 0,
      name: 'Обязательные для всех',
      tags: ['Документы, обязательные для всех сотрудников без исключения'],
      markers: ['#FF238D', '#FFB800', '#FF8D23'],
      actions: [{ name: 'edit', disabled: false }, { name: 'delete', disabled: true }, { name: 'move', disabled: false }],
      type: 'section',
      children: [
        {
          id: 12,
          name: 'Паспорт',
          tags: ['Для всех'],
          markers: ['#00C2FF'],
          actions: [{ name: 'edit', disabled: false }, { name: 'delete', disabled: false }, { name: 'move', disabled: false }],
          type: 'document',
          labels: ['Обязательный']
        },
        {
          id: 13,
          name: 'ИНН',
          markers: ['#0066FF', '#8E9CBB'],
          tags: ['Для всех'],
          actions: [{ name: 'edit', disabled: false }, { name: 'delete', disabled: false }, { name: 'move', disabled: false }],
          type: 'document',
          labels: ['Обязательный']
        },
      ]
    },
    {
      id: 5,
      name: 'Обязательные для трудоустройства',
      tags: ['Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж'],
      actions: [{ name: 'edit', disabled: false }, { name: 'delete', disabled: false }, { name: 'move', disabled: false }],
      type: 'section',
      children: [
        {
          id: 32,
          name: 'Справка 1',
          tags: ['Для всех'],
          markers: ['#00C2FF'],
          actions: [{ name: 'edit', disabled: false }, { name: 'delete', disabled: false }, { name: 'move', disabled: false }],
          type: 'document',
          labels: ['Обязательный']
        },
        {
          id: 23,
          name: 'Справка 2',
          markers: ['#0066FF', '#8E9CBB'],
          tags: ['Для всех'],
          actions: [{ name: 'edit', disabled: false }, { name: 'delete', disabled: false }, { name: 'move', disabled: false }],
          type: 'document',
          labels: ['Обязательный']
        },
      ]
    },
    {
      id: 115,
      name: 'Специальные',
      tags: [],
      actions: [{ name: 'edit', disabled: false }, { name: 'delete', disabled: false }, { name: 'move', disabled: false }],
      type: 'section',
      children: [
        {
          id: 2093,
          name: 'Диплом',
          markers: ['#0066FF', '#8E9CBB'],
          tags: ['Для всех'],
          actions: [{ name: 'edit', disabled: false }, { name: 'delete', disabled: false }, { name: 'move', disabled: false }],
          type: 'document',
          labels: ['Обязательный']
        }
      ]
    }
  ],
  documents: [
    {
      id: 1,
      name: 'Тестовое задание кандидата',
      tags: ['Россия', 'Белоруссия', 'Украина', 'администратор филиала', 'повар-сушист', 'повар-пиццмейкер', 'повар горячего цеха'],
      actions: [{ name: 'edit', disabled: false }, { name: 'delete', disabled: false }, { name: 'move', disabled: false }],
      type: 'document',
    },
    {
      id: 2,
      name: 'Трудовой договор',
      markers: ['#0066FF', '#8E9CBB'],
      actions: [{ name: 'edit', disabled: false }, { name: 'delete', disabled: false }, { name: 'move', disabled: false }],
      type: 'document'
    },
    {
      id: 3,
      name: 'Мед. книжка',
      actions: [{ name: 'edit', disabled: false }, { name: 'delete', disabled: false }, { name: 'move', disabled: false }],
      type: 'document'
    }
  ]
};