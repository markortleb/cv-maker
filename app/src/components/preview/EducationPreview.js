import { Component } from "react";
import "../../styles/preview/EducationPreview.css";


class EducationPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="EducationPreview">
                <h3>Education</h3>

                <ul>
                    {this.props.education.map(education => {
                        return (
                            <li key={education.id}>
                                <div className="top">
                                    <div className="left">
                                        <span className="university">{education.university}</span>
                                    </div>
                                    <div className="right">
                                        <span className="location">{education.location}</span>
                                        <div className="dateRange">
                                            <span className="from">{education.from}</span>
                                            <span className="dash">-</span>
                                            <span className="to">{education.to}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <span className="degree">{education.degree}</span>
                                    <span className="subject">{education.subject}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}


export default EducationPreview;