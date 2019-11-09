import { NoteType } from './getNote'

const bassClefNotes = ["C1","C#1","Db1","D1","D#1","Eb1", "E1", "E#1", "Fb1", "F1", "F#1", "Gb1", "G1", "G#1", "Ab1", "A1", "A#1", "Bb1", "B1", "B#1", "Cb2", "C2", "C#2", "Db2", "D2", "D#2", "Eb2", "E2", "E#2", "Fb2", "F2", "F#2", "Gb2", "G2", "G#2", "Ab2", "A2", "A#2", "Bb2", "B2", "B#2", "Cb3", "C3", "C#3", "Db3", "D3", "D#3", "Eb3", "E3", "E#3", "Fb3", "F3", "F#3", "Gb3", "G3", "G#3", "Ab3","A3","A#3","Bb3","B3", "B#3"]

export const getClef = (note: NoteType) => {
    if (bassClefNotes.includes(note)) return "bass"
    else return "treble"
}