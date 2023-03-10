import { Component } from 'react';
import PersonalInfoSection from "./PersonalInfoSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

class MainForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form>
                <PersonalInfoSection />
                <ExperienceSection />
                <EducationSection />
            </form>
        )
    }
}

export default MainForm;