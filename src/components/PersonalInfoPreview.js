import { Component } from "react";


class PersonalInfoPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.personalInfo.firstName}</h1>
            </div>
        )
    }
}


export default PersonalInfoPreview;