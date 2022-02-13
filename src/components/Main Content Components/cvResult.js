import React, { Component } from "react";

class CvResult extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id='cvContainer'>
                {this.props.number}
            </div>
        )
    }
}

export default CvResult;