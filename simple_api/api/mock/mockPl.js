const normalizedPlCountries = [
  {
    id: "italy",
    name: "Włochy",
    title: 'Wycieczka do Włoch',
    duration: '7 dni',
    countries: 'Polska, Austria, Włochy, Czechy',
    description: "Wycieczka objazdowa po Włoszech obejmująca trasę: Warszawa-Wiedeń-Florencja-Rzym-Watykan-Wenecja-Brno-Kraków. Ta trasa pozwala na zgłębienie kultury i historii kilku europejskich krajów, odwiedzenie znanych zabytków i delektowanie się atmosferą różnych miast. Pamiętaj, że harmonogram może ulec zmianie w zależności od warunków podróży i preferencji grupy.",
    program: [
      {
        title: "Dzień 1: Mińsk - Warszawa",
        plan: [
          "Rozpoczęcie podróży z Mińska w kierunku Warszawy",
          "Przybycie do Warszawy i zakwaterowanie w hotelu",
          "Czas wolny na zwiedzanie atrakcji miasta lub odpoczynek"
        ]
      },
      {
        title: "Dzień 2: Warszawa - Wiedeń",
        plan: [
          "Przejazd w kierunku Wiednia",
          "Zwiedzanie historycznego centrum Wiednia, obejmującego Plac Stefana, Schönbrunn i Belweder",
          "Obiad w tradycyjnej austriackiej restauracji"
        ]
      },
      {
        title: "Dzień 3: Wiedeń - Florencja",
        plan: [
          "Przejazd do Florencji",
          "Zwiedzanie Florencji: Piazza della Signoria, Kupola Brunelleschiego, Galeria Uffizi, Most Vecchio",
          "Obiad z toskańskimi potrawami narodowymi"
        ]
      },
      {
        title: "Dzień 4: Florencja - Rzym",
        plan: [
          "Podróż do Rzymu",
          "Zwiedzanie Rzymu: Koloseum, Forum Romanum, Panteon, Fontanna di Trevi",
          "Spacer po Piazza Navona i Piazza di Spagna",
          "Obiad w restauracji z rzymską kuchnią"
        ]
      },
      {
        title: "Dzień 5: Rzym - Watykan - Wenecja",
        plan: [
          "Przejazd do Watykanu",
          "Zwiedzanie Watykanu: Bazylika św. Piotra, Muzea Watykańskie, Kaplica Sykstyńska",
          "Przejazd do Wenecji",
          "Wieczorny spacer po kanałach Wenecji"
        ]
      },
      {
        title: "Dzień 6: Wenecja - Brno - Kraków",
        plan: [
          "Przejazd do Brno",
          "Krótkie zwiedzanie Brna",
          "Przejazd do Krakowa",
          "Obiad w polskiej restauracji z lokalnymi potrawami"
        ]
      },
      {
        title: "Dzień 7: Kraków - Warszawa - Mińsk",
        plan: [
          "Podróż do Warszawy i Mińska z przerwami na odpoczynek i lunch w drodze",
          "Zakończenie wycieczki"
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
    "id": "switzerland",
    "name": "Szwajcaria",
    "title": "Wycieczka do Szwajcarii",
    "duration": "7 dni",
    "countries": "Niemcy, Szwajcaria",
    "description": "Wyrusz w fascynującą podróż po wspaniałych zakątkach Szwajcarii, gdzie czekają na Ciebie zachwycające krajobrazy, bogactwa kulturowe i atmosfera niepowtarzalnego uroku.",
    "program": [
      {
        "title": "Dzień 1: Wyjazd z Mińska",
        "plan": [
          "Wyjazd z Mińska",
          "Przejazd przez Białoruś i Polskę",
          "Nocleg na granicy z Niemcami"
        ]
      },
      {
        "title": "Dzień 2: Norymberga, Bamberg",
        "plan": [
          "Śniadanie i wymeldowanie się z hotelu",
          "Zwiedzanie Norymbergi: dom-muzeum Dürera, Kościół św. Wawrzyńca, Kościół Matki Boskiej, Most Mięsny, Twierdza Norymberska",
          "Czas wolny lub wycieczka do Bambergu (za dodatkową opłatą)"
        ]
      },
      {
        "title": "Dzień 3: Lucerna, Zurych, Wodospad Renu",
        "plan": [
          "Śniadanie w hotelu i wyjazd do Lucerny, Szwajcaria",
          "Zwiedzanie Lucerny: Mur Musegg, Drewniany Most Kapliczny, Kościoły Jezuitów, Pomnik Umierającego Lwa",
          "Czas wolny lub dodatkowe wycieczki do Zurychu i nad Wodospad Renu (za dodatkową opłatą)"
        ]
      },
      {
        "title": "Dzień 4: Berno, Interlaken, Colmar",
        "plan": [
          "Śniadanie i wyjazd do Berna, stolicy Szwajcarii",
          "Zwiedzanie Berna: Pałac Federalny, Wieża Zegarowa, Katedra Bernska, Fosa Niedźwiedzia",
          "Czas wolny lub wycieczki do Interlaken i Colmar (za dodatkową opłatą)"
        ]
      },
      {
        "title": "Dzień 5: Bazylea, Genewa, Riwiera Szwajcarska",
        "plan": [
          "Śniadanie w hotelu i wyjazd do Bazylei",
          "Zwiedzanie Bazylei: Bazylika Bazylejska, Ratusz, Most Środkowy",
          "Czas wolny lub wycieczki do Genewy i na Riwierę Szwajcarską (za dodatkową opłatą)"
        ]
      },
      {
        "title": "Dzień 6: Strasburg",
        "plan": [
          "Śniadanie w hotelu i wymeldowanie się",
          "Zwiedzanie Strasburga: Katedra Strasburska, Pałac Rohan, Dom Handlowy, Płetwa Vauban'a",
          "Czas wolny"
        ]
      },
      {
        "title": "Dzień 7: Powrót do Mińska",
        "plan": [
          "Śniadanie i wymeldowanie się z hotelu",
          "Przybycie do Mińska"
        ]
      }
    ],
    "imgs": {
      "flag": "switzerland_flag.svg",
      "mainImg": "switzerland_home_card.jpg",
      "sliderImgs": [
        "switzerland_slide2.jpg",
        "switzerland_slide1.jpg",
        "switzerland_slide3.jpg",
        "switzerland_slide4.jpg"
      ]
    },
    "dates": [
      "sw9k3j",
      "sw5ij2"
    ],
    "reviews": [
      "sw1r1",
      "sw1r2",
      "sw1r3"
    ]
  },
  {
    id: "greece",
    name: 'Grecja',
    title: 'Wycieczka do Grecji',
    duration: '7 dni',
    countries: 'Węgry, Grecja, Serbia',
    description: "Ta wycieczka pozwoli Ci zanurzyć się w piękno i historię Grecji, odwiedzić jej słynne atrakcje i cieszyć się atmosferą różnych miast.",
    program: [
      {
        title: "Dzień 1: Podróż z Mińska do Budapesztu",
        plan: [
          "Wyjazd z Mińska",
          "Przejazd przez Polskę i Słowację",
          "Wieczorem zakwaterowanie w hotelu w Budapeszcie. Nocleg"
        ]
      },
      {
        title: "Dzień 2: Zwiedzanie Budapesztu",
        plan: [
          "Wycieczka po mieście: Plac Bohaterów, Bastion Rybacki, Zamek Vajdahunyad, Andrassy Avenue, Katedra św. Macieja",
          "Czas wolny na odpoczynek lub dodatkowe wycieczki",
          "Nocny przejazd do Grecji"
        ]
      },
      {
        title: "Dzień 3: Przyjazd do Grecji, Paralia Katerini",
        plan: [
          "Przybycie do Grecji",
          "Zakwaterowanie na kurorcie Paralia Katerini",
          "Czas wolny na plaży lub zwiedzanie okolic",
          "Wieczorem możliwość odwiedzenia Olimpu"
        ]
      },
      {
        title: "Dzień 4: Wycieczka do Meteory i Delf",
        plan: [
          "Wizyta w kompleksie klasztornym Meteora",
          "Dalsza podróż do Delf",
          "Zwiedzanie miasta Delfy i muzeum Orakuła",
        ]
      },
      {
        title: "Dzień 5: Podróż do Aten",
        plan: [
          "Wyjazd z Delf w kierunku Aten",
          "Zwiedzanie atrakcji turystycznych, włączając w to Termopile",
          "Przybycie do Aten i zakwaterowanie w hotelu",
          "Czas wolny na spacery po mieście i zwiedzanie Akropolu",
        ]
      },
      {
        title: "Dzień 6: Wycieczka do Kanału Korynckiego, Myken i Nauplion",
        plan: [
          "Wycieczka do Kanału Korynckiego",
          "Wizyta w Mykenach, jednym z najstarszych miast Grecji",
          "Spacer po Nauplionie - malowniczym mieście nadmorskim",
          "Powrót do hotelu w Atenach. Nocleg"
        ]
      },
      {
        title: "Dzień 7: Podróż do Belgradu i powrót do Mińska",
        plan: [
          "Przejazd do Belgradu",
          "Wycieczka po mieście",
          "Czas wolny na spacery i zakupy",
          "Późny powrót do Mińska"
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
    ]
  },
  {
    id: "spain",
    name: "Hiszpania",
    title: "Wycieczka po Hiszpanii",
    duration: "12 dni",
    countries: "Niemcy, Hiszpania",
    description: "Ta wycieczka pozwoli Ci zanurzyć się w cudowny świat historii i kultury Hiszpanii, odwiedzić jej słynne atrakcje turystyczne i poczuć atmosferę różnych miast.",
    program: [
      {
        title: "Dzień 1: Wyjazd do Niemiec",
        plan: [
          "Przejazd przez Białoruś i Polskę",
          "Nocleg w hotelu tranzytowym"
        ]
      },
      {
        title: "Dzień 2: Monachium",
        plan: [
          "Śniadanie w hotelu",
          "Zwiedzanie Monachium: Rezydencja, Isartor, Odeonsplatz, Ratusz, Kościół św. Marii, Teatr Operowy, Marienplatz, Hofbräuhaus",
          "Czas wolny lub wizyta w Muzeum i Kompleksie Wystawienniczym BMW (za dodatkową opłatą)",
          "Nocny przejazd do Hiszpanii"
        ]
      },
      {
        title: "Dzień 3: Odpoczynek nad morzem",
        plan: [
          "Przybycie nad morze do miasta Lloret de Mar",
          "Zakwaterowanie w hotelu",
          "Czas wolny na plaży lub dodatkowe wycieczki (za dodatkową opłatą)"
        ]
      },
      {
        title: "Dzień 4: Odpoczynek nad morzem, dodatkowe wycieczki",
        plan: [
          "Czas wolny na plaży",
          "Możliwe dodatkowe wycieczki lub rozrywki (za dodatkową opłatą)"
        ]
      },
      {
        title: "Dzień 5: Odpoczynek nad morzem, wizyta w Barcelonie",
        plan: [
          "Wizyta w Barcelonie (opcjonalnie, za dodatkową opłatą)",
          "Zwiedzanie miasta: Park Olimpijski, Sagrada Familia, główna ulica La Rambla, średniowieczna Barcelona",
          "Czas wolny na zwiedzanie atrakcji turystycznych lub zakupy"
        ]
      },
      {
        title: "Dzień 6: Odpoczynek nad morzem, czas wolny lub dodatkowe wycieczki",
        plan: [
          "Czas wolny na plaży lub dodatkowe wycieczki (za dodatkową opłatą)",
          "Śniadanie w hotelu",
          "Obiad (za dodatkową opłatą)"
        ]
      },
      {
        title: "Dzień 7: Odpoczynek nad morzem, wizyta w Montserrat",
        plan: [
          "Wycieczka w góry Katalonii do świętych miejsc Montserrat (za dodatkową opłatą)",
          "Powrót do hotelu"
        ]
      },
      {
        title: "Dzień 8: Odpoczynek nad morzem, wycieczki do Girony i Besalu",
        plan: [
          "Wycieczka do Girony i Besalu (za dodatkową opłatą)",
          "Powrót do hotelu"
        ]
      },
      {
        title: "Dzień 9: Odpoczynek nad morzem, powrót do Mińska",
        plan: [
          "Czas wolny na plaży",
          "Śniadanie w hotelu",
          "Wymeldowanie z hotelu",
          "Przyjazd do Mińska"
        ]
      }
    ],
    imgs: {
      flag: "spain_flag.svg",
      mainImg: "spain_home_card.jpg",
      sliderImgs: [
        "spain_slide1.jpg",
        "spain_slide2.jpg",
        "spain_slide3.jpg"
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
      "sp1r3"
    ]
  }
]
module.exports = {
  countries: normalizedPlCountries,
};