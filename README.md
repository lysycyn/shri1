# Приложение для создания и редактирования информации о встречах сотрудников

Написано для Node.js 8 и использует библиотеки:
* express
* sequelize
* graphql

## Задание
Код содержит ошибки разной степени критичности. Некоторых из них стилистические, а некоторые даже не позволят вам запустить приложение. Вам необходимо найти и исправить их.

Пункты для самопроверки:
1. Приложение должно успешно запускаться
2. Должно открываться GraphQL IDE - http://localhost:3000/graphql/
3. Все запросы на получение или изменения данных через graphql должны работать корректно. Все возможные запросы можно посмотреть в вкладке Docs в GraphQL IDE или в схеме (typeDefs.js)
4. Не должно быть лишнего кода
5. Все должно быть в едином codestyle

## Запуск
```
yarn install i
yarn start
```

http://localhost:3000/ - приложение
http://localhost:3000/graphql/ - GraphQL IDE

Для сброса данных в базе (моковые данные свои):
```
yarn reset-db
```

# Выполнение задания
1. После создания дубликата репозитория и установки необходимых библиотек (а также установки eslint для анализа кода на предмет выявления ошибок) была проанализирована структура приложения. При запуске приложения в терминале сразу же вылетела ошибка 'Dialect needs to be explicitly supplied as of v4.0.0', ссылающаяся на библиотеку Sequelize, создание объекта которой выполняется в файле /models/index.js. Показалось странным, что вызов функции-конструктора имеет 3 параметра, хотя в документации на сайте разработчика (http://docs.sequelizejs.com/), а также в исходном коде (файл /node_modules/sequelize/lib/sequelize.js) для создания экземпляра Sequelize необходимо указать 4 параметра. Добавив в начало ещё один параметр (null), приложение запустилось, о чём свидетельствовало успешное отображение "Hello" в браузере, "It works!" в консоли, а также "Express app listening on localhost:3000" в терминале.

2. Следующей проблемой стало отображение GraphQL IDE по адресу http://localhost:3000/graphql/ (в браузере отобразилось "Cannot GET /graphql", а в консоли браузера вылетела куча ошибка, связанных с graphql). Решение проблемы заключалось в переименовании соответствующего роута в файле /index.js: вместо пути "/graphql" был указан "/graphgl". После этого GraphQL IDE стала отображаться по нужному адресу.

3. Следующей частью задания являлось проверка корректности работы всех запросов GraphQL. Т.к. схема данного приложения не большая, можно пройтись по всем запросам вручную и попробовать их вывести в GraphQL IDE. Прежде всего, возникла проблемы при отображении запросов events и rooms - events не выводились вовсе, а rooms выводились со смещением 1. В файле /graphql/resolves/query.js была обнаружена очевидная проблема - в методах Events и Rooms были указаны лишние аргументы.

Следующим шагом стал анализ всей схемы GraphQL. На мой взгляд, стоит немного поменять структуру некоторых типов, описанных в схеме.

Тип User должен иметь обязательное поле homeFloor (следовательно, и UserInput так же должен иметь обязательное поле homeFloor) - это следует сделать для корректного подбора переговорок. Учитывая человеческий фактор при заполнении данных в любой информационной системе, невовремя занесенная информация о расположении сотрудника на том или ином этаже может доставить неудобства при составлении плана заполнения переговорок. Кроме того, абстрагируясь от логики приложения, подобное добавление ограничений на вносимую в БД информацию помогут достигать одного из важнейших критерия оценки качества данных во всей СУБД - полноты. Сразу хочу отметить, что это справедливо только в том случае, если у каждого сотрудника есть закрепленное за ним место и большую часть времени он проводит именно там.

avatarUrl в типе users не должен быть обязательным параметром, т.к. пользователь может быть зарегистрирован в системе без аватарки. Кроме того, UserInput должен содержать поле avatarUrl для возможности добавления аватарки, в противном случае нельзя добавить аватарку пользователю

createEvent в типе Mutation не должен содержать обязательного параметра roomId, т.к. создаваемые встречи не сразу же находят переговорки - можно измениться количество людей, время или же вообще данная встреча удалится.

changeEventRoom в типе Mutation не правильно обновлял информацию о встрече. Проблема заключалась в том, что в методе changeEventRoom модуля /graphql/resolvers/mutation.js не правильно выставлялся id комнаты - передавался id события вместо id комнаты.
