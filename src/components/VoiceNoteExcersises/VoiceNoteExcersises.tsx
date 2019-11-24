import React from 'react'
import ExcersiseMain from '../ExcersiseTemplate/ExcersiseMain'
import { voiceNoteExcersises } from './voiceNoteExcersise'
import { InjectedIntlProps, FormattedMessage, injectIntl } from 'react-intl'
import VoiceNoteExcersisePianoKeyboard from './VoiceNoteExcersisePianoKeyboard'
import MusicPlayer from 'src/components/MusicPlayer/MusicPlayer'
import { VoiceNoteExcersise } from '../@types/voiceNoteExcersise'
import messages from 'src/util/instruments'
import { humanVoices } from 'src/util/humanVoices'

const VoiceNoteExcersises = ({intl}: InjectedIntlProps) => (
    <ExcersiseMain
        excersise={voiceNoteExcersises}
        repeats={3}
    >
        {(excersise, addExcersiseScore, giveAnswer, repeatsLeft, decreaseRepeats, givenAnswer) => (
            <>
                <FormattedMessage
                    id="voice-note-description"
                    defaultMessage="You will hear the song {title}{br}{instrument} part starts from {startingNote} ({voicePosition} voice){br}{br} What is the {excersiseNotePosition} sound played by {instrument}?"
                    values={{
                        title: <><strong>{(excersise as VoiceNoteExcersise).title}</strong><br /></>,
                        instrument: <strong>{intl.formatMessage(messages[(excersise as VoiceNoteExcersise).instrument])}</strong>,
                        startingNote: <strong>{(excersise as VoiceNoteExcersise).startingVoiceNote}</strong>,
                        voicePosition: <strong>{intl.formatMessage(humanVoices[(excersise as VoiceNoteExcersise).givenVoicePosition])}</strong>,
                        excersiseNotePosition: <strong>{intl.formatMessage(humanVoices[(excersise as VoiceNoteExcersise).excersiseNotePosition])}</strong>,
                        br: <br />
                    }}
                />
                <VoiceNoteExcersisePianoKeyboard
                    rightAnswer={(excersise as VoiceNoteExcersise).rightAnswer}
                    givenAnswer={givenAnswer}
                    onRightAnswer={addExcersiseScore}
                    giveAnswer={giveAnswer}
                />
                <div className="m-grid m-grid__item--center">
                    <FormattedMessage
                        id="repeats-left-voiceNote"
                        defaultMessage={`Repeats left: {left}`}
                        values={
                            {
                                left: repeatsLeft
                            }
                        }
                    />
                </div>
                <MusicPlayer
                    title={(excersise as VoiceNoteExcersise).title}
                    cover={(excersise as VoiceNoteExcersise).cover}
                    backendTitle={(excersise as VoiceNoteExcersise).backendTitle}
                    onAudioStop={decreaseRepeats}
                    showPlay={repeatsLeft !== 0 || !!givenAnswer}
                />
            </>
        )}
    </ExcersiseMain>
)

export default injectIntl(VoiceNoteExcersises)
