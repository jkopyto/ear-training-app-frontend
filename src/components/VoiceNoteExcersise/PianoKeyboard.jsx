import React from 'react'
import {
    Piano,
    MidiNumbers
} from 'react-piano'
import 'react-piano/dist/styles.css'
import DimensionProvider from './DimensionProvider'

const PianoKeyboard = () => (
    <DimensionProvider>
    {({ containerWidth }) => ( 
        <Piano
            noteRange={{ first: MidiNumbers.fromNote('c3'), last: MidiNumbers.fromNote('b3') }}
            playNote={(midiNumber) => {
                // Play a given note - see notes below
            }}
            width={containerWidth}
            stopNote={(midiNumber) => {
                // Stop playing a given note - see notes below
            }}
        />
    )}
    </DimensionProvider>
  )

export default PianoKeyboard