import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const IntervalExcersiseWrapper = ({children}: Props) => (
    <div className= "i-interval-wrapper m-grid m-grid--hor m-grid__item--center">
        {children}
    </div>
)

export default IntervalExcersiseWrapper