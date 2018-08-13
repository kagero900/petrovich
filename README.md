<h3>Тестовое задание.</h3>

<hr>

В исходных данных есть пример html-шаблона товара.

![Template](https://github.com/kagero900/petrovich/blob/master/Screenshot_20.png)

[Демо](https://kagero900.github.io/petrovich/build/) 

Необходимо отобразить на странице список товаров в момент загрузки страницы. Данные для каждого товара можно получить из файла product.json.

Основные требования и функционал:
1. У кнопки купить должен быть атрибут «data-product-id» с уникальным «id» товара.
2. Для картинок использовать строковый модификатор  ‘_220x220_1’. (т.е. этот модификатор должен появиться перед расширением файла)
3. По клику изменяется количество товара. 
4. Переключение стоимость товара 

Данные для цен можно так получить из product.json. 

Например:
priceGoldAlt - цена по карте за м.кв., 
priceRetailAlt - цена стандартная за м.кв.
priceGold - цена по карте за упаковку
priceRetail - цена стандартная за упаковку

Если какие-то данные отсутствуют в product.json, можно использовать любые случайные значения. 

Требования к браузерам:
<ul>
<li>MS Internet Explorer 10+,</li>
<li>Google Chrome 35+,</li>
<li>Mozilla Firefox 30+,</li>
<li>Opera 20+,</li>
<li>Safari 8+.</li>
</ul>
