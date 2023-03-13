import './App.css';
import NavigationBar from "./components/NavigationBar";
import MainForm from "./components/MainForm";
import CVPreview from "./components/CVPreview";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <MainForm />
      <CVPreview />
    </div>
  );
}

export default App;
