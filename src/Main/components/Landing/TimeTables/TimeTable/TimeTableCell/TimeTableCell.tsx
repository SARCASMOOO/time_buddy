import React from 'react';

interface Props {text?: string}
const TimeTableCell = ({text}: Props) => <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}>{text}</div>

export default TimeTableCell;