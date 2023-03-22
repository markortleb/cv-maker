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
                <PersonalInfoSection
                    personalInfo={this.props.personalInfo}
                    handleInputChange={this.props.handlePersonalInfoChange}
                />
                {/*<ExperienceSection />*/}
                {/*<EducationSection />*/}
                {/*<button>Save as PDF</button>*/}
                {/*<button>Load Example</button>*/}
                {/*<button>Reset</button>*/}
            </form>
        )
    }
}

export default MainForm;