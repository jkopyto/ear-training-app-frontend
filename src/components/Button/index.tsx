import React, { ReactNode } from 'react'
import { Button, IButtonProps } from '@blueprintjs/core'

type Props = {
    children: string | ReactNode
} & IButtonProps

/* <--ProjApkInt-->
*
*  Korzystając z bilbioteki blueprintjs, która jest design systemem,
*  adaptuje w niej zawarty komponent button
*/
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