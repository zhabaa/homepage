# Homepage

### Original Author

Forked from: [danggoodcode](https://danggoodcode.com)

<video alt="homepage" src="https://github.com/user-attachments/assets/ac201415-0e85-4a39-be03-c746a5cb3bef"> </video>


## Настройка

### Настройка закладок

Файл `bookmarks.js` содержит массив категорий с ссылками в формате:

```javascript
const bookmarks = [
  {
    title: "Название раздела",
    links: [
      { name: "Текст ссылки", url: "https://ссылка.com" }, 
      // ... 
    ]
  },
  // ... 
];
```



### Поисковые системы

В поисковой строке используя префиксы можно менять поисковыую систему или использовать переводчик:

- `!g` - google

- `!d` - duckduckgo

- `!y` - youtube

- `!yan` - yandex

- `!re` - Russian to Enghlish

- `!er` - English to Russian



Также вы можете добавлять или изменять поисковые системы или языки для перевода в файле `scripts.js`, изменяя переменную `searchEngines`.



### Настройка оформления

Стили задаются с помощью CSS-переменных. Чтобы изменить цвета, достаточно обновить значения в `:root`.

Чтобы установить другие обои достаточно изменить пусть в файле `style.css` на нужный вам.
