var React = require('react');
var ReactDOM = require('react-dom');



var Board = function(prop) {
    return (
        <div className="board">
        <div className="title">{prop.title}</div>
    	<div className="lists">{prop.lists}</div>
            <List />
            <List />
            <List />
        </div>
    );
};

module.exports = Board;