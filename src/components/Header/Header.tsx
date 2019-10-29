import React, { Dispatch } from 'react'
import {connect} from 'react-redux'
import {AppState} from 'src/store'
import {ActionType} from 'src/actions/ActionInterfaces'
import { changeLang } from 'src/actions'
import clefLogo from 'src/images/icon.png'
import ReactFlagsSelect from 'react-flags-select'
import { Link } from 'react-router-dom'

type Props = {
    lang: string
    changeLang: (lang: string) => void
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
                    defaultCountry={lang}
                    onSelect={changeLang}
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
    changeLang: (lang: string) => dispatch(changeLang(lang))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)