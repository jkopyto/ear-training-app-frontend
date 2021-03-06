import { Answers } from "./answerType"
import { PlayingStyle } from "./playingStyle"
import { NoteType } from "./noteType"

export type IntervalExcersise = {
    notes: NoteType[],
    playingStyle: PlayingStyle
    rightAnswer: Answers
}