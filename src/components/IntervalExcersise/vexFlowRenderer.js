import Vex from 'vexflow'
import { getClef } from './getClef'

/* <--ProjApkInt-->
*
*  Cała metoda jest kompleksową adaptacją na potrzeby projektu biblioteki
*  vexflow pozwalającej rysować partytury w przeglądarce
*/

const vexFlowRenderer = (notes, displayStyle, isAnswerGiven) => {

    if (displayStyle === "melodic"){
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

        var system = makeSystem(120)

        //>>>>>>>FIRST NOTE<<<<<<<<
        if (getClef(notes[0]) === "treble") {
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
                        stem: 'up',
                        id: 'pause'
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
                        stem: 'up',
                        id: 'pause'
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
        isAnswerGiven && notes.forEach((note, index) => {
            if (index < 1) return

            if (getClef(note) === "treble") {
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
                            stem: 'up',
                            id: 'pause'
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
                            stem: 'up',
                            id: 'pause'
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
    } else if (displayStyle === "harmonic") {
        const VF = Vex.Flow
        vf = new VF.Factory({
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

        system = makeSystem(140)

        //>>>>>>>REST OF NOTES<<<<<<<<
        if(isAnswerGiven){
            document.getElementById('score').innerHTML=''
             const VF = Vex.Flow
             vf = new VF.Factory({
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

            system = makeSystem(140)
            system.addStave({
                voices: notes.some((note) => getClef(note) === "treble") ?
                    notes.filter(note => getClef(note) === "treble")
                     .map(note => score.voice(score.notes(`${note}/w`, 
                        {
                            clef: 'treble',
                            stem: 'up'
                        }
                    ))) : 
                    [
                        score.voice(score.notes('C4/w/r', {
                            clef: "treble",
                            stem: 'up',
                            id: 'pause'
                        }))
                    ]
            }).addClef("treble").addTimeSignature('4/4')

            system.addStave({
                voices: notes.some((note) => getClef(note) === "bass") ?
                    notes.filter(note => getClef(note) === "bass")
                    .map(note => score.voice(score.notes(`${note}/w`, {
                        clef: 'bass',
                        stem: 'up'
                    }))) : [
                        score.voice(score.notes('C4/w/r', {
                            clef: "bass",
                            stem: 'up',
                            id: 'pause'
                        }))
                    ]
            }).addClef("bass").addTimeSignature('4/4')
            system.addConnector('brace')
            system.addConnector('singleRight')
            system.addConnector('singleLeft')
            vf.draw()
        } else {
            //>>>>>>>FIRST NOTE<<<<<<<<
            system.addStave({
                voices: getClef(notes[0]) === "treble" ? [
                    score.voice(score.notes(`${notes[0]}/w`, {
                        clef: "treble",
                        stem: 'up'
                    }))
                ] : [
                    score.voice(score.notes('C4/w/r', {
                        clef: "treble",
                        stem: 'up',
                        id: 'pause'
                    }))
                ]
            }).addClef("treble").addTimeSignature('4/4')
            system.addStave({
                voices: getClef(notes[0]) === "bass" ? [
                    score.voice(score.notes(`${notes[0]}/w`, {
                        clef: "bass",
                        stem: 'up'
                    }))
                ] : [
                    score.voice(score.notes('C4/w/r', {
                        clef: "bass",
                        stem: 'up',
                        id: 'pause'
                    }))
                ]
            }).addClef("bass").addTimeSignature('4/4')
            system.addConnector('brace')
            system.addConnector('singleRight')
            system.addConnector('singleLeft')

            vf.draw()
        }
    } else {
        throw new Error("Something went wrong")
    }
}

export default vexFlowRenderer