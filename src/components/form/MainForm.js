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
                    handleDeleteButton={this.props.handleDeleteButton}
                    handleAddButton={this.props.handleAddButton}
                />
                <EducationSection
                    education={this.props.education}
                    handleInputChange={this.props.handleEducationChange}
                    handleDeleteButton={this.props.handleDeleteButton}
                    handleAddButton={this.props.handleAddButton}
                />
                <button type="button">Save as PDF</button>
                <button type="button" onClick={this.props.handleLoadExampleButton}>Load Example</button>
                <button type="button" onClick={this.props.handleResetButton}>Reset</button>
            </form>
        )
    }
}

export default MainForm;