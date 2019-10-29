import Vex from 'vexflow'


const vexFlowRenderer = () => {
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


    // measure 1
    var system = makeSystem(140)
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
    system = makeSystem(100)
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

export default vexFlowRenderer