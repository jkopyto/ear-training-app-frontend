import * as ActionTypes from "../actions/ActionTypes"
import { ActionType } from "../actions/ActionInterfaces"

export const LangReducer = (
    state: {
        lang: string
    } = {
        lang: "GB"
    },
    action: ActionType
) => {
    switch (action.type) {
        case ActionTypes.CHANGE_LANG:
            return { lang: action.lang }
        default:
            return state
    }
}