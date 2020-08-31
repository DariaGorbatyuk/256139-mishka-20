/*  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
  // Координаты центра карты.
  // Порядок по умолчанию: «широта, долгота».
  // Чтобы не определять координаты центра карты вручную,
  // воспользуйтесь инструментом Определение координат.
  center: [59.938635, 30.323118],
  // Уровень масштабирования. Допустимые значения:
  // от 0 (весь мир) до 19.
  zoom: 16
});
}*/
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [59.938635, 30.323118],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Магазин Mishka',
      balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/icon-map-pin.svg',
      // Размеры метки.
      iconImageSize: [67, 100],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-30, -110]
    });

  myMap.geoObjects
    .add(myPlacemark)
});
