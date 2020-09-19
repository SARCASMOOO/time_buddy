import {useEffect, useState} from 'react';

function useWindowSize(): [number, number] {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const reportWindowSize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', reportWindowSize);

        return () => window.removeEventListener('resize', reportWindowSize);
    }, []);

    return [windowWidth, windowHeight];
}

export default useWindowSize;