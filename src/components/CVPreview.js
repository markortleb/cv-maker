import { Component } from "react";


class CVPreview extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h3>{this.props.personalInfo.firstName}</h3>
                <h4>{this.props.personalInfo.lastName}</h4>
            </div>
        );
    }

}


export default CVPreview;