import React, { Component } from "react";
import '../styles/Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return(
            <div id="headerContainer">
                <div id="header">CV-Builder</div>
            </div>
        )
    }
}

export default Header;