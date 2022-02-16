import React, { Component } from "react";
import reactDom from "react-dom";
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
              <div id='generalInfo'>
                  <div class='headerGeneralInfo'><span class='headerContactLabel'>email: </span>{email}</div>
                  <div class='headerGeneralInfo'><span class='headerContactLabel'>phone: </span>{number}</div>
              </div>
          </div>
        )
    }
}

export default CVHeader;