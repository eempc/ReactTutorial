import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // App.js is being imported from here
import * as serviceWorker from './serviceWorker';
import globe from './images/browser-icon.png'; // How to import a static image
import { isUserWhitespacable } from '@babel/types';

ReactDOM.render(<App />, document.getElementById('root'));

const user = {
    firstName: 'Ralph',
    lastName: 'Perez',
    avatarUrl: '/avatars/test1.png'
}

const name = 'Test name';
const element = <h1>Hello! {name} {2+2}</h1>;
const element2 = <h2>{formatName(user)}</h2>;
const element3 = getGreeting();
const iconElement = <img src={globe} className="App-logo"></img>;
const avatar = <img src={user.avatarUrl}></img>;
const childElements = (
    <div>
        <h1>test</h1>
        <h2>test2</h2>
    </div>
);

const condition = (
   <div>{ 5 > 1 && <p>Test</p> }</div>
);


const arrayList = [ 'apple', 'banana', 'clementine' ];
const arrayListMapped = arrayList.map((item, i) =>
    <li key={'abc_' + i}>{item}</li>
);
// first argument, item, refers to the list's item, and i is a counter similar to 'for(int i = 0)' for use in a key identifier

// render the above array
ReactDOM.render(<ul>{arrayListMapped}</ul>, document.getElementById('main'));

// One render per element

//ReactDOM.render(element, document.getElementById('root'));

ReactDOM.render(element3, document.getElementById('section'));
ReactDOM.render(iconElement, document.getElementById('icon'));
ReactDOM.render(avatar, document.getElementById('avatar'));
ReactDOM.render(childElements, document.getElementById('childElements'));

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1> Hello Stranger</h1>;
}

// Auto updating clock

function tick() {
    const element = <h2>It is {new Date().toLocaleTimeString()}.</h2>;
    ReactDOM.render(element, document.getElementById('clock'));
}

setInterval(tick, 1000);

// creating an "element"-like thing and rendering that instead

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element4 = <Welcome name="Sara"/>;

ReactDOM.render(element4, document.getElementById('prop-test'));

function Hello() {
    return (
        <div>
            <Welcome name="Bob" />
            <Welcome name="Lil" />
        </div>
    );
}

ReactDOM.render(<Hello />, document.getElementById('prop-test2'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
