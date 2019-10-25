import React from 'react'
import Button from '../Button'
import {Card, Elevation, ICardProps} from "@blueprintjs/core"

type Props = {
    title: string,
    description: string
    elevationLevel: Elevation
    className?: string
} & ICardProps

const TaskCard = ({
    title,
    description,
    elevationLevel,
    className
}: Props) => (
    <div className={className ? className : "i-task-card"}>
        <Card interactive={true} elevation={elevationLevel}>
            <h5>{`${title}`}</h5>
            <p>{`${description}`}</p>
            <Button intent={"success"}>GO</Button>
        </Card>
    </div>
)

export default TaskCard