import { Component } from "react";


class EducationSection extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e, keyName) {
        const inputValue = e.target.value;
        this.props.handleInputChange(inputValue, keyName);
    }

    render() {
        let education = this.props.education[0];

        return (
            <fieldset>
                <legend>Education</legend>
                <input type="text" placeholder="University" value={education.university} onChange={ e => this.handleInputChange(e, 'university')}/>
                <input type="text" placeholder="Location" value={education.location} onChange={ e => this.handleInputChange(e, 'location')}/>
                <input type="text" placeholder="Degree" value={education.degree} onChange={ e => this.handleInputChange(e, 'degree')}/>
                <input type="text" placeholder="Subject" value={education.subject} onChange={ e => this.handleInputChange(e, 'subject')}/>
                <input type="text" placeholder="From" value={education.from} onChange={ e => this.handleInputChange(e, 'from')}/>
                <input type="text" placeholder="To" value={education.to} onChange={ e => this.handleInputChange(e, 'to')}/>
                <button>Delete</button>
                <button>Add</button>
            </fieldset>
        )
    }
}

export default EducationSection;