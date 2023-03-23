import { Component } from 'react';
import PersonalInfoSection from "./PersonalInfoSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import '../../styles/form/MainForm.css'

class MainForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="MainForm">
                <PersonalInfoSection
                    personalInfo={this.props.personalInfo}
                    handleInputChange={this.props.handlePersonalInfoChange}
                />
                <ExperienceSection
                    experience={this.props.experience}
                    handleInputChange={this.props.handleExperienceChange}
                />
                <EducationSection
                    education={this.props.education}
                    handleInputChange={this.props.handleEducationChange}
                />
                <button>Save as PDF</button>
                <button>Load Example</button>
                <button>Reset</button>
            </form>
        )
    }
}

export default MainForm;