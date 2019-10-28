import React from 'react';
import ReactDOM from 'react-dom';

function out(msg: string): void {
    console.log(msg);
}

out('hello');
out(1);
const a: string = out('a');

ReactDOM.render(<p>Hello</p>, document.getElementById('app'));
