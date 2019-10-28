export const sounds = {
    "C1": 24,
    "C#1": 25,
    "Db1": 25,
    "D1": 26,
    "D#1": 27,
    "Eb1": 27,
    "E1": 28,
    "E#1": 29,
    "Fb1": 28,
    "F1": 29,
    "F#1": 30,
    "Gb1": 30,
    "G1": 31,
    "G#1": 32,
    "Ab1": 32,
    "A1": 33,
    "A#1": 34,
    "Bb1": 34,
    "B1": 35,
    "B#1": 36,
    "Cb2": 35,
    "C2": 36,
    "C#2": 37,
    "Db2": 37,
    "D2": 38,
    "D#2": 39,
    "Eb2": 39,
    "E2": 40,
    "E#2": 41,
    "Fb2": 40,
    "F2": 41,
    "F#2": 42,
    "Gb2": 42,
    "G2": 43,
    "G#2": 44,
    "Ab2": 44,
    "A2": 45,
    "A#2": 46,
    "Bb2": 46,
    "B2": 47,
    "B#2": 48,
    "Cb3": 47,
    "C3": 48,
    "C#3": 49,
    "Db3": 49,
    "D3": 50,
    "D#3": 51,
    "Eb3": 51,
    "E3": 52,
    "E#3": 53,
    "Fb3": 52,
    "F3": 53,
    "F#3": 54,
    "Gb3": 54,
    "G3": 55,
    "G#3": 56,
    "Ab3": 56,
    "A3": 57,
    "A#3": 58,
    "Bb3": 58,
    "B3": 59,
    "B#3": 60,
    "Cb4": 59,
    "C4": 60,
    "C#4": 61,
    "Db4": 61,
    "D4": 62,
    "D#4": 63,
    "Eb4": 63,
    "E4": 64,
    "E#4": 65,
    "Fb4": 64,
    "F4": 65,
    "F#4": 66,
    "Gb4": 66,
    "G4": 67,
    "G#4": 68,
    "Ab4": 68,
    "A4": 69,
    "A#4": 70,
    "Bb4": 70,
    "B4": 71,
    "B#4": 72,
    "Cb5": 71,
    "C5": 72,
    "C#5": 73,
    "Db5": 73,
    "D5": 74,
    "D#5": 75,
    "Eb5": 75,
    "E5": 76,
    "E#5": 77,
    "Fb5": 76,
    "F5": 77,
    "F#5": 78,
    "Gb5": 78,
    "G5": 79,
    "G#5": 80,
    "Ab5": 80,
    "A5": 81,
    "A#5": 82,
    "Bb5": 82,
    "B5": 83,
    "B#5": 84,
    "Cb6": 83,
    "C6": 84,
}

export const getNote = (note: NoteType) => sounds[note]

type NoteType = 
| "C1"
| "C#1"
| "Db1"
| "D1"
| "D#1"
| "Eb1"
| "E1"
| "E#1"
| "Fb1"
| "F1"
| "F#1"
| "Gb1"
| "G1"
| "G#1"
| "Ab1"
| "A1"
| "A#1"
| "Bb1"
| "B1"
| "B#1"
| "Cb2"
| "C2"
| "C#2"
| "Db2"
| "D2"
| "D#2"
| "Eb2"
| "E2"
| "E#2"
| "Fb2"
| "F2"
| "F#2"
| "Gb2"
| "G2"
| "G#2"
| "Ab2"
| "A2"
| "A#2"
| "Bb2"
| "B2"
| "B#2"
| "Cb3"
| "C3"
| "C#3"
| "Db3"
| "D3"
| "D#3"
| "Eb3"
| "E3"
| "E#3"
| "Fb3"
| "F3"
| "F#3"
| "Gb3"
| "G3"
| "G#3"
| "Ab3"
| "A3"
| "A#3"
| "Bb3"
| "B3"
| "B#3"
| "Cb4"
| "C4"
| "C#4"
| "Db4"
| "D4"
| "D#4"
| "Eb4"
| "E4"
| "E#4"
| "Fb4"
| "F4"
| "F#4"
| "Gb4"
| "G4"
| "G#4"
| "Ab4"
| "A4"
| "A#4"
| "Bb4"
| "B4"
| "B#4"
| "Cb5"
| "C5"
| "C#5"
| "Db5"
| "D5"
| "D#5"
| "Eb5"
| "E5"
| "E#5"
| "Fb5"
| "F5"
| "F#5"
| "Gb5"
| "G5"
| "G#5"
| "Ab5"
| "A5"
| "A#5"
| "Bb5"
| "B5"
| "B#5"
| "Cb6"
| "C6"
