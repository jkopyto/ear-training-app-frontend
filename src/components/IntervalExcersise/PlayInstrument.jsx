import React from 'react'
import { getNote } from './getNote'
import MIDISounds from 'midi-sounds-react'
import Button from 'src/components/Button'
import { FormattedMessage } from 'react-intl'


class PlayInstrument extends React.Component {
    state = {
        repeats: 0
    }

    playInstrument() {
        const {
            notes,
            singleNoteDuration
        } = this.props
        this.setState({
            repeats: this.state.repeats+1
        })
        const contextTime = this.midiSounds.contextTime()
        this.midiSounds.setInstrumentVolume(3, .3)
        notes.map((note, i) => {
            return this.midiSounds.playChordAt(contextTime + Math.sign(i)*singleNoteDuration, 3, [getNote(note)], singleNoteDuration)
        })
    }

    render(){
        const {
            numberOfRepeats,
            isPlayButtonUnlocked
        } = this.props
        return (
            <>
                <Button onClick={this.playInstrument.bind(this)} disabled={this.state.repeats === numberOfRepeats && isPlayButtonUnlocked}>
                    <FormattedMessage
                        id="play"
                        defaultMessage="Play"/>
                </Button>
                <FormattedMessage
                    id="repeats-left"
                    defaultMessage={`Repeats left: {left}`}
                    values = {
                        {
                            left: numberOfRepeats - this.state.repeats > 0 ? numberOfRepeats - this.state.repeats : 0
                        }
                    }
                    />
                <MIDISounds 
                    ref={(ref)=> (this.midiSounds = ref)} 
                    appleElementName="root" 
                    instruments={[3]} />
            </>
        )
    }
}

export default PlayInstrument