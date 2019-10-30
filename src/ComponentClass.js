import React from 'react';
import ReactDOM from 'react-dom';

class SomeComponentClass extends React.Component {
    render() {
        return <h1>Component class test</h1>
    }
}

export default SomeComponentClass; // DOn't forget to export

// Instantiation of the above component class
//<SomeComponentClass />

// Some inisght into the difference between this component class and the app.js function
// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108