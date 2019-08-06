import React, { Component } from 'react';
import ReactDom from "react-dom";

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                'my first react demo'
            </div>
        )
    }
}

const render = (Component) => {
    ReactDom.render(
        <Component />,
        document.getElementById('root')
    );
};

render(App);