import React from 'react'
import { Button, IButtonProps } from '@blueprintjs/core'

type Props = {
    children: string
} & IButtonProps

const CustomButton = ({
    className,
    children,
    ...rest
}: Props) => (
    <Button className={className} {...rest}>
        {children}
    </Button>
)

export default CustomButton