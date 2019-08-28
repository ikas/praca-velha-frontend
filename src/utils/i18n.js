import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "Contacts": "Contacts",
      "Contacts URL": "/en/contacts",
      "Home": "Home",
      "Home URL": "/en/home",
      "Home Available Heading": "Available",
      "Home Development Heading": "In development",
      "Home Portfolio Heading": "Portfolio",
    }
  },
  pt: {
    translation: {
      "Contacts": "Contactos",
      "Contacts URL": "/pt/contactos",
      "Home": "Início",
      "Home URL": "/pt/home",
      "Home Available Heading": "Disponíveis",
      "Home Development Heading": "Em desenvolvimento",
      "Home Portfolio Heading": "Portfólio",
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    lng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
  });

  export default i18n;