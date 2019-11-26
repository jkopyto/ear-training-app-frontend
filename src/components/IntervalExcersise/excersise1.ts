import { IntervalExcersise } from '../@types/intervalExcersise'

const excersise1: IntervalExcersise = {
    notes: ["D3", "D4"],
    playingStyle: "harmonic",
    rightAnswer: "octave"
}
const excersise2: IntervalExcersise = {
    notes: ["A3", "C4"],
    playingStyle: "melodic",
    rightAnswer: "minorThird"
}
const excersise3: IntervalExcersise = {
    notes: ["E4", "B4"],
    playingStyle: "melodic",
    rightAnswer: "fifth"
}

export const excersises: IntervalExcersise[] = [excersise1,excersise2,excersise3]