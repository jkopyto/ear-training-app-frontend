import React from 'react'
import {
    Piano,
    MidiNumbers
} from 'react-piano'
import DimensionProvider from '../DimensionProvider/DimensionProvider'
import {midiToNote} from "./utils"

const PianoKeyboard = ({className}) => (
    <div className={className || ""}>
        <DimensionProvider>
        {({ containerWidth }) => ( 
            <Piano
                noteRange={{ first: MidiNumbers.fromNote('c3'), last: MidiNumbers.fromNote('b3') }}
                width={containerWidth}
                playNote={() => {}}
                stopNote={() => {}}
                renderNoteLabel={({ keyboardShortcut, midiNumber }) => (
                    midiToNote[midiNumber]
                )}
            />
        )}
        </DimensionProvider>
    </div>
  )

export default PianoKeyboard