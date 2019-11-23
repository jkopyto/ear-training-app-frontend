import React from 'react'
import { OpenSheetMusicDisplay as OSMD, GraphicalNote, VexFlowGraphicalNote } from 'opensheetmusicdisplay'
import Vex from 'vexflow'
import { FormattedMessage } from 'react-intl'
import { Button } from '@blueprintjs/core'

declare module 'opensheetmusicdisplay' {
    class VexFlowGraphicalNote extends GraphicalNote {
        vfnote: [any, number];
    }
}

type AccidCodes = 'v18'| 'v44'| 'v4e'| 'v7f'| 'v26'
type Accids = '#'| 'b'| 'n'| '##'| 'bb'

type Props = {
    autoResize?: boolean
    drawTitle?: boolean
    file: string | Document
    repeatsLeft: number
    callback?: () => void
    addExcersiseScore: () => void
    giveAnswer:(answer: string) => void
}

type State = {
    dataReady: boolean
    loaded: boolean
}

class OpenSheetMusicDisplay extends React.Component<Props,State> {
    osmd: OSMD | undefined
    divRef:React.RefObject<HTMLDivElement>
    filledWithAccidentals: { id: string, acc: AccidCodes}[] = []
    checkedNotes: { id: string, acc: AccidCodes}[] = []
    allAccids: { id: string, acc: AccidCodes}[] = []
    
    //These arrays below needs to have the same length
    private accidentalsArray: Accids[] = ['#','b','n','##','bb']
    private mappedAccidentalsCodes: AccidCodes[] = ['v18','v44','v4e','v7f','v26']
    private codeToAccidental = {
        "v18": "#",
        "v7f": "##",
        "v44": "b",
        "v26": "bb",
        "v4e": "n",
    }

    constructor(props: Props) {
        super(props)
        this.state = { 
            dataReady: false, 
            loaded: false,
        }
        this.divRef = React.createRef()
        this.eventListenerMethod.bind(this)
    }

