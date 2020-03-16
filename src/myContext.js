import React, { Component } from 'react'
// import listController from '../controller/list'
import axios from 'axios';

const ParentContext = React.createContext();

class MyContext extends Component {

  // controller = new listController();

  state = {
    data: []
  }

  componentDidMount() {
    // this.controller.getList()
    axios.get('https://covid19.mathdro.id/api/confirmed')
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }

  render() {
    return (
      <ParentContext.Provider value={{...this.state}}>
        {this.props.children}
      </ParentContext.Provider>
    )
  }
}

export { MyContext,ParentContext }
