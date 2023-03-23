import { Component } from "react";
import PersonalInfoPreview from "./PersonalInfoPreview";
import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";


class CVPreview extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <PersonalInfoPreview personalInfo={this.props.personalInfo}/>
                <ExperiencePreview experience={this.props.experience} />
                <EducationPreview education={this.props.education} />
            </div>
        );
    }

}


export default CVPreview;