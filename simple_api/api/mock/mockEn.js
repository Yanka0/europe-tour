const normalizedEnCountries = [
  {
    id: "italy",
    name: "Italy",
    title: 'Tour to Italy',
    duration: '7 days',
    countries: 'Poland, Austria, Italy, Czech Republic',
    waypoints: [
      {lat: 53.9045, lng: 27.5615}, // Минск
      {lat: 52.2297, lng: 21.0122}, // Варшава
      {lat: 48.2082, lng: 16.3738}, // Вена
      {lat: 43.7696, lng: 11.2558}, // Флоренция
      {lat: 41.9028, lng: 12.4964}, // Рим
      {lat: 41.9029, lng: 12.4534}, // Ватикан
      {lat: 45.4408, lng: 12.3155}, // Венеция
      {lat: 49.1951, lng: 16.6068}, // Брно
      {lat: 50.0647, lng: 19.9450}, // Краков
    ],
    description: "Sightseeing tour to Italy following the route: Warsaw-Vienna-Florence-Rome-Vatican-Venice-Brno-Krakow. This route offers the opportunity to immerse yourself in the culture and history of several European countries, visit iconic landmarks, and enjoy the atmosphere of different cities. Please note that the schedule may be subject to change depending on travel conditions and group preferences.",
    program: [
      {
        title: "Day 1: Minsk - Warsaw",
        plan: [
          "Start of the journey from Minsk towards Warsaw",
          "Arrival in Warsaw and check-in at the hotel",
          "Free time for sightseeing or relaxation"
        ]
      },
      {
        title: "Day 2: Warsaw - Vienna",
        plan: [
          "Travel towards Vienna",
          "Guided tour of Vienna's historic center, including Stephansplatz, Schönbrunn Palace, and Belvedere",
          "Dinner at a traditional Austrian restaurant"
        ]
      },
      {
        title: "Day 3: Vienna - Florence",
        plan: [
          "Transfer to Florence",
          "Sightseeing tour of Florence: Piazza della Signoria, Brunelleschi's Dome, Uffizi Gallery, Ponte Vecchio",
          "Dinner featuring Tuscan specialties"
        ]
      },
      {
        title: "Day 4: Florence - Rome",
        plan: [
          "Journey to Rome",
          "Guided tour of Rome: Colosseum, Roman Forum, Pantheon, Trevi Fountain",
          "Stroll through Piazza Navona and Piazza di Spagna",
          "Dinner at a restaurant serving Roman cuisine"
        ]
      },
      {
        title: "Day 5: Rome - Vatican - Venice",
        plan: [
          "Travel to the Vatican",
          "Visit to the Vatican: St. Peter's Basilica, Vatican Museums, Sistine Chapel",
          "Transfer to Venice",
          "Evening walk along the canals of Venice"
        ]
      },
      {
        title: "Day 6: Venice - Brno - Krakow",
        plan: [
          "Transfer to Brno",
          "Brief tour of Brno",
          "Transfer to Krakow",
          "Dinner at a Polish restaurant featuring local dishes"
        ]
      },
      {
        title: "Day 7: Krakow - Warsaw - Minsk",
        plan: [
          "Journey to Warsaw and Minsk with stops for rest and lunch along the way",
          "Tour conclusion"
        ]
      }
    ],
    imgs: {
      flag: 'italy_flag.svg',
      mainImg: "italy_home_card.jpg",
      sliderImgs: [
        "italy_slide1.jpg",
        "italy_slide2.jpg",
        "italy_slide3.jpg",
        "italy_slide4.jpg",
        "italy_slide5.jpg"]
    },
    dates: [
      "it8dc8",
      "it0dm2",
      "it2ke9",
      "it8s8j",
    ],
    reviews: [
      "it1r1",
      "it1r2",
      "it1r3",
    ],
  },
  {
    id: "switzerland",
    name: 'Switzerland',
    title: 'Tour to Switzerland',
    duration: '7 days',
    countries: "Germany, Switzerland",
    waypoints: [
      {lat: 53.9045, lng: 27.5615}, // Минск
      {lat: 49.4559, lng: 11.0785}, // Нюрнберг
      {lat: 49.8941, lng: 10.8858}, // Бамберг
      {lat: 47.0502, lng: 8.3093}, // Люцерн
      {lat: 47.3769, lng: 8.5417}, // Цюрих
      {lat: 46.9479, lng: 7.4474}, // Берн
      {lat: 46.6866, lng: 7.8691}, // Интерлакен
      {lat: 48.0795, lng: 7.3585}, // Кольмар
      {lat: 47.5596, lng: 7.5886}, // Базель
      {lat: 46.2044, lng: 6.1432}, // Женева
      {lat: 46.8182, lng: 8.2275}, // Швейцарская Ривьера
      {lat: 48.5734, lng: 7.7521}, // Страсбург
      {lat: 51.9194, lng: 19.1451}, // Польша
      {lat: 53.9045, lng: 27.5615}, // Минск (возвращение)
    ],
    description: "Embark on an exciting journey through the magnificent corners of Switzerland, where you will encounter breathtaking natural landscapes, cultural treasures, and an atmosphere of unparalleled charm.",
    program: [
      {
        title: 'Day 1: Departure from Minsk',
        plan: [
          'Departure from Minsk',
          'Transit through Belarus and Poland',
          'Overnight stay at the border with Germany'
        ]
      },
      {
        title: 'Day 2: Nuremberg, Bamberg',
        plan: [
          'Breakfast and check-out from the hotel',
          'Sightseeing tour of Nuremberg: Dürer House, St. Lawrence Church, Church of Our Lady, Meat Bridge, Nuremberg Castle',
          'Free time or optional excursion to Bamberg (additional fee applies)'
        ]
      },
      {
        title: 'Day 3: Lucerne, Zurich, Rhine Falls',
        plan: [
          'Breakfast at the hotel and departure to Lucerne, Switzerland',
          'Sightseeing tour of Lucerne: Musegg Wall, wooden Chapel Bridge, Jesuit churches, Dying Lion monument',
          'Free time or additional excursions to Zurich and the Rhine Falls (additional fee applies)'
        ]
      },
      {
        title: 'Day 4: Bern, Interlaken, Colmar',
        plan: [
          'Breakfast and departure to Bern, the capital of Switzerland',
          'Sightseeing tour of Bern: Federal Palace, Clock Tower, Bern Cathedral, Bear Pit',
          'Free time or excursions to Interlaken and Colmar (additional fee applies)'
        ]
      },
      {
        title: 'Day 5: Basel, Geneva, Swiss Riviera',
        plan: [
          'Breakfast at the hotel and departure to Basel',
          'Sightseeing tour of Basel: Basel Cathedral, Town Hall, Middle Bridge',
          'Free time or excursions to Geneva and the Swiss Riviera (additional fee applies)'
        ]
      },
      {
        title: 'Day 6: Strasbourg',
        plan: [
          'Breakfast at the hotel and check-out',
          'Sightseeing tour of Strasbourg: Strasbourg Cathedral, Rohan Palace, Kammerzell House, Vauban Dam',
          'Free time'
        ]
      },
      {
        title: 'Day 7: Return to Minsk',
        plan: [
          'Breakfast and check-out from the hotel',
          'Arrival in Minsk'
        ]
      }
    ],
    imgs: {
      flag: 'switzerland_flag.svg',
      mainImg: "switzerland_home_card.jpg",
      sliderImgs: [
        "switzerland_slide2.jpg",
        "switzerland_slide1.jpg",
        "switzerland_slide3.jpg",
        "switzerland_slide4.jpg",
      ]
    },
    dates: [
      "sw9k3j",
      "sw5ij2",
    ],
    reviews: [
      "sw1r1",
      "sw1r2",
      "sw1r3",
    ],
  },
  {
    id: "greece",
    name: 'Greece',
    title: 'Tour to Greece',
    duration: '7 days',
    countries: 'Hungary, Greece, Serbia',
    waypoints : [
      {lat: 53.9045, lng: 27.5615}, // Минск
      {lat: 51.9194, lng: 19.1451}, // Польша
      {lat: 48.669, lng: 19.699}, // Словакия
      {lat: 47.4979, lng: 19.0402}, // Будапешт
      {lat: 37.9838, lng: 23.7275}, // Греция
      {lat: 40.207, lng: 22.5726}, // Паралия Катерини
      {lat: 44.7866, lng: 20.4489}, // Белград
      {lat: 53.9045, lng: 27.5615}, // Минск (возвращение)
    ],
    description: "This tour will immerse you in the beauty and history of Greece, allowing you to visit its famous landmarks and enjoy the atmosphere of various cities.",
    program: [
      {
        title: "Day 1: Journey from Minsk to Budapest",
        plan: [
          "Departure from Minsk",
          "Transit through Poland and Slovakia",
          "Evening check-in at a hotel in Budapest. Overnight stay"
        ]
      },
      {
        title: "Day 2: Budapest Sightseeing",
        plan: [
          "City sightseeing tour: Heroes' Square, Fisherman's Bastion, Vajdahunyad Castle, Andrassy Avenue, Matthias Church",
          "Free time for relaxation or additional excursions",
          "Night transfer to Greece"
        ]
      },
      {
        title: "Day 3: Arrival in Greece, Paralia Katerini",
        plan: [
          "Arrival in Greece",
          "Accommodation at the Paralia Katerini resort",
          "Free time for seaside relaxation or beach visits",
          "Optional visit to Mount Olympus in the evening"
        ]
      },
      {
        title: "Day 4: Excursion to Meteora and Delphi",
        plan: [
          "Visit to the Meteora Monastery complex",
          "Further transfer to Delphi",
          "Exploration of Delphi and the Oracle museum"
        ]
      },
      {
        title: "Day 5: Journey to Athens",
        plan: [
          "Departure from Delphi to Athens",
          "Sightseeing en route, including Thermopylae",
          "Arrival in Athens and hotel check-in",
          "Free time for city walks and visit to the Acropolis"
        ]
      },
      {
        title: "Day 6: Excursion to Corinth Canal, Mycenae, and Nafplion",
        plan: [
          "Trip to the Corinth Canal",
          "Visit to Mycenae, one of the oldest cities in Greece",
          "Stroll in Nafplion, a picturesque coastal town",
          "Return to the hotel in Athens. Overnight stay"
        ]
      },
      {
        title: "Day 7: Journey to Belgrade and return to Minsk",
        plan: [
          "Transfer to Belgrade",
          "City sightseeing tour",
          "Free time for walks and shopping",
          "Late arrival in Minsk"
        ]
      }
    ],
    imgs: {
      flag: 'greece_flag.svg',
      mainImg: "greece_home_card.jpg",
      sliderImgs: [
        "greece_slide1.jpg",
        "greece_slide2.jpg",
        "greece_slide3.jpg",
        "greece_slide4.jpg",
      ]
    },
    dates: [
      "gr7h78",
      "gr8e0k",
      "gr3k8g",
    ],
    reviews: [
      "gr1r1",
      "gr1r2",
      "gr1r3",
    ],
  },
  {
    id: "spain",
    name: 'Spain',
    title: 'Tour of Spain',
    duration: '12 days',
    countries: "Germany, Spain",
    waypoints:[
      {lat: 53.9045, lng: 27.5615}, // Минск
      {lat: 48.1351, lng: 11.5820}, // Мюнхен
      {lat: 41.6992, lng: 2.8394}, // Ллорет-де-Мар
      {lat: 41.3851, lng: 2.1734}, // Барселона
      {lat: 53.9045, lng: 27.5615}, // Минск (возвращение)
    ],
    description: `This tour will allow you to immerse yourself in the amazing world of Spain's history and culture, visit its famous landmarks, and enjoy the atmosphere of various cities.`,
    program: [
      {
        title: 'Day 1: Departure to Germany',
        plan: [
          'Transit through Belarus and Poland',
          'Overnight stay at a transit hotel'
        ]
      },
      {
        title: 'Day 2: Munich',
        plan: [
          'Breakfast at the hotel',
          'Sightseeing tour of Munich: Residenz, Isartor, Odeonsplatz, City Hall, Frauenkirche, Opera House, Marienplatz, Hofbräuhaus',
          'Free time or visit to the BMW museum and exhibition center (additional fee applies)',
          'Night transfer to Spain'
        ]
      },
      {
        title: 'Day 3: Sea Relaxation',
        plan: [
          'Arrival at the sea in the city of Lloret de Mar',
          'Check-in at the hotel',
          'Free time for relaxation or additional excursions (additional fee applies)',
        ]
      },
      {
        title: 'Day 4: Sea Relaxation, Optional Excursions',
        plan: [
          'Free time for relaxation',
          'Possible additional excursions or entertainment (additional fee applies)'
        ]
      },
      {
        title: 'Day 5: Sea Relaxation, Visit to Barcelona',
        plan: [
          'Excursion to Barcelona (optional, additional fee applies)',
          'Sightseeing tour of the city: Olympic Park, Sagrada Familia, La Rambla, Medieval Barcelona',
          'Free time to visit attractions or go shopping',
        ]
      },
      {
        title: 'Day 6: Sea Relaxation, Free Time or Optional Excursions',
        plan: [
          'Free time for relaxation or optional excursions (additional fee applies)',
          'Breakfast at the hotel',
          'Dinner available for an additional fee'
        ]
      },
      {
        title: 'Day 7: Sea Relaxation, Visit to Montserrat',
        plan: [
          'Trip to the mountains of Catalonia to the holy places of Montserrat (additional fee applies)',
          'Return to the hotel',
        ]
      },
      {
        title: 'Day 8: Sea Relaxation, Excursions to Girona and Besalú',
        plan: [
          'Trip to Girona and Besalú (additional fee applies)',
          'Return to the hotel',
        ]
      },
      {
        title: 'Day 9: Sea Relaxation, Return to Minsk',
        plan: [
          'Free time for relaxation',
          'Breakfast at the hotel',
          'Check-out from the hotel',
          'Arrival in Minsk'
        ]
      }
    ],
    imgs: {
      flag: 'spain_flag.svg',
      mainImg: "spain_home_card.jpg",
      sliderImgs: [
        "spain_slide1.jpg",
        "spain_slide2.jpg",
        "spain_slide3.jpg",
      ]
    },
    dates: [
      "spd8h7",
      "sp9kd0",
      "sp2j3l",
      "sp0m3k"
    ],
    reviews: [
      "sp1r1",
      "sp1r2",
      "sp1r3",
    ],
  }
];
const normalizedEnDates = [
  {
    id: "it8dc8",
    name: "20.06.2021 - 01.07.2021",
    price: '€250',
  },
  {
    id: "it0dm2",
    name: "25.06.2021 - 06.07.2021",
    price: '€270',
  },
  {
    id: "it2ke9",
    name: "01.07.2021 - 08.07.2021",
    price: '€250',
  },
  {
    id: "it8s8j",
    name: "08.07.2021 - 15.07.2021",
    price: '€250',
  },
  {
    id: "sw9k3j",
    name: "16.05.2021 - 23.05.2021",
    price: '€390',
  },
  {
    id: "sw5ij2",
    name: "02.06.2021 - 09.06.2021",
    price: '€350',
  },
  {
    id: "gr7h78",
    name: "20.05.2021 - 27.05.2021",
    price: '€270',
  },
  {
    id: "gr8e0k",
    name: "03.07.2021 - 10.07.2021",
    price: '€270',
  },
  {
    id: "gr3k8g",
    name: "13.07.2021 - 20.07.2021",
    price: '€220',
  },
  {
    id: "spd8h7",
    name: "07.05.2021 - 14.05.2021",
    price: '€400',
  },
  {
    id: "sp9kd0",
    name: "16.05.2021 - 23.05.2021",
    price: '€420',
  }, {
    id: "sp2j3l",
    name: "23.05.2021 - 30.05.2021",
    price: '€370',
  }, {
    id: "sp0m3k",
    name: "03.06.2021 - 10.06.2021",
    price: '€420',
  },
];
const normalizedEnReviews = [
  {
    id: "it1r1",
    name: "Alexander",
    text: "Excellent tour of Italy, everything was great! Wonderful food, magnificent sights, and friendly people.",
    rating: 5,
  },
  {
    id: "it1r2",
    name: "Alexey",
    text: "Visited Italy last year and was amazed by everything I saw! Great atmosphere and incredible beauty.",
    rating: 5,
  },
  {
    id: "it1r3",
    name: "Victor",
    text: "I've dreamed of visiting Italy since childhood, and my tour exceeded all expectations! Will definitely come back here again.",
    rating: 5,
  },
  // CountryReviews for Spain
  {
    id: "sp1r1",
    name: "Olga",
    text: "Spain is simply amazing! Wonderful climate, amazing architecture, and beautiful beaches.",
    rating: 4,
  },
  {
    id: "sp1r2",
    name: "Ivan",
    text: "Traveling to Spain was unforgettable! I fell in love with this country and its culture.",
    rating: 5,
  },
  {
    id: "sp1r3",
    name: "Anastasia",
    text: "Spain is where dreams come true! Unforgettable experience and delightful impressions.",
    rating: 5,
  },
  // CountryReviews for Greece
  {
    id: "gr1r1",
    name: "Ksenia",
    text: "Traveling to Greece was simply amazing! Beautiful beaches, delicious food, and friendly people.",
    rating: 5,
  },
  {
    id: "gr1r2",
    name: "Victoria",
    text: "Greece turned out to be a real paradise on earth! Beautiful nature and historical landmarks.",
    rating: 5,
  },
  {
    id: "gr1r3",
    name: "Andrey",
    text: "I'm thrilled with Greece! Extraordinary beauty and an atmosphere that allows you to relax and enjoy every moment.",
    rating: 5,
  },
  // CountryReviews for Switzerland
  {
    id: "sw1r1",
    name: "Alexey",
    text: "Visited Switzerland last month and was amazed by its beauty! Incredible mountain landscapes and clean air.",
    rating: 5,
  },
  {
    id: "sw1r2",
    name: "Ekaterina",
    text: "The tour to Switzerland left the most positive impressions! It's a place where you want to return again and again.",
    rating: 5,
  },
  {
    id: "sw1r3",
    name: "Vladislav",
    text: "Switzerland is a country where time stands still!",
    rating: 5,
  },
];
const normalizedEnUsers = [
  {
    id: "user1",
    name: "Antony",
  },
  {
    id: "user2",
    name: "Diana",
  },
  {
    id: "user3",
    name: "Lolly",
  },
  {
    id: "user4",
    name: "Agata",
  },
  {
    id: "user5",
    name: "Rebeca",
  },
  {
    id: "user6",
    name: "Sam",
  },
];

module.exports = {
  dates: normalizedEnDates,
  countries: normalizedEnCountries,
  reviews: normalizedEnReviews,
  users: normalizedEnUsers,
};

