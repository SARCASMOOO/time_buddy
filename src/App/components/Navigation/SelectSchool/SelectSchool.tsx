import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import Search from './Search/Search';

function getModalStyle() {
    const top = 30;
    return {
        top: `${top}%`,
        margin:'auto',
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

export default function SelectSchool() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

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
            <Search/>
        </div>
    );

    return (
        <div>
            <Button onClick={handleOpen} style={{color: "white"}} variant="outlined">
                Select School
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                }}
            >
                {body}
            </Modal>
        </div>
    );
}