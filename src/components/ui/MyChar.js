import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';

class MyChar extends Component {

  render() {
    
    const allData = this.props.data
    return (
      <Doughnut data={allData} />
    )
  }
}

export default MyChar
