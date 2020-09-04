import React, { ReactNode, useEffect } from "react"

type Props = {
  children: ReactNode
  locale?: string
}
const IntlPolyfillsProvider = ({ locale, children }: Props): JSX.Element => {
  useEffect(() => {
    const validLocale = locale === "pl" || locale === "en" ? locale : "en"
    const loadPolyfills = async (): Promise<void> => {
      if (!Intl.PluralRules) {
        await require("@formatjs/intl-pluralrules/polyfill")
        await require(`@formatjs/intl-pluralrules/dist/locale-data/${validLocale}`)
      }

      if (!Intl.DateTimeFormat) {
        await require("@formatjs/intl-relativetimeformat/polyfill")
        await require(`@formatjs/intl-relativetimeformat/dist/locale-data/${validLocale}`)
      }
    }

    loadPolyfills()
  }, [locale])
  return <>{children}</>
}

export default IntlPolyfillsProvider