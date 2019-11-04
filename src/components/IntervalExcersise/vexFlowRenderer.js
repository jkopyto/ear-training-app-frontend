import Vex from 'vexflow'
import { getClef } from './getClef'
import { getNote } from './getNote'


const vexFlowRenderer = (notes, displayStyle, isAnswerGiven) => {
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

    score.set({
        time: '4/4'
    })

    var system = makeSystem(140)

    //>>>>>>>FIRST NOTE<<<<<<<<
    if(getNote([notes[0] === "treble"])) {
         system.addStave({
             voices: [
                 score.voice(score.notes(`${notes[0]}/w`, {
                     clef: 'treble',
                     stem: 'up'
                 }))
             ]
         }).addClef('treble').addTimeSignature('4/4')

         system.addStave({
             voices: [
                 score.voice(score.notes('C4/w/r', {
                     clef: 'bass',
                     stem: 'up'
                 }))
             ]
         }).addClef('bass').addTimeSignature('4/4')
         system.addConnector('brace')
         system.addConnector('singleRight')
         system.addConnector('singleLeft')

         vf.draw()
    } else {
        system.addStave({
            voices: [
                score.voice(score.notes('C5/w/r', {
                    clef: 'treble',
                    stem: 'up'
                }))
            ]
        }).addClef('treble').addTimeSignature('4/4')

        system.addStave({
            voices: [
                score.voice(score.notes(`${notes[0]}/w`, {
                    clef: 'bass',
                    stem: 'up'
                }))
            ]
        }).addClef('bass').addTimeSignature('4/4')
        system.addConnector('brace')
        system.addConnector('singleRight')
        system.addConnector('singleLeft')

        vf.draw()
    }
   
    //>>>>>>>REST OF NOTES<<<<<<<<
    isAnswerGiven && notes.forEach((note,index) => {
        if(index<1) return

        if(getClef(note) === "treble") {
            system = makeSystem(100)
            system.addStave({
                voices: [
                    score.voice(score.notes(`${note}/w`, {
                        clef: 'treble',
                        stem: 'up'
                    }))
                ]
            })
            system.addStave({
                voices: [
                    score.voice(score.notes('C4/w/r', {
                        clef: 'bass',
                        stem: 'up'
                    }))
                ]
            })
            system.addConnector('singleRight')

            vf.draw()
        } else {
            system = makeSystem(100)
            system.addStave({
                voices: [
                    score.voice(score.notes('C5/w/r', {
                        clef: 'treble',
                        stem: 'up'
                    }))
                ]
            })
            system.addStave({
                voices: [
                    score.voice(score.notes(`${note}/w`, {
                        clef: 'bass',
                        stem: 'up'
                    }))
                ]
            })
            system.addConnector('singleRight')

            vf.draw()
        }
    })

    
}

export default vexFlowRenderer