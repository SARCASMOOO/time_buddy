import React from "react";

// Styles
// @ts-ignore
import classes from "./InformationSection.module.scss";

interface cardData {
    title: string,
    message: string
}

function Card({title, message}: cardData) {
    return (
        <div className={classes.card}>
            <h3 className={classes.card__title}>{title}</h3>
            <p className={classes.card__message}>
                {message}
            </p>
        </div>
    );
}

function InformationSection(props: {}) {
    const data = [
        {
            title: "Instant",
            message: "Search for courses and add to your time table all in the same place without having to switch pages."
        },
        {
            title: "Faster",
            message: "Instantly add courses to your time table without reloading the page."
        },
        {
            title: "Simple",
            message: "Interactive user experience to make building your time table easy."
        }
    ];

    return (
        <section className={classes.information_section}>
            <h2 className={classes.information_section__title}>Why use Time Buddy?</h2>
            {data.map((info) => <Card title={info.title} message={info.message}/>)}
        </section>
    );
}

export default InformationSection;
