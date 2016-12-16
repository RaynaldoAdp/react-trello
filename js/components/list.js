var React = require('react');
var ReactDOM = require('react-dom');

var Card = require('./card');

/*var List = React.createClass({
	prop : {
		title: 'lalala',
		content: 'lalala',
	},
	onAddInputChanged: function() {
		console.log('onAddInputChanged');
	},
	onAddSubmit: function(event) {
		event.preventDefault();
		console.log('onAddSubmit');
	},
	render: function(){
    	return (
        	<div className="list">
        		<div className="title">{this.prop.title}</div>
        		<div className="content">{this.prop.content}</div>
            	<Card text="lalala"/>
            	<Card text="lalala"/>
            	<Card text="lalala"/>
            	<form onSubmit={this.onAddSubmit}>
            	<input type="text" id="writings" onChange={this.onAddInputChanged} required/>
            	<button type="submit">submit</button>
            	</form>
        	</div>
    	);
    }
});*/

var List = function(props){
	var cards = [];
	for(var i = 0; i < props.cards.length; i++){
		cards.push(props.cards[i]);
	}
	return(
		<div className ="list">
			{cards}
	         <form onSubmit={props.onAddSubmit}>
            	<input type="text" id="writings" onChange={props.onAddInputChanged} required/>
           		<button type="submit">submit</button>		
           	</form>
		</div>
	);

}

module.exports = List;