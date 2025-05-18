const rooms = [
    {
      id: 1,
      title: "Стандарт",
      description: "Номера категории Стандарт — отличный вариант для категории туристов, которым важно соотношение цены и качества. Идеально для кратковременного размещения.",
      capacity: "Подходит для размещения 1 гостя",
      bed: "Одноместная кровать Smart Slip",
      image: "/assets/images/home/1.jpg",
      price: "3 500 ₽",
      area: "14",
      gallery: [
        "/assets/images/home/standart/1.jpg",
        "/assets/images/home/standart/2.jpg",
        "/assets/images/home/standart/3.jpg",
        "/assets/images/home/standart/4.jpg",
        "/assets/images/home/standart/5.jpg",
        "/assets/images/home/standart/6.jpg",
        "/assets/images/home/standart/7.jpg",
        "/assets/images/home/standart/8.jpg"
      ]
    },
    {
      id: 2,
      title: "Комфорт",
      description: "Для Гостей, которые ценят личное пространство и возможность плодотворно работать. При въезде вас будет ждать чай, кофе, круассан и вода. Рекомендуется для длительного пребывания.",
      capacity: "Подходит для размещения 1-2 гостей",
      bed: "Двухместная кровать Premier Lux",
      image: "/assets/images/home/1.jpg",
      price: "4 400 ₽",
      area: "16",
      gallery: [
        "/assets/images/home/comfort/1.jpg",
        "/assets/images/home/comfort/2.jpg",
        "/assets/images/home/comfort/3.jpg",
        "/assets/images/home/comfort/4.jpg",
        "/assets/images/home/comfort/5.jpg",
        "/assets/images/home/comfort/6.jpg",
        "/assets/images/home/comfort/7.jpg",
        "/assets/images/home/comfort/8.jpg",
        "/assets/images/home/comfort/9.jpg",
        "/assets/images/home/comfort/10.jpg"
      ]
    },
    {
      id: 3,
      title: "Комфорт Плюс",
      description: "Номера повышенного комфорта с одной просторной кроватью и уютным диваном. Прекрасный вид на тихий внутренний двор. Больше дневного освещения за счёт большего количества окон.",
      capacity: "Подходит для размещения 1-2 гостей",
      bed: "Двухместная кровать Premier Lux",
      image: "/assets/images/home/1.jpg",
      price: "4 900 ₽",
      area: "22",
      gallery: [
        "/assets/images/home/comfort+/1.jpg",
        "/assets/images/home/comfort+/2.jpg",
        "/assets/images/home/comfort+/3.jpg",
        "/assets/images/home/comfort+/4.jpg",
        "/assets/images/home/comfort+/5.jpg",
        "/assets/images/home/comfort+/6.jpg",
        "/assets/images/home/comfort+/7.jpg",
        "/assets/images/home/comfort+/8.jpg",
        "/assets/images/home/comfort+/9.jpg",
        "/assets/images/home/comfort+/10.jpg"
      ]
    },
    {
      id: 4,
      title: "Комфорт плюс с террасой",
      description: "Комфортабельные номера с террасой отличаются выходом на балкон гостиницы с собственной зоной отдыха, подвесным креслом и уютным столиком. Рекомендуется для длительного...",
      capacity: "Подходит для размещения 1-2 гостей",
      bed: "Двухместная кровать Premier Lux / Две одноместные кровати Smart Slip",
      image: "/assets/images/home/1.jpg",
      price: "5 400 ₽",
      area: "25",
      gallery: [
        "/assets/images/home/comfort+terrace/7.jpg",
        "/assets/images/home/comfort+terrace/1.jpg",
        "/assets/images/home/comfort+terrace/2.jpg",
        "/assets/images/home/comfort+terrace/3.jpg",
        "/assets/images/home/comfort+terrace/4.jpg",
        "/assets/images/home/comfort+terrace/5.jpg",
        "/assets/images/home/comfort+terrace/6.jpg",
        "/assets/images/home/comfort+terrace/8.jpg",
        "/assets/images/home/comfort+terrace/9.jpg"
      ]
    },
    {
      id: 5,
      title: "Комфорт плюс с террасой 2 кровати",
      description: "Комфортабельные номера с террасой отличаются выходом на балкон гостиницы с собственной зоной отдыха, подвесным креслом и уютным столиком. Рекомендуется для длительного...",
      capacity: "Подходит для размещения 1-2 гостей",
      bed: "Двухместная кровать Premier Lux / Две одноместные кровати Smart Slip",
      image: "/assets/images/home/4.webp",
      price: "5 400 ₽",
      area: "25",
      gallery: [
        "/assets/images/home/comfort+terrace/5.jpg",
        "/assets/images/home/comfort+terrace/6.jpg",
        "/assets/images/home/comfort+terrace/2.jpg",
        "/assets/images/home/comfort+terrace/1.jpg",
        "/assets/images/home/comfort+terrace/4.jpg",
        "/assets/images/home/comfort+terrace/3.jpg",
        "/assets/images/home/comfort+terrace/8.jpg",
        "/assets/images/home/comfort+terrace/10.jpg",
        "/assets/images/home/comfort+terrace/7.jpg",
        "/assets/images/home/comfort+terrace/9.jpg"
      ]
    },
    {
      id: 6,
      title: "Делюкс",
      description: "Номера «Делюкс» — это элегантные и просторные номера с разными сценариями освещения и подсветки. Ортопедический матрас и эргономичный диван с журнальным столиком позволят...",
      capacity: "Подходит для размещения 1-3 гостей",
      bed: "Двухместная кровать Grand Deluxe + эргономичный диван",
      image: "/assets/images/home/5.webp",
      price: "5 900 ₽",
      area: "26",
      gallery: [
        "/assets/images/home/deluxe/1.jpg",
        "/assets/images/home/deluxe/2.jpg",
        "/assets/images/home/deluxe/3.jpg",
        "/assets/images/home/deluxe/4.jpg",
        "/assets/images/home/deluxe/5.jpg",
        "/assets/images/home/deluxe/6.jpg",
        "/assets/images/home/deluxe/7.jpg",
        "/assets/images/home/deluxe/8.jpg",
        "/assets/images/home/deluxe/9.jpg",
        "/assets/images/home/deluxe/10.jpg"
      ]
    },
    {
      id: 7,
      title: "Делюкс 2 кровати",
      description: "Номера «Делюкс» — это элегантные и просторные номера с разными сценариями освещения и подсветки. Ортопедический матрас и эргономичный диван с журнальным столиком позволят...",
      capacity: "Подходит для размещения 1-3 гостей",
      bed: "Две одноместные кровати Smart Slip + эргономичный диван",
      image: "/assets/images/home/6.webp",
      price: "5 900 ₽",
      area: "26",
      gallery: [
        "/assets/images/home/deluxe-2/1.jpg",
        "/assets/images/home/deluxe-2/2.jpg",
        "/assets/images/home/deluxe-2/3.jpg",
        "/assets/images/home/deluxe-2/4.jpg",
        "/assets/images/home/deluxe-2/5.jpg",
        "/assets/images/home/deluxe-2/6.jpg",
        "/assets/images/home/deluxe-2/7.jpg",
        "/assets/images/home/deluxe-2/8.jpg",
        "/assets/images/home/deluxe-2/9.jpg",
        "/assets/images/home/deluxe-2/10.jpg"
      ]
    },
    {
      id: 8,
      title: "Двухкомнатный Люкс",
      description: "Самый большой по площади номер в отеле. Оснащен KingSize кроватью, интерьерной подсветкой и двухместным диваном. Просторная планировка с отдельной гостиной...",
      capacity: "Подходит для размещения 1-4 гостей",
      bed: "Двухместная кровать King Size + двухместный диван",
      image: "/assets/images/home/7.webp",
      price: "6 900 ₽",
      area: "35",
      gallery: [
        "/assets/images/home/lux/1.jpg",
        "/assets/images/home/lux/2.jpg",
        "/assets/images/home/lux/3.jpg",
        "/assets/images/home/lux/4.jpg",
        "/assets/images/home/lux/5.jpg",
        "/assets/images/home/lux/6.jpg",
        "/assets/images/home/lux/7.jpg",
        "/assets/images/home/lux/8.jpg",
        "/assets/images/home/lux/9.jpg",
        "/assets/images/home/lux/10.jpg",
        "/assets/images/home/lux/11.jpg",
        "/assets/images/home/lux/12.jpg",
        "/assets/images/home/lux/13.jpg"
      ]
    }
  ];    

  export default rooms;