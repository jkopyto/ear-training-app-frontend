import React, { Dispatch } from 'react'
import {connect} from 'react-redux'
import {AppState} from 'src/store'
import {ActionType} from 'src/actions/ActionInterfaces'
import { changeLang } from 'src/actions'
import clefLogo from 'src/images/icon.png'
import ReactFlagsSelect from 'react-flags-select'
import { Link } from 'react-router-dom'
import { LangType } from 'src/components/LanguageProvider/LanguageProvider'

type Props = {
    lang: string
    changeLang: (lang: LangType) => void
}
const Header = ({lang, changeLang}: Props) => (
    <div className= "m-grid m-grid__item m-grid__item--top i-header">
        <div className= "m-grid m-grid__item--center m-grid--ver m-grid__item i-header__content">
                <Link
                    to='/'
                    className="m-grid m-grid__item i-header__logo--wrapper">
                    <img src={clefLogo} alt="" className="m-grid__item i-header__logo" />
                </Link>
            <div className="m-grid m-grid--hor m-grid__item--center m-grid__item i-header__lang-select">
                <ReactFlagsSelect
                    countries={["PL", "GB"]}
                    customLabels={{"GB": "EN-GB", "PL": "PL"}}
                    defaultCountry={lang === "en" ? "GB" : lang.toUpperCase()}
                    onSelect={(lang) => changeLang(lang === "GB" ? "en" as LangType : lang.toLowerCase() as LangType)}
                    placeholder="Select Language"
                    showSelectedLabel={false}
                    showOptionLabel={false}
                    selectedSize={12}
                    optionsSize={14} />
            </div>
        </div>
    </div>
)

const mapStateToProps = (state:AppState) => ({
    lang: state.LangReducer.lang
})

const mapDispatchToProps = (dispatch: Dispatch<ActionType>) => ({
    changeLang: (lang: LangType) => dispatch(changeLang(lang))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)