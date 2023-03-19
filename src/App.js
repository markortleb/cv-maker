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
