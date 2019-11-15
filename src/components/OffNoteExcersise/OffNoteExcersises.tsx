import React from 'react'
import ExcersiseMain from '../ExcersiseTemplate/ExcersiseMain'
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl'
import VoiceNoteExcersisePianoKeyboard from '../VoiceNoteExcersises/VoiceNoteExcersisePianoKeyboard'
import instruments from 'src/util/instruments'
import keys from 'src/util/keys'
import { OffNoteExcersise } from '../@types/offNoteExcersise'
import MusicPlayer from '../MusicPlayer/MusicPlayer'
import {offNoteExcersises} from './offNoteExcersises'

const OffNoteExcersises = ({ intl }: InjectedIntlProps) => (
    <ExcersiseMain
        excersise={offNoteExcersises}
        repeats={3}
    >
        {(excersise, addExcersiseScore, giveAnswer, repeatsLeft, decreaseRepeats, givenAnswer) => (
            <>
                <FormattedMessage
                    id="off-note-description"
                    defaultMessage="You will hear the song {title} in key {key}{br} In {instrument} part you can hear an off-note sound. Find it and press the right key on piano keyboard"
                    values={{
                        title: <strong>{(excersise as OffNoteExcersise).title}</strong>,
                        instrument: <strong>{intl.formatMessage(instruments[(excersise as OffNoteExcersise).instrument])}</strong>,
                        key: <strong>{intl.formatMessage(keys[(excersise as OffNoteExcersise).key])}</strong>,
                        br: <br />
                    }}
                />
                <VoiceNoteExcersisePianoKeyboard
                    rightAnswer={(excersise as OffNoteExcersise).rightAnswer}
                    givenAnswer={givenAnswer}
                    onRightAnswer={addExcersiseScore}
                    giveAnswer={giveAnswer}
                />
                <div className="m-grid m-grid__item--center">
                    <FormattedMessage
                        id="repeats-left-offNote"
                        defaultMessage={`Repeats left: {left}`}
                        values={{ left: repeatsLeft }}
                    />
                </div>
                <MusicPlayer
                    title={(excersise as OffNoteExcersise).title}
                    cover={(excersise as OffNoteExcersise).cover}
                    backendTitle={(excersise as OffNoteExcersise).backendTitle}
                    onAudioStop={decreaseRepeats}
                    showPlay={repeatsLeft !== 0 || !givenAnswer}
                />
            </>
        )}
    </ExcersiseMain>
)

export default injectIntl(OffNoteExcersises)