import { Component } from "react";


class PersonalInfoSection extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e, keyName) {
        const inputValue = e.target.value;
        this.props.handleInputChange(inputValue, keyName);
    }

    render() {
        let personalInfo = this.props.personalInfo;

        return (
            <fieldset>
                <legend>Personal Information</legend>
                <div className="inputArea">
                    <input type="text" placeholder="First Name" value={personalInfo.firstName} onChange={ e => this.handleInputChange(e, 'firstName')}/>
                    <input type="text" placeholder="Last Name" value={personalInfo.lastName} onChange={ e => this.handleInputChange(e, 'lastName')}/>
                    <input type="text" placeholder="Title" value={personalInfo.title} onChange={ e => this.handleInputChange(e, 'title')}/>
                    <input type="text" placeholder="Location" value={personalInfo.location} onChange={ e => this.handleInputChange(e, 'location')}/>
                    <input type="tel" placeholder="Phone Number" value={personalInfo.phoneNumber} onChange={ e => this.handleInputChange(e, 'phoneNumber')}/>
                    <input type="email" placeholder="Email" value={personalInfo.email} onChange={ e => this.handleInputChange(e, 'email')}/>
                    <input type="text" placeholder="Website" value={personalInfo.website} onChange={ e => this.handleInputChange(e, 'website')}/>
                    <input type="text" placeholder="Description" value={personalInfo.description} onChange={ e => this.handleInputChange(e, 'description')}/>
                </div>
            </fieldset>
        )
    }
}

export default PersonalInfoSection;