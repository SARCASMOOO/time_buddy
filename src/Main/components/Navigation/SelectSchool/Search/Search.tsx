import React, {useState} from "react";
import AsyncSelect from 'react-select/async';
import Firebase, {FirebaseContext, withFirebase} from '../../../Firebase';
import {compose} from 'recompose';
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../../../constants/routes";

interface Props {
    firebase: Firebase;
    isSearchOpen: boolean;
}

const SearchBase = (props: Props) => {
    const [school, setSchool] = useState<any>({selectedSchool: []});

    const handleOnChange = (tags: any) => {
        setSchool({
            school: tags
        })
    }

    return (
        <div>
            <AsyncSelect
                loadOptions={props.firebase.loadOptions}
                onChange={handleOnChange}
            />
        </div>
    );
}

const Search = compose<Props, any>(
    withRouter,
    withFirebase,
)(SearchBase);

export default Search;