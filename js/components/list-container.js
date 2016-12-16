var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');
var List = require('./list');

var ListContainer = React.createClass({
    getInitialState: function() {
        return {
            enteredText: '',
            cards: []
        }
    },
    onAddInputChanged: function() {
        console.log('onAddInputChanged');
        this.setState({
            enteredText: document.getElementById("writings").value
        });
    },
    onAddSubmit: function(event) {
        event.preventDefault();
        this.state.cards.push(this.state.enteredText);
    },
    render: function() {
        return <List cards = {this.state.cards} 
                onAddInputChanged = {this.onAddInputChanged}      
                onAddSubmit = {this.onAddSubmit} />
    }
});

module.exports = ListContainer;