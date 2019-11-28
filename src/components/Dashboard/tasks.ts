import {defineMessages} from 'react-intl'

export const excersiseTitles = defineMessages({
    first: {
        id: "interval-excersise",
        defaultMessage: "Interval Recognition"
    },
    second: {
        id: "voice-note",
        defaultMessage: "Voice Note Recognition"
    },
    third: {
        id: "off-note",
        defaultMessage: "Off-Note Recognition"
    },
    fourth: {
        id: "enharmonic-excersise",
        defaultMessage: "Enharmonic Excersise"
    }
})

export const excersiseDescriptions = defineMessages({
    interval: {
        id: "interval-excersise-description",
        defaultMessage: "You will heard some intervals played melodically or harmonically. Choose right answer"
    },
    voiceNote: {
        id: "voice-note-dashboard-description",
        defaultMessage: "You will hear a song. Choose the right note pointed in excersise"
    },
    offNote: {
        id: "off-note-excersise-description",
        defaultMessage: "In song that you will heard is located an off-note. Find it"
    },
    enharmonic: {
        id: "enharmonic-excersise-description",
        defaultMessage: "Complete missing chromatic signs"
    }
})
