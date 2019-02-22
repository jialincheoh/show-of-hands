import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

function ChoiceListItem(props) {
    /* TODO: make inner span invisible if necessary */
    return (
        <span>{props.text}<span> - {props.votes} votes</span></span>
    );
}

class PollListItem extends React.Component {
    constructor(props) {
        super(props);
        this.poll = this.props.data;
        this.categories = [
            'ENTERTAINMENT',
            'FOOD',
            'LIFESTYLE',
            'MISCELLANEOUS',
            'SURVEY',
            'TECHNOLOGY'
        ];
    }

    render() {
        // TODO: change isVisible to depend on voting
        const choicesList = this.poll.choices.map((choice) =>
            <li><ChoiceListItem text={choice.text} votes={choice.votes} isVisible={true}/></li>
        );

        return (
            <div className="poll-card">
                <h1>{this.poll.title}</h1>
                <h3>Category: {this.categories[this.poll.category]}</h3>
                <p>{this.poll.description}</p>
                <label>Choices:</label>
                <ul>{choicesList}</ul>
                <p>Expire{(new Date() >= this.poll.end_date ? 'd' : 's')} on: {this.poll.end_date}</p>
            </div>
        );
    }
}

export default PollListItem;
