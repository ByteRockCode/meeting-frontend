import React from 'react';
import gql from 'graphql-tag';

import {Component} from 'react';
import {graphql} from 'react-apollo';

import Header from '../Header/Header'

import './MeetingList.css';


function MeetingList({ data: { meetings, refetch } }) {
    return (
        <div className="MeetingList">
            <Header title="Reuniones" />

            {meetings && meetings.map((meeting, key) => <MeetingSummary key={key} {...meeting} />)}
        </div>
    );
}


class MeetingSummary extends Component {
    render() {
        let fromDatetime = new Date(this.props.fromDatetime)
        // let toDatetime = new Date(this.props.toDatetime)

        return (
            <div className="meeting">
                <div className="meeting__motive">
                    {this.props.motive}
                </div>
                <div className="meeting__from">
                    <div className="meeting__from__date">{fromDatetime.toLocaleDateString()}</div>
                    <div className="meeting__from__time">{fromDatetime.toLocaleTimeString()}</div>
                </div>
                {/*
                <div className="meeting__to">
                    <p>{toDatetime.toLocaleDateString()}</p>
                    <p>{toDatetime.toLocaleTimeString()}</p>
                </div>
                */}
            </div>
        );
    }
}

// function TodoApp({ data: { todos, refetch } }) {
//   return (
//     <div>
//       <button onClick={() => refetch()}>Refresh</button>
//       <ul>{todos && todos.map(todo => <li key={todo.id}>{todo.text}</li>)}</ul>
//     </div>
//   );
// }


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


// export default MeetingList;
