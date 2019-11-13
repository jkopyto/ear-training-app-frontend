import React from 'react'
import {
    Piano,
    MidiNumbers
} from 'react-piano'
import 'react-piano/dist/styles.css'
import DimensionProvider from '../DimensionProvider/DimensionProvider'

const midiToNote = {
    48: "C",
    49: "C#/Db",
    50: "D",
    51: "D#/Eb",
    52: "E",
    53: "F",
    54: "F#/Gb",
    55: "G",
    56: "G#/Ab",
    57: "A",
    58: "A#/Hb",
    59: "H"
}

const PianoKeyboard = (props) => (
    <div className={props.className || ""}>
        <DimensionProvider>
        {({ containerWidth }) => ( 
            <Piano
                noteRange={{ first: MidiNumbers.fromNote('c3'), last: MidiNumbers.fromNote('b3') }}
                playNote={(midiNumber) => null}
                width={containerWidth}
                stopNote={(midiNumber) => null}
                renderNoteLabel={({ keyboardShortcut, midiNumber }) => (
                    midiToNote[midiNumber]
                )}
            />
        )}
        </DimensionProvider>
    </div>
  )

export default PianoKeyboard