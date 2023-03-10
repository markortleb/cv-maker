import { Component } from "react";


class ExperienceSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: '',
            company: '',
            city: '',
            from: '',
            to: ''
        };
    }

    render() {
        return (
            <fieldset>
                <legend>Experience</legend>
                <input type="text" placeholder="Position" value={this.state.position}/>
                <input type="text" placeholder="Company" value={this.state.company}/>
                <input type="text" placeholder="City" value={this.state.city}/>
                <input type="date" placeholder="From" value={this.state.from}/>
                <input type="date" placeholder="To" value={this.state.to}/>
                <button>Delete</button>
                <button>Add</button>
            </fieldset>
        )
    }
}

export default ExperienceSection;