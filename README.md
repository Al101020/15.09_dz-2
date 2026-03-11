# 15.09_dz-2
ДЗ-2 к занятию «React Router»

===
 Общий README.md
React Router
===

Необходимо выполнить и предоставить на проверку следующие задачи:

1. [Меню](menu).
2. [CRUD](crud).
3. [authentication](authentication) — необязательная задача.

Все три задачи лучше сдавать в разных репозиториях, то есть через create-react-app реализовать три проекта, чтобы не
было конфликта стилей. Но если вы позаботитесь о том, что конфликта не будет, то можете сдавать и в одном проекте.

#### Альтернативный способ создания приложения React с использованием тулинга Vite

Приложение также можно создать используя инструмент Vite.
Документация по созданию приложения [React](https://vitejs.dev/guide/).

1. Откройте терминал и пропишите следующую команду: `yarn create vite my-app --template react`,
   либо `yarn create vite my-app --template react-ts`, если
   нужен шаблон с TypeScript. Эта команда создаст настроенный
   шаблонный проект.
2. Откройте созданный проект в своей IDE.
3. Установите зависимости.
4. Готово. Чтобы запустить приложение, введите команду: `yarn dev`(либо `npm run dev`).


================================
2-ое Задание: CRUD
===

Вам необходимо реализовать CRUD при работе с HTTP с использованием Router.

Backend вы можете либо написать сами, либо взять готовый из каталога `backend`.

![CRUD](./src/assets/main.png)

Нас интересует только ID, content и created, в качестве остальных значений вроде имени и фото, можете поставить заглушки.

## Общая механика

При нахождении на странице `/` отображается список существующих постов, GET на адрес http://localhost:7070/posts. Полученные данные отображаются в виде карточек:

![List](./src/assets/main.png)

Кнопка «Создать пост» ведёт на страницу добавления (см. ниже) `/posts/new`. Помните про регулярные выражения.

При клике на саму карточку происходит переход на страницу просмотра поста (см. ниже) `/posts/{postId}`.

### Страница создания

На странице создания `/posts/new` отображается карточка создания:

![New](./src/assets/new.png)

При нажатии на кнопку «Опубликовать» пост сохраняется, после чего осуществляется редирект на главную страницу. POST на адрес http://localhost:7070/posts body: `{"id": 0, "content": "То, что введено в поле ввода"}`.

При нажатии на крестик в верхнем правом углу происходит редирект на главную без сохранения. Advanced: можете сохранить в localStorage и потом вытаскивать оттуда.

### Страница просмотра

На странице просмотра `/posts/{id}` отображается карточка просмотра:

![View](./src/assets/view.png)

При клике на кнопку «Удалить» происходит удаление поста, после чего осуществляется редирект на главную страницу. DELETE на адрес http://localhost:7070/posts/{id}.

При клике на кнопку «Редактировать» карточка просмотра заменяется карточкой редактирования:

![Edit](./src/assets/edit.png)

На карточке редактирования:
* кнопка «Сохранить» приводит к сохранению поста и  отображению карточки просмотра с обновлёнными данными. PUT на адрес http://localhost:7070/posts/{id} body: `{"id": не 0, "content": "То, что введено в поле ввода"}`;
* кнопка крестик приводит к возврату к карточке просмотра.

**Важно**:

1. Не смотрите на то, как это реализовано на Фейсбуке — механика изменена.
1. Но вы можете подглядеть, как пользователю отображается загрузка, сетевые операции добавления, сохранения, удаления.
1. React Router позволяет использовать регулярные выражения в роутах: https://github.com/pillarjs/path-to-regexp/tree/v1.7.0.



2026.03.11
  Установил react-router-dom:
yarn add react-router-dom11

import { useNavigate } from 'react-router-dom';


2026.03.03 
https://learnjs.ru/lessons/fetch/?ysclid=mm9ys66n6334575797

Получил ответ: // []
fetch('http://localhost:7070/posts')
  .then(response => {
    // Проверяем, успешно ли выполнен запрос (статус в диапазоне 200-299)
    if (!response.ok) {
      // Если запрос не успешен, генерируем ошибку с соответствующим статусом
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Парсим ответ в формате JSON и возвращаем результат
    return response.json();
  })
  .then(data => {
    // Обрабатываем данные, полученные от сервера
    console.log(data);
  })
  .catch(error => {
    // Обрабатываем ошибки, возникшие при выполнении запроса
    console.error('Fetch error:', error);
  });

https://skillbox.ru/media/code/html-form-teg-dlya-sozdaniya-form-ego-atributy-metody-otpravki-dannyh/


2026.03.02 - https://blog.skillfactory.ru/marshrutizatsiya-v-react-router/


--------------------------------------------------------------------------------------------
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



_____________________________________________________________________________________

2026.03.06
yarn add uuid
