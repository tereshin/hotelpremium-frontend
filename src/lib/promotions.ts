const promotions = [
    {
      id: 1,
      title: "Раннее бронирование",
      description: "При бронировании за 10 календарных дней до даты заезда предоставляется скидка 5%, при бронировании за 21 календарных дней до даты заезда предоставляется скидка 10% от стоимости проживания",
      conditions: [
        "Действует для прямых индивидуальных бронирований",
        "Кроме новогодних и праздничных заездов",
        "Не суммируется с другими специальными предложениями",
        "Действует только при онлайн оплате"
      ],
      image: "/assets/images/promotions/1.jpg",
      link: "https://reservationsteps.ru/rooms/index/e222bc26-37b1-4d47-a7b0-507f2654b884?lang=ru",
      button_text: "Забронировать по акции",
      expiry: "до 30.12.2025",
      isPromo: true,
      isSpecial:false
    },
    {
      id: 2,
      title: "Длительное проживание",
      description: "При проживании от 7 до 14 суток действуют специальные цены. Скидка составляет 10%.",
      conditions: [
        "Действует для прямых индивидуальных бронирований",
        "Кроме новогодних и праздничных заездов",
        "Не суммируется с другими специальными предложениями"
      ],
      image: "/assets/images/promotions/2.jpg",
      link: "https://reservationsteps.ru/rooms/index/e222bc26-37b1-4d47-a7b0-507f2654b884?lang=ru",
      button_text: "Забронировать по акции",
      expiry: "до 30.12.2025",
      isPromo: true,
      isSpecial:false
    },
    {
      id: 3,
      title: "Тариф \"Резидент\"",
      description: "При проживании от 14 суток действуют специальные цены. Скидка составляет 15%",
      conditions: [
        "Действует для прямых индивидуальных бронирований.",
        "Кроме новогодних и праздничных заездов",
        "Не суммируется с другими специальными предложениями"
      ],
      image: "/assets/images/promotions/3.jpg",
      link: "https://reservationsteps.ru/rooms/index/e222bc26-37b1-4d47-a7b0-507f2654b884?lang=ru",
      button_text: "Забронировать по акции",
      expiry: "до 30.12.2025",
      isPromo: true,
      isSpecial:false
    },
    {
      id: 4,
      title: "Семейный отдых",
      description: "При бронировании номера предоставляется скидка в 15% на аренду беседок с мангальной зоной.",
      conditions: [
        "Действует для прямых индивидуальных бронирований",
        "Включая новогодние и праздничные заезды",
        "Суммируется с другими специальными предложениями"
      ],
      image: "/assets/images/promotions/4.jpg",
      link: "https://reservationsteps.ru/rooms/index/e222bc26-37b1-4d47-a7b0-507f2654b884?lang=ru",
      button_text: "Оставить заявку",
      expiry: "до 30.12.2025",
      isPromo: true,
      isSpecial:false
    },
    {
      id: 5,
      title: "Проживание с завтраком",
      description: "Специальное предложение на проживание. Позвольте нам позаботиться о вашем вкусном завтраке прямо в Гостиничном комплексе. Забронируйте ваше проживание сразу с включенным завтраком.",
      conditions: [],
      image: "/assets/images/promotions/5.jpg",
      link: "https://reservationsteps.ru/rooms/index/e222bc26-37b1-4d47-a7b0-507f2654b884?lang=ru",
      button_text: "Забронировать по акции",
      isPromo: true,
      isSpecial:false
    },
    {
      id: 6,
      title: "Ваш яркий День Рождения!",
      description: "Отпразднуйте ваш день рождения в Гостиничном комплексе Premium прямо в центре города Щелково!\n\nМы подготовили для вас все, что бы сделать этот день незабываемым:",
      conditions: [
        "Комплимент от нашего Гостиничного комплекса", 
        "Бесплатный завтрак",
        "Скидка 15% на услуги ресторана",
        "Сообщите дату рождения при заезде!"
      ],
      image: "/assets/images/promotions/6.jpg",
      link: "https://reservationsteps.ru/rooms/index/e222bc26-37b1-4d47-a7b0-507f2654b884?lang=ru",
      button_text: "Спец. предложение",
      isPromo: true,
      isSpecial:false
    },
    {
      id: 7,
      title: "Ресторан и караоке",
      description: "Специальное предложение от ресторана и караоке-клуба KINZA. Только гостям нашего гостиничного комплекса предоставляется скидка 10% на все меню!",
      conditions: [
        "Ресторан находится на территории нашего гостиничного комплекса",
        "Не действует на заказы через Room Service",
        "Для получения скидки предъявите официанту скан бронирования номера"
      ],
      image: "/assets/images/promotions/7.jpg",
      link: "https://reservationsteps.ru/rooms/index/e222bc26-37b1-4d47-a7b0-507f2654b884?lang=ru",
      button_text: "Узнать подробнее",
      isPromo: false,
      isSpecial:true
    }
  ];

  
  export default promotions;