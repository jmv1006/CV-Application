import React, { Component } from "react";
import './cvModule.css'

class CVHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, email, number } = this.props;
        return(
          <div id="cvHeaderContainer">
              <div id='resumeName'>{name}</div>
              <div id='generalInfo'>{number} | {email}</div>
          </div>
        )
    }
}

export default CVHeader;