import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const DashboardContentWrapper = ({children}: Props) =>
    <div className="m-grid__item m-grid--center m-grid--justify-center m-grid__item--middle i-dashboard--content-wrapper">
        {children}
    </div>

export default DashboardContentWrapper