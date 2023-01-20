import React from 'react';
import PropTypes from 'prop-types';
// import PT from 'prop-types';

const AppNewJSX = (props) => {
    return (<div>
        <h1>Hello , {props.name} </h1>
        <h1>Hello , {props.children} </h1>
        <h1>Your Roll No : {props.roll}</h1>
    </div>);
};

AppNewJSX.propTypes = {
    name : PropTypes.string.isRequired,
    roll : PropTypes.number
    // name : PT.string
};

AppNewJSX.defaultProps = {
    name : "Mayur"
};


export default AppNewJSX;
