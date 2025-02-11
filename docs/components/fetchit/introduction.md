# Введение

В **CMS/CMF MODX Revolution** есть компонент [FormIt](https://github.com/Sterc/FormIt), который реализует отправку и обработку форм, но он работает стандартным методом браузера, т.е. с перезагрузкой страницы. Но современный веб требователен и прогрессивным шагом является их обработка "на лету". Именно для этих задач нужен **FetchIt** который использует **FormIt**, но Вы сможете использовать и свой скрипт.

## Преимущества

Для таких целей есть компонент [AjaxForm](https://github.com/modx-pro/AjaxForm) (хоть **FetchIt** по серверной части практически 1 в 1), но у **FetchIt** есть ряд преимуществ:

## Никаких зависимостей

**FetchIt** не имеет никаких зависмостей, тогда как у **AjaxForm** их три: Большая библиотека [jquery](https://github.com/jquery/jquery) и плагины к нему [jquery-form](https://github.com/jquery-form/form/) и [jGrowl](https://github.com/stanlemon/jGrowl).

Если с последним особых проблем нет (можно переопределить методы для показа уведомлений), то с двумя другими сложнее.

## Современный код

Минифицированный скрипт весит 5 килобайт и сниппет регистрирует его с атрибутом `defer` тем самым не мешая загрузке страницы.

## Удобство

Встраивание вашей вёрстки, добавление всплывающих сообщений и модальных окон, это задачи которые Вы сможете решить очень просто.
