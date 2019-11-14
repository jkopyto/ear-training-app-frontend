import { PianoKeyboardRightAnswers } from "./pianoKeyboardRightAnswers"
import { Instrument } from "./instrument"
import { ScaleNotes } from "./scaleNotes"
import { VoicePosition } from "./voicePosition"

export type VoiceNoteExcersise = {
    rightAnswer: PianoKeyboardRightAnswers
    backendTitle: string
    title: string
    cover: string
    instrument: Instrument
    startingVoiceNote: ScaleNotes
    givenVoicePosition: VoicePosition
    excersiseNotePosition: VoicePosition
}