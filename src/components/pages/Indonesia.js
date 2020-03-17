import React, { Component } from 'react'
import MyCard from '../ui/MyCard'
import Title from '../ui/Title'
import { ParentContext } from '../../myContext'
import { Row } from 'react-bootstrap'
import Grid from '../ui/Grid'
import { Doughnut } from 'react-chartjs-2';
import ListChildren from './ListChildren'

class Indonesia extends Component {

  static contextType = ParentContext

  state = {
    data: {
      datasets: [
        {
          backgroundColor: ["#ffc107","#28a745","#dc3545"],
          labels: ["Dikonfirmasi","Sembuh","Meninggal"],
          data:[this.props.confirmed ,this.props.recovered,this.props.deaths],
        }
      ]
    }
  }
  render() {

    const {confirmed, recovered, deaths} = this.props 

    return (
      <MyCard bg='dark'>
        <Title title='Data Covid - 19 di indonesia' paragraph='p' />
        <Row>
          <Grid size='9'>
            <Doughnut data={this.state.data}/>
          </Grid>
          <Grid size='3'>
            <ListChildren 
              confirmed={confirmed}
              recovered={recovered}
              deaths={deaths}
            />
          </Grid>
        </Row>
      </MyCard>
    )
  }
}

export default Indonesia
