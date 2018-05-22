import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import axios from 'axios';


import logo from './logo.svg';

import './App.css';

class App extends Component {
  state = {
    users: [],
    tabIndex: 0
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ users: res.data.users }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    // Change the server side URL based on your backend
    // Keep apiUrl in constants file
    const response = await axios.get(`http://localhost:5000/api/fetchusers`)
      .then(res => {
        return res
      })
     
      return response
  };

  render() {
    const user_data = this.state.users.map((user)=> {
      return {
        id: user.id,
        name: user.username,
        task: user.Tasks.length
      }
    })



  const columns = [
    {
    Header: 'ID',
    accessor: 'id'
  },{
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Task Count',
    accessor: 'task'
  }]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <ReactTable
            data={user_data}
            columns={columns}
            defaultPageSize={10}
          />
      </div>
    );
  }
}

export default App;
