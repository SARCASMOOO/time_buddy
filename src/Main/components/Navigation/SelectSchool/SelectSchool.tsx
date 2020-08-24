import React, {useState} from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button} from '@material-ui/core';
import Search from './Search/Search';

function getModalStyle() {
    const top = 30;
    return {
        top: `${top}%`,
        margin: 'auto',
        width: "400px"
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

interface Props {
    db: any;
}

const SchoolContext = React.createContext({});

const SelectSchool = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [schoolSearch, setSchool] = useState<any>({selectedSchool: null});


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">School</h2>
            <p id="simple-modal-description">
                Select your school.
            </p>
            <Search isSearchOpen={setOpen} school={schoolSearch} setSchool={setSchool}/>
        </div>
    );

    let schoolText = 'Select School';
    if (schoolSearch && schoolSearch.school) {
        schoolText = schoolSearch.school.label;
    }

    return (
        <SchoolContext.Provider value={schoolText}>
            <div>
                <Button onClick={handleOpen} style={{color: "white"}} variant="outlined">
                    {schoolText}
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {body}
                </Modal>
            </div>
        </SchoolContext.Provider>
    )
        ;
}

export {SchoolContext};
export default SelectSchool;