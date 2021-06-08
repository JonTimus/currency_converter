# Приложение для конвертирования валют.

## Для получения текущих курсов найдите и используйте любое отрытое API.

# Used API: https://exchangeratesapi.io/

![alt text](https://github.com/JonTimus/currency_converter/tree/master/public/1.jpg)
![alt text](https://github.com/JonTimus/currency_converter/tree/master/public/2.jpg)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

## TASK:

Приложение должно состоять из двух страниц:

1. Конвертер из одной валюты в другую. На этой странице должно быть текстовое поле, в которое можно ввести текст в виде 15 usd in rub и получить результат.
2. Страница с текущими курсами валют. На этой странице пользователь должен видеть «свежие» курсы валют относительно базовой валюты — например, если базовая валюта — рубль, то пользователь видит, что 1 USD = 63.49 RUB, а 1 EUR = 72.20 и тд.

По-умолчанию у пользователя должна определяться «базовая» валюта, которую он может настроить.
Страница должна обновляться каждые 15 секунд.

Плюсом будет:

- Хорошо продуманный интерфейс и внешний вид
- Тесты
- Продуманная архитектура

Для реализации используйте

- React
- Библиотеку для работы с состоянием (Effector/Redux)
- Любые библиотеки, которые считаете уместными - Загрузите решение в частное репозиторий GutHub и отправьте ссылку
