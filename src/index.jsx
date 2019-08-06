import React, { Component } from 'react';
import ReactDom from "react-dom";
import { Input } from 'antd';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Input placeholder={'my first react demo'} style={{width:'50%'}}></Input>
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