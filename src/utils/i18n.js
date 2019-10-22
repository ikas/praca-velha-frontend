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
      "Contacts Talk With Us": "Talk with us",
      "Contacts Form Input First Name": "First name",
      "Contacts Form Input Last Name": "Last name",
      "Contacts Form Input Email": "Email",
      "Contacts Form Input Phone Number": "Phone number",
      "Contacts Form Input Subject": "Subject",
      "Contacts Form Input Message": "Message",
      "Contacts Form Submit": "Submit",
      "Contacts Email Subject Start": "Contact request",
      "Contacts Email": "Email",
      "Contacts Email Phone Number": "Phone number",
      "Home": "Home",
      "Home URL": "/en/home",
      "Home Available Heading": "Available",
      "Home Development Heading": "In construction",
      "Home Portfolio Heading": "Portfolio",
      "Home Main Header": "Real estate company",
      "Home Secondary Header": "Braga",
      "Home Know Our Buildings": "Get familiar with our constructions",
      "Home See All Buildings": "See all constructions",
      "Home Know More": "Know More",
      "Construction Location Heading": "Location",
      "Construction Gallery Heading": "The construction",
      "Construction Price Tag": "From {{price}}€",
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
      "Contacts Talk With Us": "Fale connosco",
      "Contacts Form Input First Name": "Primeiro nome",
      "Contacts Form Input Last Name": "Último nome",
      "Contacts Form Input Email": "E-mail",
      "Contacts Form Input Phone Number": "Telemóvel",
      "Contacts Form Input Subject": "Assunto",
      "Contacts Form Input Message": "Mensagem",
      "Contacts Form Submit": "Enviar",
      "Contacts Email Subject Start": "Pedido de contacto",
      "Contacts Email": "E-mail",
      "Contacts Email Phone Number": "Telemóvel",
      "Home": "Início",
      "Home URL": "/pt/home",
      "Home Available Heading": "Disponíveis",
      "Home Development Heading": "Em construção",
      "Home Portfolio Heading": "Portfólio",
      "Home Main Header": "Sociedade Imobiliária",
      "Home Secondary Header": "Braga",
      "Home Know Our Buildings": "Conheça os nossos imóveis",
      "Home See All Buildings": "Veja todos os empreendimentos",
      "Home Know More": "Saiba mais",
      "Construction Location Heading": "Localização",
      "Construction Gallery Heading": "O empreendimento",
      "Construction Price Tag": "A partir de {{price}}€",
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