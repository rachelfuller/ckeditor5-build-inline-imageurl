(function(d){	const l = d['ru'] = d['ru'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 из %1","Block quote":"Цитата",Bold:"Жирный","Bulleted List":"Маркированный список",Cancel:"Отмена","Centered image":"Выравнивание по центру","Change image text alternative":"Редактировать альтернативный текст","Choose heading":"Выбор стиля","Decrease indent":"Уменьшить отступ",Downloadable:"Загружаемые","Dropdown toolbar":"Выпадающая панель инструментов","Edit link":"Редактировать ссылку","Editor toolbar":"Панель инструментов редактора","Enter image caption":"Подпись к изображению","Full size image":"Оригинальный размер изображения",Heading:"Стиль","Heading 1":"Заголовок 1","Heading 2":"Заголовок 2","Heading 3":"Заголовок 3","Heading 4":"Заголовок 4","Heading 5":"Заголовок 5","Heading 6":"Заголовок 6","Image toolbar":"Панель инструментов изображения","image widget":"Виджет изображений","Increase indent":"Увеличить отступ","Insert media":"Вставить медиа","Insert paragraph after block":"","Insert paragraph before block":"",Italic:"Курсив","Left aligned image":"Выравнивание по левому краю",Link:"Ссылка","Link URL":"Ссылка URL","Media URL":"URL медиа","media widget":"медиа-виджет",Next:"Следующий","Numbered List":"Нумерованный список","Open in a new tab":"Открыть в новой вкладке","Open link in new tab":"Открыть ссылку в новой вкладке",Paragraph:"Параграф","Paste the media URL in the input.":"Вставьте URL медиа в поле ввода.",Previous:"Предыдущий",Redo:"Повторить","Rich Text Editor, %0":"Редактор, %0","Right aligned image":"Выравнивание по правому краю",Save:"Сохранить","Select all":"Выбрать все","Show more items":"Другие инструменты","Side image":"Боковое изображение","Text alternative":"Альтернативный текст","The URL must not be empty.":"URL не должен быть пустым.","This link has no URL":"Для этой ссылки не установлен адрес URL","This media URL is not supported.":"Этот URL медиа не поддерживается.","Tip: Paste the URL into the content to embed faster.":"Подсказка: Вставьте URL в контент для быстрого включения.",Undo:"Отменить",Unlink:"Убрать ссылку","Widget toolbar":"Панель инструментов виджета"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));