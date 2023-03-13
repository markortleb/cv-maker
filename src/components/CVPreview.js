import { Component } from "react";


class CVPreview extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <h3>{this.props.firstName}</h3>
            </div>
        );
    }

}


export default CVPreview;