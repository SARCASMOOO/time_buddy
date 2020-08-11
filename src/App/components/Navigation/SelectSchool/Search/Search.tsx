import React from "react";

// @ts-ignore
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
// @ts-ignore
import { SearchProvider, Results, SearchBox } from "@elastic/react-search-ui";
// @ts-ignore
import { Layout } from "@elastic/react-search-ui-views";

import "@elastic/react-search-ui-views/lib/styles/styles.css";

const connector = new AppSearchAPIConnector({
    searchKey: "search-371auk61r2bwqtdzocdgutmg",
    engineName: "search-ui-examples",
    hostIdentifier: "host-2376rb"
});

const Search = () => {
    return (
        <SearchProvider
            config={{
                apiConnector: connector
            }}
        >
            <div className="App">
                <Layout
                    header={<SearchBox />}
                    bodyContent={<Results style={{overflow: "scrollX"}}titleField="title" urlField="nps_link" />}
                />
            </div>
        </SearchProvider>
    );
}

export default Search;