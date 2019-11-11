import React from 'react'
import ReactJkMusicPlayer from "react-jinke-music-player"
import "react-jinke-music-player/assets/index.css"
import { FormattedMessage, injectIntl, InjectedIntlProps, defineMessages } from 'react-intl'
import messages from 'src/util/instruments'
import PianoKeyboard from './PianoKeyboard'

const voiceNoteExcersiseMessages = defineMessages({
    highest: {
        id: "highest",
        defaultMessage: "highest"
    },
    lowest: {
        id: "lowest",
        defaultMessage: "lowest"
    }
})

const VoiceNoteExcersiseContent = ({intl}: InjectedIntlProps) => (
    <>
        <FormattedMessage 
            id="voice-note-description"
            defaultMessage="You will hear the song {title}{br}{instrument} part starts from {startingNote} ({voicePosition} voice){br}{br} What is the {excersiseNotePosition} sound played by {instrument}?"
            values= {{
                title: <><strong>{"Carmina Burana: were diu werlt"}</strong><br/></>,
                instrument: <strong>{intl.formatMessage(messages.frenchHorn)}</strong>,
                startingNote: <strong>{"G"}</strong>,
                voicePosition: <strong>{intl.formatMessage(voiceNoteExcersiseMessages.highest)}</strong>,
                excersiseNotePosition: <strong>{intl.formatMessage(voiceNoteExcersiseMessages.highest)}</strong>,
                br: <br />
            }}
            />
        <PianoKeyboard />
        <ReactJkMusicPlayer  
            audioLists={[{
                name: "Carmina Burana: were diu welt",
                cover: 'https://gemmellposts.files.wordpress.com/2018/05/carmina-burana-e1525726656958.jpg?w=466',
                musicSrc: () => {
                    return Promise.resolve(
                        'https://ear-trainer-api.herokuapp.com/api/tracks/5dc848b51f09510017b45dac.mp3'
                    )
                }
            }]}
            defaultPlayIndex={0}
            theme='dark'
            preload={true}
            mode='full'
            autoPlay={false}
            showDownload={false}
            showThemeSwitch={false}
            glassBg={true}
            remove={false}
            toggleMode={false}
            showReload={false}
            showPlayMode={false}
            playModeText={undefined}
        />
    </>
)

export default injectIntl(VoiceNoteExcersiseContent)