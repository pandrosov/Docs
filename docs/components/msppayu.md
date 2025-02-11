---
title: mspPayU
description: Оплата заказов miniShop2 через платежный сервис PayU
logo: https://modstore.pro/assets/extras/msppayu/logo-lg.jpg
author: alroniks
modstore: https://modstore.pro/packages/payment-system/msppayu

dependencies: miniShop2
categories: payment
---

# mspPayU

## Начало работы

[Скачать модуль mspPayU][1] можно в Магазине MODX Дополнений Simple Dream.

Для того, чтобы принимать оплату с помощью PayU, Вам необходимо сначала подать заявку на [регистрацию в системе][2].

Помощь по интеграции модуля оплаты на сайт вы можете получить через [службу технической поддержки][3] либо напрямую у [разработчика в Минске][4]. Так же вы можете обращаться в [техническую поддержку сервиса PayU][5], очень адекватные ребята. А еще у них [очень хорошая документация][6] по работе с их системой.

## Настройка PayU

::: warning Важно
Для проверки механизма платежей пользуйтесь только тестовым окружением.
:::

### Базовая схема интеграции интернет-магазина с PayU

[![](https://file.modx.pro/files/d/9/c/d9c179cafdf0260dfc2575457f9b212as.jpg)](https://file.modx.pro/files/d/9/c/d9c179cafdf0260dfc2575457f9b212a.png)

1. Переход покупателя на интернет-сайт продавца, формирование «корзины покупок».
2. Переход покупателя на сайт PayU для осуществления оплаты заказа.
3. Нотификация системы продавца об успешной авторизации оплаты. Ответ системы продавца об успешном получении данного уведомления.
4. Запрос в PayU от системы продавца на подтверждение оплаты покупателя. Ответ от PayU об успешном выполнении данного запроса.
5. _Выполняется в случае необходимости возврата. Запрос в PayU от системы продавца на отмену оплаты покупателя (возврат). Ответ от PayU об успешном выполнении данного запроса._ (в данном модуле пока не поддерживается)

Если упростить, то схема сводится к тому, что сначала на сайте формируется LU-запрос с данными о платеже и отправляется в PayU, где он проверяется, обрабатывается и затем PayU со своей стороны пытается вызвать callback-ссылку, чтобы сообщить о результатах платежа вашему сайту.

[![](https://file.modx.pro/files/f/c/b/fcb28633348063f0b3a385040dfea9a3s.jpg)](https://file.modx.pro/files/f/c/b/fcb28633348063f0b3a385040dfea9a3.png)

Важным в данном случае правильно заполнить адрес страницы вашего сайта, куда должны проходить IPN-уведомления со стороны PayU. Это делается в настройках PayU в личном кабинете по ссылке <https://secure.payu.ru/cpanel/ipn_settings.php>.

[![](https://file.modx.pro/files/3/c/1/3c1e611a4e694cc324d623a3bc3df77ds.jpg)](https://file.modx.pro/files/3/c/1/3c1e611a4e694cc324d623a3bc3df77d.png)

Адрес должен быть вида `http://site.ru/assets/components/minishop2/payment/payu.php?action=notify`, где site.ru - адрес вашего сайта.

## Установка и настройка пакета в MODX

При установке необходимо ввести реквизиты для начала работы с платежной системой PayU в MODX.

[![](https://file.modx.pro/files/1/a/0/1a088a923675b6d333890e226ad8857fs.jpg)](https://file.modx.pro/files/1/a/0/1a088a923675b6d333890e226ad8857f.png)

1. Идентификатор мерчанта — это ID магазина (мерчанта), который было необходимо запомнить.
2. Секретный ключ — выданный вам при регистрации сложный специальный ключ.

Можно пропустить этот шаг и заполнить эти данные позже в системных настройках.
Так же не забудьте после установке включить метод оплаты в настройках miniShop2 и добавить его к необходимому методу доставки.

[![](https://file.modx.pro/files/5/4/2/5425dfef651c016d41c40825f7889fa6s.jpg)](https://file.modx.pro/files/5/4/2/5425dfef651c016d41c40825f7889fa6.png)
[![](https://file.modx.pro/files/1/7/d/17dfff0b5dd970258ebb129e919aa9bas.jpg)](https://file.modx.pro/files/1/7/d/17dfff0b5dd970258ebb129e919aa9ba.png)

Чтобы перевести режим оплат из тестового в «боевой», измените системную настройку **ms2_payment_payu_developer_mode** с «Да» на «Нет».

[![](https://file.modx.pro/files/4/7/e/47ec11fdda2dfcfa051e2550dc9a455bs.jpg)](https://file.modx.pro/files/4/7/e/47ec11fdda2dfcfa051e2550dc9a455b.png)

## Справочник по системным настройкам

| Ключ                                    | Название                                         | Значение по умолчанию                 | Описание                                                                                                                                            |
|-----------------------------------------|--------------------------------------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| **ms2_payment_payu_merchant_id**        | Идентификатор магазина (мерчанта) в системе PayU |                                       | Cодержит уникальный идентификатор магазина (мерчанта). Данный идентификатор создается при регистрации в системе PayU и высылается в письме.         |
| **ms2_payment_payu_secret_key**         | Секретный ключ                                   |                                       | Последовательность случайных символов, выдается при регистрации. Участвует в формировании электронной подписи и используется для проверки платежей. |
| **ms2_payment_payu_checkout_url**       | Адрес для выполнения запросов                    | `https://secure.payu.ru/order/lu.php` | Адрес, куда будет отправляться пользователь для выполнения оплаты заказа.                                                                           |
| **ms2_payment_payu_developer_mode**     | Режим совершения тестовых платежей               | `Да`                                  | При значении "Да", все запросы оплаты будут отправляться на тестовую среду обработки платежей PayU.                                                 |
| **ms2_payment_payu_currency**           | Валюта платежа                                   | `RUB`                                 | Буквенный трехзначный код валюты согласно [ISO 4217][7].                                                                                            |
| **ms2_payment_payu_language**           | Язык PayU                                        | `RU`                                  | Двухбуквенный код языка, на котором следует показывать сайт PayU при оплате.                                                                        |
| **ms2_payment_payu_success_id**         | Страница успешной оплаты PayU                    | `0`                                   | Пользователь будет отправлен на эту страницу после завершения оплаты. Рекомендуется указать id страницы с корзиной, для вывода заказа.              |
| **ms2_payment_payu_failure_id**         | Страница отказа от оплаты PayU                   | `0`                                   | Пользователь будет отправлен на эту страницу при неудачной оплате. Рекомендуется указать id страницы с корзиной, для вывода заказа                  |
| **ms2_payment_payu_success_payment_id** | Статус заказа при успешной оплате                | `2`                                   | При успешной оплате заказа ему будет установлен указанный номер статуса. Сами статусы редактируются в настройках miniShop2.                         |
| **ms2_payment_payu_cancel_payment_id**  | Статус заказа при отмененной оплате              | `4`                                   | При отмене оплаты заказа ему будет установлен указанный номер статуса. Сами статусы редактируются в настройках miniShop2.                           |

[1]: https://modstore.pro/packages/payment-system/msppayu
[2]: http://payu.ru/dlya-biznesa/podklyuchitsya/?utm_source=payu-bottom
[3]: https://modstore.pro/office/support
[4]: http://klimchuk.by/about.html
[5]: http://payu.ru/o-nas/kontakty/
[6]: http://payu-api.ru/pages/viewpage.action?pageId=589827
[7]: http://www.iso.org/iso/home/standards/currency_codes.htm
