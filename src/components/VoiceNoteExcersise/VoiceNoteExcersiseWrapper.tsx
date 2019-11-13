import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const VoiceNoteExcersiseWrapper = ({children}: Props) => (
    <div className="i-excersise-wrapper m-grid m-grid--hor">
        {children}
    </div>
)

export default VoiceNoteExcersiseWrapper