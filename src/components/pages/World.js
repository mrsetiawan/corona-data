import React, { Component } from 'react'
import MyCard from '../ui/MyCard'
import Title from '../ui/Title'
import { Row } from 'react-bootstrap'
import Grid from '../ui/Grid'

class World extends Component {

  render() {
    const { recoverAll, confirm, dead} = this.props

    return (
      <MyCard bg='dark'>
        <Title title='Data Covid - 19 di seluruh dunia' paragraph='p'/>
        <Row>
          <Grid size='7'>
            tes
          </Grid>
          <Grid size='5'>
            <p className='mb-0'>{confirm}</p>
            <p className='text-warning'>Dikonfirmasi</p>
            <p className='mb-0'>{recoverAll}</p>
            <p className='text-success'>Sembuh</p>
            <p className='mb-0'>{dead}</p>
            <p className='text-danger'>Meninggal</p>
          </Grid>
        </Row>
      </MyCard>
    )
  }
}

export default World