    async setupOsmd() {
        const options = {
            autoResize: this.props.autoResize ? this.props.autoResize : true,
            drawTitle: this.props.drawTitle ? this.props.drawTitle : true,
        }
        this.osmd = new OSMD(this.divRef.current!, options)
        this.osmd.load(this.props.file)
            .then(() => this.osmd!.render())
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.drawTitle !== prevProps.drawTitle || this.props.file !== prevProps.file) {
            this.setupOsmd()
        }
    }

    setAccidentalOnGivenId(id: string){
        this.osmd!.GraphicSheet.MeasureList.forEach((elem: any) => {
            elem.forEach((elem: any) =>
                elem.staffEntries.forEach((elem: any) => {
                    const note: GraphicalNote = elem.graphicalVoiceEntries[0].notes[0]
                    const vexFlowNote: VexFlowGraphicalNote = note as VexFlowGraphicalNote
                    if (vexFlowNote.vfnote !== undefined) {
                        if (vexFlowNote.vfnote[0].getAttribute('id') === id.slice(3)) {
                            const accidental = vexFlowNote.vfnote[0].getAccidentals()
                            if (accidental === undefined) vexFlowNote.vfnote[0].addAccidental(vexFlowNote.vfnote[1], new Vex.Flow.Accidental('#'))
                            else if (accidental) {
                                const num = this.mappedAccidentalsCodes.indexOf(accidental[0].accidental.code)
                                if(num < this.mappedAccidentalsCodes.length - 1){ 
                                    vexFlowNote.vfnote[0].modifiers = []
                                    vexFlowNote.vfnote[0].addAccidental(vexFlowNote.vfnote[1], new Vex.Flow.Accidental(this.accidentalsArray[num+1]))
                                }
                                else vexFlowNote.vfnote[0].modifiers = []
                            }
                        }
                    }
                })
            )
        })
        this.osmd!.render()
    }

    setIfNoAccid(id: string, accid: AccidCodes){
        this.osmd!.GraphicSheet.MeasureList.forEach((elem: any) => {
            elem.forEach((elem: any) =>
                elem.staffEntries.forEach((elem: any) => {
                    const note: GraphicalNote = elem.graphicalVoiceEntries[0].notes[0]
                    const vexFlowNote: VexFlowGraphicalNote = note as VexFlowGraphicalNote
                    if (vexFlowNote.vfnote !== undefined) {
                        if (vexFlowNote.vfnote[0].getAttribute('id') === id) {
                            const accidental = vexFlowNote.vfnote[0].getAccidentals()
                            if (!accidental){
                                vexFlowNote.vfnote[0].addAccidental(vexFlowNote.vfnote[1], new Vex.Flow.Accidental(this.codeToAccidental[accid]))
                            }
                        }
                    }
                })
            )
        })
    }
    
    getStartedAccidentalsAndClear(){
        this.osmd!.GraphicSheet.MeasureList.forEach((elem:any) => {
            elem.forEach((elem: any) => 
                elem.staffEntries.forEach((elem: any) => {
                    const note:GraphicalNote =  elem.graphicalVoiceEntries[0].notes[0]
                    const vexFlowNote: VexFlowGraphicalNote = note as VexFlowGraphicalNote
                    if (vexFlowNote.vfnote !== undefined){
                        const accidentals = vexFlowNote.vfnote[0].getAccidentals()
                        if(accidentals){
                            this.filledWithAccidentals.push({id: vexFlowNote.vfnote[0].getAttribute('id'), acc: accidentals[0].accidental.code })
                            vexFlowNote.vfnote[0].modifiers=[]
                        }
                    }
                })
            )
        })
        this.osmd!.render()
    }

    setNoteColor(id: string, color: string){
        this.osmd!.GraphicSheet.MeasureList.forEach((elem: any) => {
            elem.forEach((elem: any) =>
                elem.staffEntries.forEach((elem: any) => {
                    const note: GraphicalNote = elem.graphicalVoiceEntries[0].notes[0]
                    const vexFlowNote: VexFlowGraphicalNote = note as VexFlowGraphicalNote
                    if (vexFlowNote.vfnote !== undefined) {
                        if (vexFlowNote.vfnote[0].getAttribute('id') === id) {
                            document.getElementById(`vf-${id}`)!.children[1]!.children[0]!.setAttribute("fill", color)
                        }
                    }
                })
            )
        })
    }

    getAllAccids(){
        this.osmd!.GraphicSheet.MeasureList.forEach((elem: any) => {
            elem.forEach((elem: any) =>
                elem.staffEntries.forEach((elem: any) => {
                    const note: GraphicalNote = elem.graphicalVoiceEntries[0].notes[0]
                    const vexFlowNote: VexFlowGraphicalNote = note as VexFlowGraphicalNote
                    if (vexFlowNote.vfnote !== undefined) {
                        const accidentals = vexFlowNote.vfnote[0].getAccidentals()
                        if (accidentals) {
                            this.allAccids.push({ id: vexFlowNote.vfnote[0].getAttribute('id'), acc: accidentals[0].accidental.code })
                        }
                    }
                })
            )
        })
        this.osmd!.render()
    }

    checkNotes(){
        this.osmd!.GraphicSheet.MeasureList.forEach((elem: any) => {
            elem.forEach((elem: any) =>
                elem.staffEntries.forEach((elem: any) => {
                    const note: GraphicalNote = elem.graphicalVoiceEntries[0].notes[0]
                    const vexFlowNote: VexFlowGraphicalNote = note as VexFlowGraphicalNote
                    if (vexFlowNote.vfnote !== undefined) {
                        const accidentals = vexFlowNote.vfnote[0].getAccidentals()
                        if (accidentals) {
                            this.checkedNotes.push({ id: vexFlowNote.vfnote[0].getAttribute('id'), acc: accidentals[0].accidental.code })
                        }
                    }
                })
            )
        })
    }

    onCheckClick(){
        this.checkNotes()
        this.filledWithAccidentals.forEach((elem) => {
            this.setIfNoAccid(elem.id, elem.acc as AccidCodes)
        })
        this.getAllAccids()
        this.osmd!.render()
        this.allAccids.forEach((note)=> {
            const noteIndexInFilled = this.filledWithAccidentals.findIndex((n) => n.id === note.id)
            if (noteIndexInFilled !== -1){
                if (this.filledWithAccidentals[noteIndexInFilled].acc === note.acc && this.checkedNotes.findIndex((n) => n.id === note.id) !== -1){
                    this.setNoteColor(note.id, "#0F9960")
                }
                else this.setNoteColor(note.id, "#D9822B")
            }
            else this.setNoteColor(note.id, "#C23030")
        })
        this.removeOnClickMethods()
    }

    eventListenerMethod(e: Event){
        const path = e.target as HTMLElement
        if (path && path.parentElement && path.parentElement.parentElement && path.parentElement.parentElement.parentElement) {
            const note = path.parentElement.parentElement.parentElement as HTMLElement
            note.classList.contains("vf-stavenote") && this.setAccidentalOnGivenId(note.id)
        }
    }

    setOnClickMethods(){
        const svg = document.querySelector<HTMLElement>('svg')
        svg && svg.addEventListener("click", this.eventListenerMethod, true)
    }

    removeOnClickMethods(){
        const svg = document.querySelector<HTMLElement>('svg')
        svg && svg.removeEventListener("click", this.eventListenerMethod, true)
    }

    async componentDidMount() {
        await this.setupOsmd()
        await this.getStartedAccidentalsAndClear()
        this.setOnClickMethods()
    }

    render() {
        return (
            <>
                <div ref={this.divRef} />
                <div className="m-grid m-grid__item--center">
                    <FormattedMessage
                        id="repeats-left-enharmonics"
                        defaultMessage={`Repeats left: {left}`}
                        values={{ left: this.props.repeatsLeft }}
                    />
                </div>
                <Button 
                    onClick={
                        () => this.onCheckClick()
                    }
                >
                    <FormattedMessage
                        id="check-excersise-enharmonics"
                        defaultMessage="Check excersise" />
                </Button>
            </>
        )
    }
}

export default OpenSheetMusicDisplay