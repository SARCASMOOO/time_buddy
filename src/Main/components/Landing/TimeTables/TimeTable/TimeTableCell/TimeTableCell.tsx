import React from 'react';

interface Props {text?: string}
const TimeTableCell = ({text}: Props) => <div
    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%',
        borderBottom: 'silver solid 1px', borderTop: 'silver solid 1px'}}>{text}</div>

export default TimeTableCell;