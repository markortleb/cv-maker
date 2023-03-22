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
                <input type="text" placeholder="First Name" value={personalInfo.firstName} onChange={ e => this.handleInputChange(e, 'firstName')}/>
                <input type="text" placeholder="Last Name" value={personalInfo.lastName} onChange={ e => this.handleInputChange(e, 'lastName')}/>
                <input type="text" placeholder="Title" value={personalInfo.title} onChange={ e => this.handleInputChange(e, 'title')}/>
                <input type="file" placeholder="Photo" value={personalInfo.photo} onChange={ e => this.handleInputChange(e, 'photo')}/>
                <input type="text" placeholder="Address" value={personalInfo.address} onChange={ e => this.handleInputChange(e, 'address')}/>
                <input type="tel" placeholder="Phone Number" value={personalInfo.phoneNumber} onChange={ e => this.handleInputChange(e, 'phone')}/>
                <input type="email" placeholder="Email" value={personalInfo.email} onChange={ e => this.handleInputChange(e, 'email')}/>
                <input type="text" placeholder="Description" value={personalInfo.description} onChange={ e => this.handleInputChange(e, 'description')}/>
            </fieldset>
        )
    }
}

export default PersonalInfoSection;