import { Component } from "react";


class PersonalInfoSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            photo: '',
            address: '',
            phoneNumber: '',
            email: '',
            description: ''
        };
    }

    render() {
        return (
            <fieldset>
                <legend>Personal Information</legend>
                <input type="text" placeholder="First Name" value={this.state.firstName}/>
                <input type="text" placeholder="Last Name" value={this.state.lastName}/>
                <input type="text" placeholder="Title" value={this.state.title}/>
                <input type="file" placeholder="Photo" value={this.state.photo}/>
                <input type="text" placeholder="Address" value={this.state.address}/>
                <input type="tel" placeholder="Phone Number" value={this.state.phoneNumber}/>
                <input type="email" placeholder="Email" value={this.state.email}/>
                <input type="text" placeholder="Description" value={this.state.description}/>
            </fieldset>
        )
    }
}

export default PersonalInfoSection;