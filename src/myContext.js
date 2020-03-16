import React, { Component } from 'react'
// import listController from '../controller/list'
import axios from 'axios';

const ParentContext = React.createContext();

class MyContext extends Component {

  // controller = new listController();

  state = {
    data: [],
    isLoading:true,
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

   myCountry = iso3 => {
    const data = [...this.state.data]
    let indonesia = data.find(code => code.iso3 === iso3)

    return indonesia
  }

  render() {
    return (
      <ParentContext.Provider value={{...this.state, dataIndo: this.myCountry}}>
        {this.props.children}
      </ParentContext.Provider>
    )
  }
}

export { MyContext,ParentContext }
