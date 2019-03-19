import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import CATEGORIES from '../util/categories'
function ChoiceListItem(props) {
    console.log(props.text)
    const span = props.isVisible ? <span> - {props.votes || 0} votes</span> : null
    return (
        <span>{props.text} {span}</span>
    );
}

class PollListItem extends React.Component {
    constructor(props) {
        super(props);
        this.poll = this.props.data;
        this.categories = CATEGORIES;
    }

    render() {
        // TODO: change isVisible to depend on whether or not you voted
        const choicesList = (this.poll.choices || []).map((choice) =>
            <li><ChoiceListItem text={choice.text} votes={choice.votes} isVisible={false}/></li>
        );

        return (
            <div className="poll-card">
                <Link to={`/dashboard/polls/${this.poll.id}`}>
                    <h1>{this.poll.title}</h1>
                </Link>

                <h3>Category: {this.categories[this.poll.category]}</h3>
                <p>{this.poll.description}</p>
                <label>Choices:</label>
                <ul>{choicesList}</ul>
                <p>Expire{(new Date() >= this.poll.end_date ? 'd' : 's')} on: {moment(new Date(this.poll.end_date)).format("YYYY-MM-DD")}</p>
            </div>
        );
    }
}

export default PollListItem;
