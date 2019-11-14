import { OffNoteExcersise } from "../@types/offNoteExcersise"

const excersise1: OffNoteExcersise = {
    title: "Gabriel Faure - Les berceaux op.23 no.1",
    cover: "https://i.ebayimg.com/images/g/5eAAAOSw1T1b9s1D/s-l300.jpg",
    key: "Cmin",
    instrument: "violoncello",
    rightAnswer: "H",
    backendTitle: "Faure_les_berceaux"
}

const excersise2: OffNoteExcersise = {
    title: "Kayah - Ajde Jano",
    cover: "http://dyskografie.com/uploads/plyty/okladki/kayax-transoriental-orchestra.jpg",
    key: "Dmin",
    instrument: "soprano",
    rightAnswer: "D#/Eb",
    backendTitle: "Kayah_ajde_jano"
}

const excersise3: OffNoteExcersise = {
    title: "Bach - Minuet BWV 115",
    cover: "https://bi.im-g.pl/im/cd/e7/13/z20872141V,Jan-Sebastian-Bach.jpg",
    key: "Gmin",
    instrument: "piano",
    rightAnswer: "H",
    backendTitle: "Back_minuet_bwv115"
}

export const offNoteExcersises: OffNoteExcersise[] = [excersise1, excersise2, excersise3]