import React from 'react'
import { OpenSheetMusicDisplay as OSMD } from 'opensheetmusicdisplay'
import Vex from 'vexflow'
import { FormattedMessage } from 'react-intl'
import { Button } from '@blueprintjs/core'
import GraphicalNoteExtended from './GraphicalNoteExtended'
import { AccidCodes, mappedAccidentalsCodes, accidentalsArray, codeToAccidental } from './utils'

type Props = {
    autoResize?: boolean
    drawTitle?: boolean
    file: string | Document
    repeatsLeft: number
    isAnswerGiven: boolean
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
    divOriRef: React.RefObject<HTMLDivElement>
    filledWithAccidentals: { id: string, acc: AccidCodes}[] = []
    checkedNotes: { id: string, acc: AccidCodes}[] = []
    allAccids: { id: string, acc: AccidCodes}[] = []

    constructor(props: Props) {
        super(props)
        this.state = { 
            dataReady: false, 
            loaded: false,
        }
        this.divRef = React.createRef()
        this.divOriRef = React.createRef()
    }

    async setupOsmd() {
        const options = {
            autoResize: this.props.autoResize ? this.props.autoResize : true,
            drawTitle: false,
        }
        this.osmd = new OSMD(this.divRef.current!, options)
        await this.osmd.load(this.props.file)
            .then(() => this.osmd!.render())
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.drawTitle !== prevProps.drawTitle || this.props.file !== prevProps.file) {
            this.setupOsmd()
        }
    }

    setAccidentalOnGivenId(id: string){
        this.osmd!.GraphicSheet.MeasureList.forEach((elem) => {
            elem.forEach((elem) =>
                elem.staffEntries.forEach((elem) => {
                    const vexFlowNote = elem.graphicalVoiceEntries[0].notes[0] as GraphicalNoteExtended

                    if (vexFlowNote.vfnote !== undefined && vexFlowNote.vfnote[0].getAttribute('id') === id.slice(3)) {
                        const accidental = vexFlowNote.vfnote[0].getAccidentals()

                        if (accidental === undefined) vexFlowNote.vfnote[0].addAccidental(vexFlowNote.vfnote[1], new Vex.Flow.Accidental('#'))
                        else if (accidental) {
                            const num = mappedAccidentalsCodes.indexOf(accidental[0].accidental.code)
                            if(num < mappedAccidentalsCodes.length - 1){ 
                                vexFlowNote.vfnote[0].modifiers = []
                                vexFlowNote.vfnote[0].addAccidental(vexFlowNote.vfnote[1], new Vex.Flow.Accidental(accidentalsArray[num+1]))
                            }
                            else vexFlowNote.vfnote[0].modifiers = []
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
                    const note = elem.graphicalVoiceEntries[0].notes[0]
                    const vexFlowNote = note
                    if (vexFlowNote.vfnote !== undefined) {
                        if (vexFlowNote.vfnote[0].getAttribute('id') === id) {
                            const accidental = vexFlowNote.vfnote[0].getAccidentals()
                            if (!accidental){
                                vexFlowNote.vfnote[0].addAccidental(vexFlowNote.vfnote[1], new Vex.Flow.Accidental(codeToAccidental[accid]))
                            }
                        }
                    }
                })
            )
        })
    }
    
    getStartedAccidentalsAndClear(){
        this.osmd!.GraphicSheet.MeasureList.forEach((elem) => {
            elem.forEach((elem) => 
                elem.staffEntries.forEach((elem) => {
                    const vexFlowNote = elem.graphicalVoiceEntries[0].notes[0] as GraphicalNoteExtended

                    if (vexFlowNote.vfnote !== undefined){
                        const accidental = vexFlowNote.vfnote[0].getAccidentals()
                        const accid = accidental && Object.entries(codeToAccidental).find((val) => val[1] === accidental[0].type)
                        if(accid){
                            this.filledWithAccidentals.push({id: vexFlowNote.vfnote[0].getAttribute('id'), acc: accid[0] as AccidCodes })
                            vexFlowNote.vfnote[0].modifiers=[]
                        }
                    }
                })
            )
        })
        this.osmd!.render()
    }

    setNoteColor(id: string, color: string){
        this.osmd!.GraphicSheet.MeasureList.forEach((elem) => {
            elem.forEach((elem) =>
                elem.staffEntries.forEach((elem) => {
                    const vexFlowNote = elem.graphicalVoiceEntries[0].notes[0] as GraphicalNoteExtended

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
        this.osmd!.GraphicSheet.MeasureList.forEach((elem) => {
            elem.forEach((elem) =>
                elem.staffEntries.forEach((elem) => {
                    const vexFlowNote = elem.graphicalVoiceEntries[0].notes[0] as GraphicalNoteExtended
                   
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
                    const note = elem.graphicalVoiceEntries[0].notes[0]
                    const vexFlowNote = note
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
    checkIfRightAnswer(){
        if(this.filledWithAccidentals.length !== this.checkedNotes.length) return false
        else {
            const num = this.filledWithAccidentals.length
            for(let i = 0; i < num; i++) {
                if (JSON.stringify(this.filledWithAccidentals[i]) !== JSON.stringify(this.checkedNotes[i])) return false
                else return true
            }
        }
    }

    onCheckClick(){
        this.props.giveAnswer(JSON.stringify(this.checkedNotes))
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
        if(this.checkIfRightAnswer()) {
            this.props.addExcersiseScore()
        }
    }

    eventListenerMethod = (e: MouseEvent) => {
        const path = e.target as HTMLElement
        const note = path?.parentElement?.parentElement?.parentElement
        if (note) {
            note.classList.contains("vf-stavenote") && this.setAccidentalOnGivenId(note.id)
        }
    }

    setOnClickMethods(){
        if(this.divRef && this.divRef.current) this.divRef.current.onclick = this.eventListenerMethod
    }

    showOriginal(){
        const options = {
            autoResize: this.props.autoResize ? this.props.autoResize : true,
            drawTitle: false,
        }
        const oriSheet = new OSMD(this.divOriRef.current!, options)
        oriSheet.load(this.props.file)
            .then(() => oriSheet.render())
    }

    async componentDidMount() {
        await this.setupOsmd()
        this.getStartedAccidentalsAndClear()
        this.setOnClickMethods()
    }

    render() {
        return (
            <>
                <div ref={this.divRef} />
                <div ref={this.divOriRef} />
                <div className="m-grid m-grid__item--center">
                    <FormattedMessage
                        id="repeats-left-enharmonics"
                        defaultMessage={`Repeats left: {left}`}
                        values={{ left: this.props.repeatsLeft }}
                    />
                </div>
                <div className= "i-enharmonic-excersise__score-buttons m-grid m-grid-ver">
                    <Button
                        onClick={
                            () => this.onCheckClick()
                        }
                        disabled={this.props.isAnswerGiven}
                        active={this.props.isAnswerGiven}
                    >
                        <FormattedMessage
                            id="check-excersise-enharmonics"
                            defaultMessage="Check excersise" />
                    </Button>
                    <Button
                        onClick={
                            () => {
                                this.showOriginal()
                                this.onCheckClick()
                            }
                        }
                    >
                        <FormattedMessage
                            id="show-original-enharmonics"
                            defaultMessage="Show original" />
                    </Button>
                </div>
            </>
        )
    }
}

export default OpenSheetMusicDisplay