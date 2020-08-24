import * as React from 'react';

type Pair<T> = [T, React.Dispatch<React.SetStateAction<T>>];

const UniversityContext = React.createContext<Pair<string | undefined>>([undefined, value => {} ]);

function UniWrapper({children} : React.PropsWithChildren<{}>) {
    const uniPair = React.useState<string | undefined>();

    return (
        <UniversityContext.Provider value={uniPair}>
            {children}
        </UniversityContext.Provider>
    );
}


export {UniWrapper, UniversityContext};