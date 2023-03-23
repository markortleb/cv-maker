import { Component } from "react";


class ExperienceSection extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e, keyName) {
        const inputValue = e.target.value;
        this.props.handleInputChange(inputValue, keyName);
    }

    render() {
        let experience = this.props.experience[0];

        return (
            <fieldset>
                <legend>Experience</legend>
                <input type="text" placeholder="Position" value={experience.position} onChange={ e => this.handleInputChange(e, 'position')}/>
                <input type="text" placeholder="Company" value={experience.company} onChange={ e => this.handleInputChange(e, 'company')}/>
                <input type="text" placeholder="City" value={experience.city} onChange={ e => this.handleInputChange(e, 'city')}/>
                <input type="text" placeholder="From" value={experience.from} onChange={ e => this.handleInputChange(e, 'from')}/>
                <input type="text" placeholder="To" value={experience.to} onChange={ e => this.handleInputChange(e, 'to')}/>
                <input type="text" placeholder="Description" value={experience.description} onChange={ e => this.handleInputChange(e, 'description')}/>
                <button>Delete</button>
                <button>Add</button>
            </fieldset>
        )
    }
}

export default ExperienceSection;