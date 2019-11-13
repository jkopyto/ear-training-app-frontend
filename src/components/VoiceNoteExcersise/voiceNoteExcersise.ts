
export type VoiceNoteExcersiseRightAnswers =
| "C"
| "C#/Db"
| "D"
| "D#/Eb"
| "E"
| "F"
| "F#/Gb"
| "G"
| "G#/Ab"
| "A"
| "A#/Hb"
| "H"

export type Instrument = 
| "frenchHorn"
| "soprano"

export type VoicePosition = 
| "highest"
| "lowest"

export type VoiceNoteExcersise = {
    rightAnswer: VoiceNoteExcersiseRightAnswers
    backendTitle: string
    title: string
    cover: string
    instrument: Instrument
    startingVoiceNote: string //TO-DO ADD TYPE
    givenVoicePosition: VoicePosition
    excersiseNotePosition: VoicePosition
}

const voiceNoteExcersise1: VoiceNoteExcersise = {
    rightAnswer: "C",
    title: "Carmina Burana: were diu welt",
    backendTitle: "Carmina_Burana_were_diu_welt",
    cover: "https://gemmellposts.files.wordpress.com/2018/05/carmina-burana-e1525726656958.jpg?w=466",
    instrument: "frenchHorn",
    startingVoiceNote: "G",
    givenVoicePosition: "highest",
    excersiseNotePosition: "lowest"
}

const voiceNoteExcersise2: VoiceNoteExcersise = {
    rightAnswer: "F",
    title: "G. Faure - Le Secret op. 23 no. 3",
    backendTitle: "Faure_le_secret",
    cover: "https://cdn.imslp.org/naxoscache.php?pool=others&file=SIGCD472.gif",
    instrument: "soprano",
    startingVoiceNote: "C",
    givenVoicePosition: "highest",
    excersiseNotePosition: "lowest"
}

export const voiceNoteExcersises: VoiceNoteExcersise[] = [voiceNoteExcersise1, voiceNoteExcersise2]
