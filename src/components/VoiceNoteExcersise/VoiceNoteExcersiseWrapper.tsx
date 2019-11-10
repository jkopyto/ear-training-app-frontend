import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const VoiceNoteExcersiseWrapper = ({children}: Props) => (
    <div className="i-excersise-wrapper">
        {children}
    </div>
)

export default VoiceNoteExcersiseWrapper