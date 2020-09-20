import React from "react";
import CourseSearch from "./CourseSearch/CourseSearch";
import TimeTables from "./TimeTables/TimeTables";
import {withFirebase} from "../Firebase";
import Firebase from "../Firebase";
import {UniversityContext} from "../Navigation/SelectSchool/globalState";

// Components
import HeroSection from "./HeroSection/HeroSection";
import ProductivitySection from "./ProductivitySection/ProductivitySection";
import GetStartedSection from "./GetStartedSection/GetStartedSection";
import MoreInfoSection from "./MoreInfoSection/MoreInfoSection";

// Styles
// TODO: Add this to the rest of the document but not the header.
// .container {
//     margin-top: 10vh;
//     padding: 5rem;
// }

interface Props {
    firebase: Firebase;
}

interface CourseModel {
    CRN: string;
    Credits: number;
    Days: string;
    EndTime: string;
    Instructor: string;
    Notes: string;
    Schedule: string;
    Section: string;
    "Section Information": string;
    StartTime: string;
    Status: string;
    Subject: string;
    Title: string;
    uid: string;
    index: number;
}

interface State {
    courses: CourseModel[];
    addedCourses: CourseModel[];
    loading: boolean;
}

const Landing = ({firebase}: Props) => {
    return (
        <>
            <HeroSection/>
            <GetStartedSection/>
            <ProductivitySection/>
            <MoreInfoSection/>
        </>
    );
}

export default withFirebase(Landing);