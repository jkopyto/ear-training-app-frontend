import { IntervalExcersise } from '../@types/intervalExcersise'

const excersise1: IntervalExcersise = {
    notes: ["D3", "D4"],
    playingSyle: "harmonic",
    rightAnswer: "octave"
}
const excersise2: IntervalExcersise = {
    notes: ["A3", "C4"],
    playingSyle: "melodic",
    rightAnswer: "minorThird"
}
const excersise3: IntervalExcersise = {
    notes: ["E4", "B4"],
    playingSyle: "melodic",
    rightAnswer: "fifth"
}

export const excersises: IntervalExcersise[] = [excersise1,excersise2,excersise3]