import React from 'react';
import gql from 'graphql-tag';

import {Component} from 'react';
import {Link} from 'react-router-dom';
import {graphql} from 'react-apollo';
import moment from 'moment'
import 'moment/locale/es'

import Header from '../Header/Header'

import './MeetingList.css';


function MeetingList({ data: { meetings, refetch } }) {
    return (
        <div className="MeetingList">
            <Header title="Reuniones" option={<Link to="/">+</Link>} />

            {meetings && meetings.map((meeting, key) => <MeetingSummary key={key} {...meeting} />)}
        </div>
    );
}


class MeetingSummary extends Component {
    render() {
        let fromDatetime = moment(new Date(this.props.fromDatetime))

        return (
            <Link className="meeting" to={`/${this.props.id}`}>
                <div className="meeting__from">
                    <div className="meeting__from__day">{fromDatetime.format('DD')}</div>
                    <div className="meeting__from__month">{fromDatetime.format('MMM').replace('.', '')}</div>
                </div>
                <div className="meeting__motive">
                    {this.props.motive}
                </div>
            </Link>
        );
    }
}


export default graphql(gql`
    query meetings {
        meetings {
            id
            motive
            fromDatetime
            toDatetime
        }
    }
`)(MeetingList);
