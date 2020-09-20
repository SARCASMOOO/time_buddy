import React from "react";

// Images
import showCaseImg from '../../../assets/images/showcase-1.png';

// Styles
import classes from './MoreInfoSection.module.scss';


function MoreInfoSection(props: {}) {
    return (
        <section className={classes.more_info_section__back_ground}>
            <h2 className={classes.more_info_section__title}>Build Highly Interactive Time Tables</h2>
            <img src={showCaseImg} className={classes.more_info_section__img} alt="Background of productivity."/>
            <img src={showCaseImg} className={classes.more_info_section__img} alt="Background of productivity."/>
            <img src={showCaseImg} className={classes.more_info_section__img} alt="Background of productivity."/>
        </section>
    );
}

export default MoreInfoSection;
