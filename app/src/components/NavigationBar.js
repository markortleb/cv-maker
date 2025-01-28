import { Component } from 'react';
import '../styles/NavigationBar.css'

class NavigationBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="NavigationBar">
                <h1>CV Maker</h1>
            </div>
        );
    }
}

export default NavigationBar;
