import * as ActionTypes from "./ActionTypes"
import { ActionType } from "./ActionInterfaces"

export const hideSubheader = (): ActionType => ({
    type: ActionTypes.HIDE_SUBHEADER
})
export const showSubheader = (): ActionType => ({
    type: ActionTypes.SHOW_SUBHEADER
})