import { Component } from "react";


class EducationSection extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e, keyName, index) {
        const inputValue = e.target.value;
        this.props.handleInputChange(inputValue, keyName, index);
    }

    render() {

        return (
            <fieldset>
                <legend>Education</legend>
                <ul>
                    {this.props.education.map((education, index) => {
                        return (
                            <li>
                                <div className="inputArea">
                                    <input type="text" placeholder="University" value={education.university} onChange={ e => this.handleInputChange(e, 'university', index)}/>
                                    <input type="text" placeholder="Location" value={education.location} onChange={ e => this.handleInputChange(e, 'location', index)}/>
                                    <input type="text" placeholder="Degree" value={education.degree} onChange={ e => this.handleInputChange(e, 'degree', index)}/>
                                    <input type="text" placeholder="Subject" value={education.subject} onChange={ e => this.handleInputChange(e, 'subject', index)}/>
                                    <input type="text" placeholder="From" value={education.from} onChange={ e => this.handleInputChange(e, 'from', index)}/>
                                    <input type="text" placeholder="To" value={education.to} onChange={ e => this.handleInputChange(e, 'to', index)}/>
                                </div>
                                <button type="button" onClick={e => this.props.handleDeleteButton('education', index)}>Delete</button>
                            </li>
                        );
                    })}
                </ul>
                <button type="button" onClick={e => this.props.handleAddButton('education')}>Add</button>
            </fieldset>
        )
    }
}

export default EducationSection;