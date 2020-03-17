import React, { Component } from 'react'
import MyCard from '../ui/MyCard'
import Title from '../ui/Title'
import { Row } from 'react-bootstrap'
import Grid from '../ui/Grid'
import ListChildren from './ListChildren'
import { Pie } from 'react-chartjs-2'

class World extends Component {

  state = {
    data: {
      datasets: [
        {
          labels: ["Dikonfirmasi","Sembuh","Meninggal"],
          backgroundColor: ["#ffc107","#28a745","#dc3545"],
          data:[this.props.confirmed ,this.props.recovered,this.props.deaths],
        }
      ]
    }
  }

  render() {
    const { confirmed, recovered, deaths} = this.props

    return (
      <MyCard bg='dark'>
        <Title title='Data Covid - 19 di seluruh dunia' paragraph='p'/>
        <Row>
          <Grid size='9'>
            <Pie data={this.state.data}/>
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

export default World
