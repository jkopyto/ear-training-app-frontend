import React from 'react'
import Vex from 'vexflow'
import MIDISounds from 'midi-sounds-react'
import Button from 'src/components/Button'
import { getNote } from './getNote'
import IntervalExcersiseWrapper from './IntervalExcersiseWrapper'
import AnswerButtons from './AnswerButtons'

class IntervalExcersise extends React.Component {
    state = {
        repeats: 0
    }
   
    componentDidMount(){
        const VF = Vex.Flow
        var vf = new VF.Factory({
            renderer: {
                elementId: 'score',
                height: 250
            }
        })
        const score = vf.EasyScore()

        let x = 20
        const y = 0

         function makeSystem(width) {
             const system = vf.System({
                 x: x,
                 y: y,
                 width: width,
                 spaceBetweenStaves: 10
             });
             x += width
             return system
         }

         score.set({time: '4/4'})
         

        // measure 1
        var system=makeSystem(140)
        system.addStave({
            voices: [
                score.voice(score.notes('C#4/w', {
                    clef: 'treble',
                    stem: 'up'
                }))
            ]
        }).addClef('treble').addTimeSignature('4/4') 

        system.addStave({
            voices: [
                score.voice(score.notes('C3/w/r', {
                    clef: 'bass',
                    stem: 'up'
                }))
            ]
        }).addClef('bass').addTimeSignature('4/4')
        system.addConnector('brace')
        system.addConnector('singleRight')
        system.addConnector('singleLeft')

        //measure 2
        system=makeSystem(100)
         system.addStave({
             voices: [
                 score.voice(score.notes('D4/w', {
                     clef: 'treble',
                     stem: 'up'
                 }))
             ]
         })
        system.addStave({
            voices: [
                score.voice(score.notes('C3/w/r', {
                    clef: 'bass',
                    stem: 'up'
                }))
            ]
        })
        system.addConnector('singleRight')
        
        vf.draw()
    }

    playInstrument() {
        this.setState({
            repeats: this.state.repeats+1
        })
        const contextTime = this.midiSounds.contextTime()
        this.midiSounds.setInstrumentVolume(3, .3)
        this.midiSounds.playChordAt(contextTime, 3, [getNote("C#4")], .7)
        this.midiSounds.playChordAt(contextTime+.7, 3, [getNote("D4")], .7)
    }

    render(){
        return (
            <IntervalExcersiseWrapper>
                <div id="score" className="m-grid__item i-interval__score" />

                <AnswerButtons />

                <Button onClick={this.playInstrument.bind(this)} disabled={this.state.repeats === 6}>PLAY</Button>
                <b>{`Pozostało ${6-this.state.repeats} powtórzeń`}</b>
                <MIDISounds 
                    ref={(ref)=> (this.midiSounds = ref)} 
                    appleElementName="root" 
                    instruments={[3]} />
                
            </IntervalExcersiseWrapper>
        )
    }
    
}

export default IntervalExcersise