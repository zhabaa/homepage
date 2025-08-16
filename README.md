# Homepage

### Original Author

Forked from: [danggoodcode](https://danggoodcode.com)


![custom-homepage](https://github.com/user-attachments/assets/ebade698-8f52-4330-9d80-53ed8cd81c2f)


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

Вы можете изменить поисковую систему, используя в поисковой строке префиксы:

- `!g` - google

- `!d` - duckduckgo

- `!y` - youtube

- `!yan` - yandex


Также вы можете добавлять или изменять поисковые системы в файле `scripts.js`, изменяя переменную `searchEngines`.



### Настройка оформления

Стили задаются с помощью CSS-переменных. Чтобы изменить цвета, достаточно обновить значения в `:root`.

Чтобы установить другие обои достаточно изменить пусть в файле `style.css` на нужный вам.
