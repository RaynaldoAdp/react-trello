var React = require('react');
var ReactDOM = require('react-dom');

var ListContainer = require('./list-container');


var Board = function(prop) {
    return (
        <div className="board">
        <div className="title">{prop.title}</div>
    	<div className="lists">{prop.lists}</div>
            <ListContainer />
            <ListContainer />
            <ListContainer />
        </div>
    );
};

module.exports = Board;