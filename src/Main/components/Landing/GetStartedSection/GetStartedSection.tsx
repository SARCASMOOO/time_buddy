import React from "react";

// Styles
import classes from './GetStartedSection.module.scss';

// Images
import showCaseImg from '../../../assets/images/showcase-1.png';

function GetStartedSection(props: {}) {
    return (
        <section className={classes.get_started_section}>
            <h2 className={classes.get_started_section__title}>Get started</h2>
            <img src={showCaseImg} className={classes.get_started_section__img} alt="Getting started with a time table"/>
        </section>
    );
}

export default GetStartedSection;
