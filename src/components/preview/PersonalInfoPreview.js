import { Component } from "react";
import "../../styles/preview/PersonalInfoPreview.css";


class PersonalInfoPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let personalInfo = this.props.personalInfo;

        return (
            <div className="PersonalInfoPreview">
                <div className="top">
                    <div className="left">
                        <h1 className="name">{`${personalInfo.firstName} ${personalInfo.lastName}`}</h1>
                        <h2 className="title">{personalInfo.title}</h2>
                    </div>
                    <div className="right">
                        <span className="phoneNumber">{personalInfo.phoneNumber}</span>
                        <span className="email">{personalInfo.email}</span>
                        <span className="website">{personalInfo.website}</span>
                        <span className="location">{personalInfo.location}</span>
                    </div>
                </div>
                <div className="bottom">
                    <span className="description">{personalInfo.description}</span>
                </div>
            </div>
        );
    }
}


export default PersonalInfoPreview;