import { Component } from "react";
import "../../styles/preview/ExperiencePreview.css";


class ExperiencePreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="ExperiencePreview">
                <h3>Work Experience</h3>

                <ul>
                    {this.props.experience.map(experience => {
                        return (
                            <li key={experience.id}>
                                <div className="top">
                                    <div className="left">
                                        <span className="position">{experience.position}</span>
                                        <span className="company">{experience.company}</span>
                                    </div>
                                    <div className="right">
                                        <span className="city">{experience.city}</span>
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
                        );
                    })}
                </ul>
            </div>
        );
    }
}


export default ExperiencePreview;