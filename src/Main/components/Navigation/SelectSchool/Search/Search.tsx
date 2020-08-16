import React, {useState} from "react";
import AsyncSelect from 'react-select/async';
import Firebase, {FirebaseContext, withFirebase} from '../../../Firebase';
import {compose} from 'recompose';
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../../../constants/routes";

interface Props {
    firebase: Firebase;
}

const SearchBase = (props: Props) => {
    const [state, setState] = useState({selectedTag: []});

    const handleOnChange = (tags: any) => {
        setState({
            selectedTag: tags
        })
    }

    return (
        <div>
            <AsyncSelect
                loadOptions={props.firebase.loadOptions}
                onChange={handleOnChange}
            />
            <p>Selected Tag:</p>
            {
                state.selectedTag.map((e: any) => {
                    return (
                        <li key={e.value}>
                            {e.label}
                        </li>
                    )
                })
            }
        </div>
    );
}

const Search = compose<Props, any>(
    withRouter,
    withFirebase,
)(SearchBase);

export default Search;