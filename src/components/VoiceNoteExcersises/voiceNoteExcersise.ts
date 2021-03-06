import {VoiceNoteExcersise} from '../@types/voiceNoteExcersise'

const voiceNoteExcersise1: VoiceNoteExcersise = {
    rightAnswer: "C",
    title: "Carmina Burana: were diu welt",
    backendTitle: "Carmina_Burana_were_diu_welt",
    cover: "https://gemmellposts.files.wordpress.com/2018/05/carmina-burana-e1525726656958.jpg?w=466",
    instrument: "frenchHorn",
    startingVoiceNote: "G",
    givenVoicePosition: "highest",
    excersiseNotePosition: "highest"
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

const voiceNoteExcersise3: VoiceNoteExcersise = {
    rightAnswer: "D",
    title: "Converte nos",
    backendTitle: "Converte_nos",
    cover: "https://upload.wikimedia.org/wikipedia/commons/4/43/EscOrdendePredicadores2Wikipedia.png",
    instrument: "tenor",
    startingVoiceNote: "H",
    givenVoicePosition: "highestMale",
    excersiseNotePosition: "highest"
}

export const voiceNoteExcersises: VoiceNoteExcersise[] = [voiceNoteExcersise1, voiceNoteExcersise2, voiceNoteExcersise3]
