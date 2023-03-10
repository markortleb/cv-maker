import { Component } from "react";


class EducationSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            university: '',
            city: '',
            degree: '',
            subject: '',
            from: '',
            to: ''
        };
    }

    render() {
        return (
            <fieldset>
                <legend>Education</legend>
                <input type="text" placeholder="University" value={this.state.university}/>
                <input type="text" placeholder="City" value={this.state.city}/>
                <input type="text" placeholder="Degree" value={this.state.degree}/>
                <input type="file" placeholder="Subject" value={this.state.subject}/>
                <input type="date" placeholder="From" value={this.state.from}/>
                <input type="date" placeholder="To" value={this.state.to}/>
                <button>Delete</button>
                <button>Add</button>
            </fieldset>
        )
    }
}

export default EducationSection;