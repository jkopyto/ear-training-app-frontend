import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
    className?: string
}

const ExcersiseWrapper = ({ children, className }: Props) => (
    <div className={`i-excersise-wrapper m-grid m-grid--hor ${className || ""}`}>
        {children}
    </div>
)

export default ExcersiseWrapper