import React, { Component } from 'react'
import MyCard from '../ui/MyCard'
import Title from '../ui/Title'
import { ParentContext } from '../../myContext'
import { Row } from 'react-bootstrap'
import Grid from '../ui/Grid'

class Indonesia extends Component {

  static contextType = ParentContext

  state = {
    iso3: 'IDN',
    loading: true
  }
  
  componentDidMount (){
    this.setState({loading:false})
  }
  render() {

    const { dataIndo } = this.context
    let data = dataIndo(this.state.iso3)
    
    if(!data) {
      return(
        <MyCard bg='dark'>
        <Title title='Data Covid - 19 di indonesia' paragraph='p' />
        <Row>
          <Grid size='12'>
            loading...
          </Grid>
        </Row>
      </MyCard>
      )
    }

    const {confirmed,recovered,deaths} = data

    return (
      <MyCard bg='dark'>
        <Title title='Data Covid - 19 di indonesia' paragraph='p' />
        <Row>
          <Grid size='7'>
            tes
          </Grid>
          <Grid size='5'>
            <p className='mb-0'>{confirmed}</p>
            <p className='text-warning'>Dikonfirmasi</p>
            <p className='mb-0'>{recovered}</p>
            <p className='text-success'>Sembuh</p>
            <p className='mb-0'>{deaths}</p>
            <p className='text-danger'>Meninggal</p>
          </Grid>
        </Row>
      </MyCard>
    )
  }
}

export default Indonesia
