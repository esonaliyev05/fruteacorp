import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import laungageDetector from "i18next-browser-languagedetector"
import uzTranslation from "../src/locales/uz.json"
import enTranslation from "../src/locales/en.json"
import ruTranslation from "../src/locales/ru.json"

i18n
.use(Backend)
.use(laungageDetector)
.use(initReactI18next)

.init({
    fallbackLng: "uz",
    lng: "uz",
    debugger:true,
    resources:{
        uz:{translation: uzTranslation},
        en:{translation: enTranslation},
        ru:{translation: ruTranslation},

    }

})

export default i18n