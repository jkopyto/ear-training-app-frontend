import * as ActionTypes from "../actions/ActionTypes"
import { ActionType } from "../actions/ActionInterfaces"

export const IntervalReducer = (
    state: {
        score: number
    } = {
            score: 0
        },
    action: ActionType
) => {
    switch (action.type) {
        case ActionTypes.ADD_SCORE:
            return { score: state.score + 1 }
        case ActionTypes.RESET_SCORE:
            return { score: 0 }
        default:
            return state
    }
}