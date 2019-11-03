import React from 'react';
import ReactDOM from 'react-dom';

const someObject = {
    item1: 'cat',
    item2: 'dog',
    item3: 'mouse'
}

class SomeComponentClass extends React.Component {
    // Getter class
    get name() {
        return 'Ralph';
    }


    render() {
        const n = Math.floor(Math.random() * 10 + 1);
        // if statements can go in here before return
        return (
            <div className={someObject.item2}>
                <h1>Component class test {someObject.item1} and {n} and {this.name}</h1>
            </div>
        );
    }
}

export default SomeComponentClass; // DOn't forget to export

// Instantiation of the above component class
//<SomeComponentClass />

// Some inisght into the difference between this component class and the app.js function
// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108