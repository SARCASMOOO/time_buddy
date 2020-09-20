import React from "react";
import image from '../../../assets/images/land-sm.jpg';

import classes from './ProductivitySection.module.scss';

function ProductivitySection(props: {}) {
    return (
        <section className={classes.productivity__back_ground}>
            <img src={image} className={classes.productivity__img} alt="Background image of productivity."/>
        </section>
    );
}

export default ProductivitySection;
