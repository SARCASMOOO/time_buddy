import React from 'react';

interface Props {
    end: number;
    start: number;
}

const DrawCourses = ({start, end}: Props) => (
    <div style={{width: '100%', height: (end + 'px'), backgroundColor: 'blue', position: 'absolute', top: (start +'px')}} />
);

export default DrawCourses;