export const setLocale = ({ locale }) => {
  if (typeof window !== undefined) {
    window.localStorage.setItem('PV_LOCALE', locale)
  }
}

export const getLocale = () => typeof window !== undefined
  ? window.localStorage.getItem('PV_LOCALE')
  : null
