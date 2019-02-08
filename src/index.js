import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Route } from 'react-router-dom';

import 'normalize.css'

import MeetingList from './MeetingList/MeetingList';
import MeetingDetail from './MeetingDetail/MeetingDetail';
import Login from './Auth/Login';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import './Card/Card.css';


const client = new ApolloClient({
    // link: new HttpLink({ uri: 'http://192.168.5.107:8000/graphql' }),
    link: new HttpLink({ uri: 'http://localhost:8000/graphql' }),
    cache: new InMemoryCache(),
});


ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <div className="wrapper">
                <Route exact path="/" component={MeetingList} />
                <Route path="/login" component={Login} />
                <Route path="/:meetingId" component={MeetingDetail} />
            </div>
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);


registerServiceWorker();
