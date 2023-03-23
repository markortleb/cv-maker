import { Component } from "react";


class ExperiencePreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let experience = this.props.experience[0];

        return (
            <div>
                <h3>Work Experience</h3>

                <ul>
                    <li>
                        <div className="top">
                            <div className="left">
                                <span className="position">{experience.position}</span>
                            </div>
                            <div className="right">
                                <span className="company">{experience.company}</span>
                                <div className="dateRange">
                                    <span className="from">{experience.from}</span>
                                    <span className="dash">-</span>
                                    <span className="to">{experience.to}</span>
                                </div>
                            </div>
                        </div>
                        <div className="bottom">
                            <span className="description">{experience.description}</span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}


export default ExperiencePreview;