import { Component } from "react";


class ExperienceSection extends Component {
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
                <legend>Experience</legend>
                <ul>
                    {this.props.experience.map((experience, index) => {
                        return (
                            <li key={experience.id}>
                                <div className="inputArea">
                                    <input type="text" placeholder="Position" value={experience.position} onChange={ e => this.handleInputChange(e, 'position', index)}/>
                                    <input type="text" placeholder="Company" value={experience.company} onChange={ e => this.handleInputChange(e, 'company', index)}/>
                                    <input type="text" placeholder="City" value={experience.city} onChange={ e => this.handleInputChange(e, 'city', index)}/>
                                    <input type="text" placeholder="From" value={experience.from} onChange={ e => this.handleInputChange(e, 'from', index)}/>
                                    <input type="text" placeholder="To" value={experience.to} onChange={ e => this.handleInputChange(e, 'to', index)}/>
                                    <input type="text" placeholder="Description" value={experience.description} onChange={ e => this.handleInputChange(e, 'description', index)}/>
                                </div>
                                <button type="button" onClick={e => this.props.handleDeleteButton('experience', index)}>Delete</button>
                            </li>
                        );
                    })}
                </ul>

                <button type="button" onClick={e => this.props.handleAddButton('experience')}>Add</button>
            </fieldset>
        )
    }
}

export default ExperienceSection;