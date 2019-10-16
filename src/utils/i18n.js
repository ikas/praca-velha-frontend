import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "About": "About us",
      "About URL": "/en/about",
      "Buildings": "Buildings",
      "Buildings URL": "/en/buildings",
      "Contacts": "Contacts",
      "Contacts URL": "/en/contacts",
      "Contacts Heading": "Contacts",
      "Contacts Text": "Need  help? Get in touch.",
      "Contacts Button": "Send an email",
      "Home": "Home",
      "Home URL": "/en/home",
      "Home Available Heading": "Available",
      "Home Development Heading": "In construction",
      "Home Portfolio Heading": "Portfolio",
      "Home Main Header": "Real estate company",
      "Home Secondary Header": "Braga",
      "Home Know Our Buildings": "Get familiar with our constructions",
      "Construction Location Heading": "Location",
      "Construction Gallery Heading": "The construction",
    }
  },
  pt: {
    translation: {
      "About": "Sobre nós",
      "About URL": "/pt/sobre-nos",
      "Buildings": "Empreendimentos",
      "Buildings URL": "/pt/empreendimentos",
      "Contacts": "Contactos",
      "Contacts URL": "/pt/contactos",
      "Contacts Heading": "Contactos",
      "Contacts Text": "Precisa de ajuda? Entre em contacto connosco.",
      "Contacts Button": "Enviar um email",
      "Home": "Início",
      "Home URL": "/pt/home",
      "Home Available Heading": "Disponíveis",
      "Home Development Heading": "Em construção",
      "Home Portfolio Heading": "Portfólio",
      "Home Main Header": "Sociedade Imobiliária",
      "Home Secondary Header": "Braga",
      "Home Know Our Buildings": "Conheça os nossos imóveis",
      "Construction Location Heading": "Localização",
      "Construction Gallery Heading": "O empreendimento",
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'pt',
    lng: "pt",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    },
  });

  export default i18n;