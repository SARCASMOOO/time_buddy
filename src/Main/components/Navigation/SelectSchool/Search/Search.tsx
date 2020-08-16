import React, {useState} from "react";
import AsyncSelect from 'react-select/async';
import Firebase, {FirebaseContext, withFirebase} from '../../../Firebase';
import {compose} from 'recompose';
import { withRouter } from "react-router-dom";
import * as ROUTES from "../../../../constants/routes";

interface Props {
    firebase: Firebase;
    isSearchOpen: (isOpen: boolean) => void;
    setSchool: any;
    school: any;
}

const SearchBase = (props: Props) => {

    const handleOnChange = (tags: any) => {
        props.setSchool({
            school: tags
        })

        props.isSearchOpen(false);
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