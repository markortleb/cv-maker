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
        return (
            <fieldset>
                <legend>Personal Information</legend>
                <input type="text" placeholder="First Name" onChange={ e => this.handleInputChange(e, 'firstName')}/>
                <input type="text" placeholder="Last Name" onChange={ e => this.handleInputChange(e, 'lastName')}/>
                <input type="text" placeholder="Title" onChange={ e => this.handleInputChange(e, 'title')}/>
                <input type="file" placeholder="Photo" onChange={ e => this.handleInputChange(e, 'photo')}/>
                <input type="text" placeholder="Address" onChange={ e => this.handleInputChange(e, 'address')}/>
                <input type="tel" placeholder="Phone Number" onChange={ e => this.handleInputChange(e, 'phone')}/>
                <input type="email" placeholder="Email" onChange={ e => this.handleInputChange(e, 'email')}/>
                <input type="text" placeholder="Description" onChange={ e => this.handleInputChange(e, 'description')}/>
            </fieldset>
        )
    }
}

export default PersonalInfoSection;