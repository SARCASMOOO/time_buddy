import React from "react";

import classes from './HeroSection.module.scss';

function HeroSection(props: {}) {
    return (
        <section className={classes.hero__section}>
            <h2>Build interactive Time Tables</h2>
            <p>
                Easily change and plan out your semester
                so you can focus on what matters.
            </p>
        </section>
    );
}

export default HeroSection;
