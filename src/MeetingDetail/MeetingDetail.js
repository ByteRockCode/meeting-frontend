import React from 'react';
import gql from 'graphql-tag';

import {Component} from 'react';
import {graphql} from 'react-apollo';
import moment from 'moment'
import 'moment/locale/es'
import {NavLink} from 'react-router-dom';
import {Route} from 'react-router-dom';

import Content from '../Content/Content'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

import './MeetingDetail.css';


function MeetingDetail({ data: { meeting, refetch } }) {
    if (!meeting) return null;

    moment.locale('es')

    return (
        <div className="MeetingDetail">
            <Header title="Reunión" back="/"/>

            <Navbar>
                <NavLink activeclassname="active" to={`/${meeting.id}`} exact>Info</NavLink>
                <NavLink activeclassname="active" to={`/${meeting.id}/acuerdos`}>Acuerdos</NavLink>
                <NavLink activeclassname="active" to={`/${meeting.id}/compromisos`}>Compromisos</NavLink>
            </Navbar>

            <Content>
                <Route exact path="/:meetingId" render={() => <Info meeting={meeting} />} />
                <Route path="/:meetingId/acuerdos" render={() => <Agreements meeting={meeting} />} />
                <Route path="/:meetingId/compromisos" render={() => <Compromises meeting={meeting} />} />
            </Content>
        </div>
    );
}


class Info extends Component {
    render() {
        let meeting = this.props.meeting;

        return (
            <div className="info">

                <div>
                    <div className="label">Motivo</div>
                    <div className="value">{meeting.motive}</div>
                </div>

                <br />

                <div>
                    <div className="label">Inicio</div>
                    <div className="value">{moment(meeting.fromDatetime).format('LLLL')}</div>
                </div>

                <br />

                <div>
                    <div className="label">Termino</div>
                    <div className="value">{moment(meeting.toDatetime).format('LLLL')}</div>
                </div>

                <br />

                <div>
                    <div className="label">Compañías</div>
                    <div className="value">
                        <ul>
                            {meeting.companies.map((company, i) => {
                                return <li key={i}>{company.name}</li>
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}


class Agreements extends Component {
    render() {
        let meeting = this.props.meeting;

        return (
            <div className="ul">
                {meeting.agreements.map((agreement, i) => {
                    return <input className="li" key={i} placeholder="Acuerdo" value={agreement.description} />
                })}
                <input className="li" placeholder="+ agregar acuerdo" />
            </div>
        )
    }
}


class Compromises extends Component {
    render() {
        let meeting = this.props.meeting;

        return (
            <div className="ul">
                {meeting.compromises.map((compromise, i) => {
                    return <input className="li" key={i} placeholder="Compromiso" value={compromise.description} />
                })}
                <input className="li" placeholder="+ agregar compromiso" />
            </div>
        )
    }
}


export default graphql(gql`
    query MeetingDetailQuery {
        meeting(id: 4) {
            id
            motive
            companies {
                name
            }
            fromDatetime
            toDatetime
            agreements {
                id
                description
            }
            compromises {
                id
                description
            }
        }
    }
`)(MeetingDetail);
