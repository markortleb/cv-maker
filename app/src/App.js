
import NavigationBar from "./components/NavigationBar";
import MainForm from "./components/form/MainForm";
import CVPreview from "./components/preview/CVPreview";
import {Component} from "react";
import initEmpty from "./utility/initEmpty"
import initExample from "./utility/initExample";
import './styles/App.css';
import html2canvas from "html2canvas";
import {jsPDF} from 'jspdf';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = initEmpty();

        this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
        this.handleExperienceChange = this.handleExperienceChange.bind(this);
        this.handleEducationChange = this.handleEducationChange.bind(this);

        this.handleDeleteButton = this.handleDeleteButton.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);

        this.handleSaveAsPDFButton = this.handleSaveAsPDFButton.bind(this);
        this.handleLoadExampleButton = this.handleLoadExampleButton.bind(this);
        this.handleResetButton = this.handleResetButton.bind(this);
    }

    handlePersonalInfoChange(inputValue, keyName) {
        let curState = this.state;
        curState['personalInfo'][keyName] = inputValue;
        this.setState(curState);
    }

    handleExperienceChange(inputValue, keyName, index) {
        let curState = this.state;
        curState['experience'][index][keyName] = inputValue;
        this.setState(curState);
    }

    handleEducationChange(inputValue, keyName, index) {
        let curState = this.state;
        curState['education'][index][keyName] = inputValue;
        this.setState(curState);
    }

    handleDeleteButton(arrayName, index) {
        let curState = this.state;
        curState[arrayName].splice(index, 1);
        this.setState(curState);
    }

    handleAddButton(arrayName) {
        let curState = this.state;
        let blankState = initEmpty();
        curState[arrayName].push(blankState[arrayName][0]);
        this.setState(curState);
    }

    handleSaveAsPDFButton() {
        const divToSave = document.querySelectorAll('.CVPreview')[0];
        html2canvas(divToSave).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save("myCV.pdf");
        });
    }

    handleLoadExampleButton() {
        let curState = initExample();
        this.setState(curState);
    }

    handleResetButton() {
        let curState = initEmpty();
        this.setState(curState);
    }

    render() {
        return (
            <div className="App">
                <NavigationBar />
                <MainForm
                    personalInfo={this.state.personalInfo}
                    handlePersonalInfoChange={this.handlePersonalInfoChange}
                    experience={this.state.experience}
                    handleExperienceChange={this.handleExperienceChange}
                    education={this.state.education}
                    handleEducationChange={this.handleEducationChange}
                    handleDeleteButton={this.handleDeleteButton}
                    handleAddButton={this.handleAddButton}
                    handleSaveAsPDFButton={this.handleSaveAsPDFButton}
                    handleLoadExampleButton={this.handleLoadExampleButton}
                    handleResetButton={this.handleResetButton}
                />
                <CVPreview
                    personalInfo={this.state.personalInfo}
                    experience={this.state.experience}
                    education={this.state.education}
                />
            </div>
        );
    }
}


export default App;
