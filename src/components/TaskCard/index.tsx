import React from 'react'
import Button from '../Button'
import {Card, Elevation, ICardProps} from "@blueprintjs/core"
import * as H from 'history'
import { Link } from 'react-router-dom'

type Props = {
    title: string,
    description: string
    elevationLevel: Elevation
    className?: string
    excersisePath: H.LocationDescriptor
} & ICardProps

const TaskCard = ({
    title,
    description,
    elevationLevel,
    excersisePath,
    className
}: Props) => (
    <div className={className ? className : "i-task-card"}>
        <Card interactive={true} elevation={elevationLevel}>
            <h5>{`${title}`}</h5>
            <p>{`${description}`}</p>
            <Link to={excersisePath}>
                <Button intent={"success"} >GO</Button>
            </Link>
        </Card>
    </div>
)

export default TaskCard