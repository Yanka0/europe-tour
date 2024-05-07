import i18next from "i18next";
import {initReactI18next} from "react-i18next";

import en from "src/lng/en.json";
import ru from "src/lng/ru.json";
import pl from 'src/lng/pl.json'

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },
    pl: {
      translation: pl,
    },
  },
  lng: localStorage.getItem("lng") || "en",
});

export default i18next;