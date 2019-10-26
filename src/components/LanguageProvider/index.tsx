import React, { ReactNode } from 'react'
import en from 'react-intl/locale-data/en'
import pl from 'react-intl/locale-data/pl'
import { IntlProvider, addLocaleData } from "react-intl"
import messages from 'locales/messages'

addLocaleData([...en,...pl])

type Props = {
    children: ReactNode
    locale: "en-GB" | "pl-PL"
}

const LanguageProvider = ({ children, locale }: Props) => (
    <IntlProvider locale={locale} messages = {messages[locale]} key={locale} >
        {children}
    </IntlProvider>
)

export default LanguageProvider