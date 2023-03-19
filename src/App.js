import './App.css';
import NavigationBar from "./components/NavigationBar";
import MainForm from "./components/MainForm";
import CVPreview from "./components/CVPreview";
import {Component} from "react";


class App extends Component {
    constructor(props) {
        super(props);

        let personalInfo = {
            firstName: '',
            lastName: '',
            title: '',
            photo: '',
            address: '',
            phoneNumber: '',
            email: '',
            description: ''
        };

        this.state = {
            personalInfo
        }

        this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
    }

    handlePersonalInfoChange(inputValue, keyName) {
        let curState = this.state;
        curState['personalInfo'][keyName] = inputValue;
        this.setState(curState);
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <MainForm handlePersonalInfoChange={this.handlePersonalInfoChange} />
                <CVPreview personalInfo={this.state.personalInfo} />
            </div>
        );
    }
}


export default App;
