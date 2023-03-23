import { Component } from "react";


class EducationPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let education = this.props.education[0];

        return (
            <div>
                <h3>Education</h3>

                <ul>
                    <li>
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
                        <div>
                            <span className="degree">{education.degree}</span>
                            <span className="subject">{education.subject}</span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}


export default EducationPreview;