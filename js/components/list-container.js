var List = require('./list');

var ListContainer = React.createClass({
    getInitialState: function() {
        return {
            enteredText: '',
            cards: []
        }
    },

    onCardClick: function() {
        if (this.state.selected == 'english') {
            this.setState({
                selected: 'french'
            });
        }
        else {
            if (this.state.selected == 'french') {
                this.setState({
                    selected: 'english'
                });
            }
        }
    },
    render: function() {
        return <List ={this.state[this.state.selected]}
                     onClick={this.onCardClick} />;
    }
});