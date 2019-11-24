import React, { useEffect } from 'react'
import PianoKeyboard from '../PianoKeyboard/PianoKeyboard'
import { PianoKeyboardRightAnswers } from '../@types/pianoKeyboardRightAnswers'

type Props = {
    rightAnswer: PianoKeyboardRightAnswers
    givenAnswer?: string
    onRightAnswer: () => void
    giveAnswer: (answer: string) => void
}

const VoiceNoteExcersisePianoKeyboard = ({ rightAnswer, givenAnswer, giveAnswer, onRightAnswer}: Props) => {
    useEffect(()=> {
        const piano = document.querySelector('.i-voice-note__piano-keyboard') as HTMLElement
        piano.onclick = (e) => {
            const keyboard = document.querySelector('.ReactPiano__Keyboard')
            const pianoKeys = keyboard!.childNodes as NodeListOf<HTMLElement>
            const eventTarget = e.target as HTMLElement
            const clickedKey = eventTarget.firstElementChild!.innerHTML
            pianoKeys.forEach((key) => {
                const pianoKey = key.firstElementChild!.innerHTML
                if (pianoKey === rightAnswer) {
                    key.classList.add("ReactPiano__Key--true")
                    if(clickedKey===rightAnswer && !givenAnswer) {
                        onRightAnswer()
                    }
                }
                if (clickedKey !== rightAnswer && pianoKey === clickedKey && !givenAnswer) key.classList.add("ReactPiano__Key--false")
            })
            giveAnswer(clickedKey)
        }
    })

    useEffect(() => {
        if(!givenAnswer){
            const keyboard = document.querySelector('.ReactPiano__Keyboard')
            if(!keyboard) return
            const pianoKeys = keyboard.childNodes as NodeListOf<HTMLElement>
            pianoKeys.forEach((key) => {
                key.classList.remove("ReactPiano__Key--true")
                key.classList.remove("ReactPiano__Key--false")
            })
        }
    },[givenAnswer])
    
    return (
        <PianoKeyboard className="i-voice-note__piano-keyboard" />
    )
}

export default VoiceNoteExcersisePianoKeyboard