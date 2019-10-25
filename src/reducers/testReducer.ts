import * as ActionTypes from "../actions/ActionTypes"
import { ActionType } from "../actions/ActionInterfaces"

export default (
    state: {
        isHidden: boolean,
        hideCounter: number
    } = {
        isHidden: false,
        hideCounter: 0
    },
    action: ActionType
) => {
    switch (action.type) {
        case ActionTypes.HIDE_SUBHEADER:
            return { hideCounter: state.hideCounter + 1, isHidden: true }
        case ActionTypes.SHOW_SUBHEADER:
            return {
                hideCounter: state.hideCounter - 1,
                isHidden: state.hideCounter > 1
            }
        default:
            return state
    }
}