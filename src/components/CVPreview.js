import { Component } from "react";
import PersonalInfoPreview from "./PersonalInfoPreview";


class CVPreview extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <PersonalInfoPreview personalInfo={this.props.personalInfo}/>
            </div>
        );
    }

}


export default CVPreview;