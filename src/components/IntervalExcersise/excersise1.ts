import { NoteType } from './getNote'
import { Answers } from './answerType'

export type PlayingStyle = 
| "melodic"
| "harmonic"


export type Excersise = {
    notes: NoteType[],
    playingSyle: PlayingStyle
    rightAnswer: Answers
}

const excersise1:Excersise = {
    notes: ["D3", "D4"],
    playingSyle: "melodic",
    rightAnswer: "octave"
}
const excersise2:Excersise = {
    notes: ["A3", "C4"],
    playingSyle: "melodic",
    rightAnswer: "minorThird"
}
const excersise3:Excersise = {
    notes: ["E4", "B4"],
    playingSyle: "melodic",
    rightAnswer: "fifth"
}

export const excersises: Excersise[] = [excersise1,excersise2,excersise3]