import React, { ReactNode, useEffect, useState } from 'react'
import en from 'react-intl/locale-data/en'
import pl from 'react-intl/locale-data/pl'
import localeData from 'src/build/locales/data.json'
import { IntlProvider, addLocaleData } from "react-intl"
const moment = require("moment")

addLocaleData([...en, ...pl])

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
    <IntlProvider locale={`${locale}-${locale.toUpperCase()}`} messages={localeMessages} key={locale} >
        {children}
    </IntlProvider>
)}

export default LanguageProvider