# Вступление

Teleport является расширяемым скриптовым инструментом для работы с одной или несколькими локальными (не облачными) установками MODX Revolution.

Teleport в настоящее время функционирует приемущественно в качестве упаковочного инструмента который расширяет Транспортный API MODX'а и даёт команды для извлечения и инъекций кастомных Слепков сайтов на MODX. Но он может быть легко расширен для выполнения бесконечного множества действий, связанных с MODX.

## Установка

Есть несколько способов установить Teleport для того, чтобы вы могли его использовать. Выбирайте один из:

- [Phar][8] - Самый простой способ начать использовать Teleport это загрузить [последнюю версию `teleport.phar`][11] и положить её в папку где утилита сможет выполнять свою работу. В этом дистрибутиве, Teleport будет пытаться создать поддиректории `profile/` и `workspace/`, где он будет хранить сгенерированные **Профили сайтов** и **Извлечённые** транспортные пакеты, соответственно. Дистрибутив phar включает все зависимости требуемые для использования Teleport'а.
    ::: tip Примечание
    Однако, что вы не можете использовать Teleport HTTP Server из дистрибутива phar; он не включен в Phar.
    :::

- [Releases][9] - Вы можете загрузить любой релиз Teleport в zip или tar.gz формате, распаковать его в подходящей директории (`~/teleport/`), и выполнить `composer install` в этой директории для того чтобы загрузить требуемые зависимости. GitHub релизы проекта [доступны здесь](https://github.com/modxcms/teleport/releases).

- [Git Clone][10] - Разработчики могут клонировать репозиторий teleport в свой собственный форк из GitHub, и выполнить `composer install --dev` в директории проекта для загрузки требуемых зависимостей, в том числе те, которые указаны в require-dev секции файла [`composer.json`](https://github.com/modxcms/teleport/blob/master/composer.json).

## Использование

### Команды

На самом базовом уровне, Вы взаимодействуете с приложением Teleport вызывая опредлённые **Команды** Teleport'а с каким-то количеством аргументов.

В настоящее время, Teleport предусматривает следующие **Команды**:

- [Profile][1] - **Сгенерировать JSON профиль** сайта MODX который может быть использован другими Командами для работы.

- [Extract][2] - **Извлечь** файлы, данные, и/или другие арефакты описанные в [Шаблоне Извлечения (extract tpl)](https://github.com/modxcms/teleport/blob/master/doc/use/extract/tpl.md), из сайта MODX описанного в особом формате, и упаковать его в транспортный пакет, который позже может быть впрыснут (Injected) в любой другой сайт на MODX.

- [Inject][3] - Инъекция (вприскивание) указанного транспортного пакета, сгенерированного с помощью Teleport Extract, в сайт MODX, согласно описанию в заданном **Профиле**.

- [Push][4] - Отправка указанного файла (источника) в указанное назначение.

- [UserCreate][5] - Создать пользователя в сайте MODX согласно описанию в заданном **Профиле**.

- [Packages/GC][6] - Удалить устаревшие версии пакетов из сайта MODX, согласно описанию в заданном **Профиле**.

- [Workspace/GC][7] - Очистить содержимое директории workspace/ в рабочей папке Teleport.

### CLI Запросы в командной строке

Самый простой способ использовать Teleport - вызывать Команды Teleport в командной строке Bash. Смотрите документацию по Командам, чтобы изучить обязательные и необязательные параметры для вызова Команд Teleport.

### Teleport HTTP Server

Teleport (кроме Phar версии) идёт в комплекте с [custom HTTP server](https://github.com/modxcms/teleport/blob/master/doc/use/server.md), построенном на [ReactPHP](http://reactphp.org/) который может работать на любом серверном порту. Это позволяет выполнять Команды Teleport'а через HTTP, минуя тайм-ауты и другие проблемы, которые могут возникать при попытке выполнения длительных процессов с использованием конфигурации обычных веб-серверов.

## Расширенние функционала

Teleport может быть расширен с помощью пары способов. Для лучших результатов, рекомендуется создавать Ваш собственный проект используя Teleport как библиотеку, где вы сможете вести ваши кастомные расширения функционала в системе контроля версий на Ваш выбор.
Простейший способ начать кастомный Teleport проект - с помощью команды Composer'а create-project из пакета modxcms/teleport-project boilerplate.

```shell
php composer.phar create-project --prefer-source --stability=dev modxcms/teleport-project teleport-opengeek/
```

Вы можете найти больше информации о использовании пакета boilerplate в [GitHub project](https://github.com/modxcms/teleport-project "Teleport boilerplate project").

### Кастомные Извлечения

Teleport [Команда Extract](https://github.com/modxcms/teleport/blob/master/doc/use/extract.md) использует JSON [Шаблоны Извлечения (extract tpl)](https://github.com/modxcms/teleport/blob/master/doc/use/extract/tpl.md) чтобы описать как транспортный пакет создаётся из различных ресурсов/объектов сайта MODX. Вы можете легко создать Ваши собственные шаблоны чтобы быстро создавать кастомные пакеты для бесконечного количества целей от бекапирования сайтов до создания своих дополнений и создания вашего специфичного процесса разработки (workflow). Читайте [Создание кастомных Шаблонов Извлечения (Extract Tpls)](https://github.com/modxcms/teleport/blob/master/doc/extend/custom-extract-tpls.md) для большей информации.

### Кастомные команды Teleport'а

В разработке

## Contribute

We welcome all contributions to the Teleport application and library. [Learn more][12] about the variety of ways you can contribute and how.

[1]: https://github.com/modxcms/teleport/blob/master/doc/use/profile.md
[2]: https://github.com/modxcms/teleport/blob/master/doc/use/extract.md
[3]: https://github.com/modxcms/teleport/blob/master/doc/use/inject.md
[4]: https://github.com/modxcms/teleport/blob/master/doc/use/push.md
[5]: https://github.com/modxcms/teleport/blob/master/doc/use/user-create.md
[6]: https://github.com/modxcms/teleport/blob/master/doc/use/packages/gc.md
[7]: https://github.com/modxcms/teleport/blob/master/doc/use/workspace/gc.md
[8]: https://github.com/modxcms/teleport/tree/master/doc/doc/install/phar.md
[9]: https://github.com/modxcms/teleport/tree/master/doc/install/releases.md
[10]: https://github.com/modxcms/teleport/tree/master/doc/install/git-clone.md
[11]: http://modx.s3.amazonaws.com/releases/teleport/teleport.phar
[12]: https://github.com/modxcms/teleport/blob/master/doc/contribute.md
