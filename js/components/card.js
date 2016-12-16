var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(prop) {
    return (
        <div className="card">
            <div className="card-text">{prop.text}</div>
        </div>
    );
};

module.exports = Card;