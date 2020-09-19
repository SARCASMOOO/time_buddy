import {useEffect, useState} from 'react';
import useWindowSize from "./useWindowSize";

export enum ScreenType {
    mobile,
    desktop
}

function useResponsive() {
    const [width] = useWindowSize();
    const [isMobile, setIsMobile] = useState<ScreenType | undefined>();

    useEffect(()=> {
        setIsMobile((width < 400) ? ScreenType.mobile : ScreenType.desktop);
    }, [width]);

    return isMobile;
}

export default useResponsive;