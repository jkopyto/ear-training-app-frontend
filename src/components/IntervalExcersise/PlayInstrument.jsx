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
            noteDuration,
            playStyle
        } = this.props
        this.setState({
            repeats: this.state.repeats+1
        })
        const contextTime = this.midiSounds.contextTime()
        this.midiSounds.setInstrumentVolume(3, .3)
        playStyle === "melodic" ? 
        notes.map((note, i) => {
            return this.midiSounds.playChordAt(contextTime + Math.sign(i) * noteDuration, 3, [getNote(note)], noteDuration)
        }) 
        :
        this.midiSounds.playChordAt(0,3, notes.map(note => getNote(note)), noteDuration)
        
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
