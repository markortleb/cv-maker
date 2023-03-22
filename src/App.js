import './App.css';
import NavigationBar from "./components/NavigationBar";
import MainForm from "./components/MainForm";
import CVPreview from "./components/CVPreview";
import {Component} from "react";
import initEmpty from "./utility/initEmpty"
import initExample from "./utility/initExample";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = initExample();

        this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
        this.handleExperienceChange = this.handleExperienceChange.bind(this);
        this.handleEducationChange = this.handleEducationChange.bind(this);
    }

    handlePersonalInfoChange(inputValue, keyName) {
        let curState = this.state;
        curState['personalInfo'][keyName] = inputValue;
        this.setState(curState);
    }

    handleExperienceChange(inputValue, keyName) {
        let curState = this.state;
        curState['experience'][0][keyName] = inputValue;
        this.setState(curState);
    }

    handleEducationChange(inputValue, keyName) {
        let curState = this.state;
        curState['education'][0][keyName] = inputValue;
        this.setState(curState);
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <MainForm
                    personalInfo={this.state.personalInfo}
                    handlePersonalInfoChange={this.handlePersonalInfoChange}
                    experience={this.state.experience}
                    handleExperienceChange={this.handleExperienceChange}
                    education={this.state.education}
                    handleEducationChange={this.handleEducationChange}
                />
                <CVPreview personalInfo={this.state.personalInfo} />
            </div>
        );
    }
}


export default App;
