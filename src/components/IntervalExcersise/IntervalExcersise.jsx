import React from 'react'
import Vex from 'vexflow'
import MIDISounds from 'midi-sounds-react'
import Button from 'components/Button'
import { getNote } from './getNote'
import IntervalExcersiseWrapper from './IntervalExcersiseWrapper'

class IntervalExcersise extends React.Component {
   
    componentDidMount(){
        const VF = Vex.Flow
        var vf = new VF.Factory({
            renderer: {
                elementId: 'score',
                height: 300
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
        var system=makeSystem(250)
        system.addStave({
            voices: [
                score.voice(score.notes('C#5/h,C#5/h', {
                    clef: 'treble',
                    stem: 'up'
                })),
                score.voice(score.notes('C#4/h,C#4/h', {
                    clef: 'treble',                    
                    stem: 'down'
                }))
            ]
        }).addClef('treble').addTimeSignature('4/4') 

        system.addStave({
            voices: [
                score.voice(score.notes('C#3/h,C#3/h', {
                    clef: 'bass',
                    stem: 'up'
                })),
                score.voice(score.notes('C#2/h,C#2/h', {
                    clef: 'bass',
                    stem: 'down'
                }))
            ]
        }).addClef('bass').addTimeSignature('4/4')
        system.addConnector('brace')
        system.addConnector('singleRight')
        system.addConnector('singleLeft')

        //measure 2
        system=makeSystem(220)
         system.addStave({
             voices: [
                 score.voice(score.notes('C#5/h,C#5/h', {
                     clef: 'treble',
                     stem: 'up'
                 })),
                 score.voice(score.notes('C#4/h,C#4/h', {
                     clef: 'treble',
                     stem: 'down'
                 }))
             ]
         })
        system.addStave({
            voices: [
                score.voice(score.notes('C#3/h,C#3/h', {
                    clef: 'bass',
                    stem: 'up'
                })),
                score.voice(score.notes('C#2/h,C#2/h', {
                    clef: 'bass',
                    stem: 'down'
                }))
            ]
        })
        system.addConnector('singleRight')
        
        vf.draw()
    }

    playInstrument() {
        const contextTime = this.midiSounds.contextTime()
        this.midiSounds.setInstrumentVolume(3, .3)
        this.midiSounds.playChordAt(contextTime, 3, [getNote("C#4")], .7)
        this.midiSounds.playChordAt(contextTime+.7, 3, [getNote("D#4")], .7)
    }

    render(){
        return (
            <IntervalExcersiseWrapper>
                <div id="score" className="m-grid__item" />
                <Button onClick={this.playInstrument.bind(this)}>PLAY</Button>
                <MIDISounds 
                    ref={(ref)=> (this.midiSounds = ref)} 
                    appleElementName="root" 
                    instruments={[3]} />
            </IntervalExcersiseWrapper>
        )
    }
    
}

export default IntervalExcersise