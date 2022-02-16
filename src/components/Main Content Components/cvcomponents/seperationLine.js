import React, { Component } from "react";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 15
        }}
    />
);

export default ColoredLine;