import React, { ReactNode, useEffect, useState } from 'react'
import localeData from 'src/__build/locales/data.json'
import { IntlProvider } from "react-intl"
import IntlPolyfillsProvider from './IntlPolyfillsProvider'

export type LangType = "en" | "pl"

type Props = {
    children: ReactNode
    locale: LangType
}

const LanguageProvider = ({ children, locale }: Props) => {
    const [localeMessages, setLocaleMessages] = useState(localeData[locale])
    useEffect(() => {
        setLocaleMessages(localeData[locale])
    },[locale])
    
    return (
        <IntlPolyfillsProvider>
            <IntlProvider locale={`${locale}-${locale.toUpperCase()}`} messages={localeMessages} key={locale} >
                {children}
            </IntlProvider>
        </IntlPolyfillsProvider>
    )
}

export default LanguageProvider