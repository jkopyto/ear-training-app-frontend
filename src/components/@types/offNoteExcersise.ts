import { Key } from "./key"
import { Instrument } from "./instrument"
import { PianoKeyboardRightAnswers } from "./pianoKeyboardRightAnswers"

export type OffNoteExcersise = {
    title: string
    cover: string
    backendTitle: string
    key: Key,
    instrument: Instrument
    rightAnswer: PianoKeyboardRightAnswers
}