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
    const d = await axios.get(`http://ec2-18-188-79-25.us-east-2.compute.amazonaws.com:5000/api/fetchusers`)
      .then(res => {
        return res
      })
     
      return d
  };

  render() {
    const user_data = this.state.users.map((user)=> {
      console.log(user)
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
