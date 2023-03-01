# Test task Foquz

![Task image](https://monosnap.com/file/OvcPxTUlCR9ODYvjgH2FCLBugo4MqY)

## Task inforamtion
### General
1. Для разработки использовать vue.js
2. Действия должны быть плавными.
3. Только для десктопа, адаптив в рамках этой задачи - не нужен.
### Description
1. Нужно сделать вёрстку раздела [*Документы*](https://monosnap.com/file/OvcPxTUlCR9ODYvjgH2FCLBugo4MqY)
2. На первом уровне отображаются [категории](https://monosnap.com/file/Bh6XyfVF5cAetlXLqyo8nwAN68McjT), которые можно свернуть и развернуть. На первом уровне также отображаются элементы, которые не относятся к категориям и отображаются [внизу списка с категориями](https://monosnap.com/file/Othwx39qWtvauiRTlXieEeHHa19VWk).
3. Для каждого элемента в списке отображаются кнопки:[ *Удалить*, *Редактировать*, *Переместить*](https://monosnap.com/file/fnCas4tx2zyJpHYqFYleCRoc4Fk4Qz)
4. В рамках задачи нужно добавить функционал "перемещения элемента в списке":
   * Категории можно перемещать только между собой. Таким образом, с помощью перемещения можно менять порядок;
   * Элементы внутри категории можно перемещать как внутри самой категории, так и между категориями и вытаскивать в список без категории;
   * Перетаскивать элементы в списке можно при клике на кнопку *Переместить*.
https://monosnap.com/file/FkDR93Ek6f3cGf0PpkRkCNAOnjGrya
5. Также нужно добавить поиск по подстроке по названиям категорий и названиям элементов в категории:
   * Поиск должен работать на ввод символов;
   * При вводе хотя бы одного символа показывать кнопку "Сбросить" ("крестик").


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
