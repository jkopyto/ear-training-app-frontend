export type AccidCodes = "accidentalSharp" | "accidentalFlat"| "accidentalNatural" | "accidentalDoubleSharp" | "accidentalDoubleFlat"
export type Accids = '#'| 'b'| 'n'| '##'| 'bb'

//These arrays below must have the same length
export const accidentalsArray: Accids[] = ['#','b','n','##','bb']
export const mappedAccidentalsCodes: AccidCodes[] = ["accidentalSharp", "accidentalFlat", "accidentalNatural", "accidentalDoubleSharp", "accidentalDoubleFlat"]
export const codeToAccidental: Record<AccidCodes, Accids> = {
    "accidentalSharp": "#",
    "accidentalDoubleSharp": "##",
    "accidentalFlat": "b",
    "accidentalDoubleFlat": "bb",
    "accidentalNatural": "n",
}