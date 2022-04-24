import React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

import './App.css';
import {Header} from './Atoms/Header';
import {Search} from "./molecules/Search";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql"
});


function App() {
  return (
      <ApolloProvider client={client}>
        <div className="App">
            <Header />
            <Search/>
        </div>
      </ApolloProvider>
  )
}

export default App;
