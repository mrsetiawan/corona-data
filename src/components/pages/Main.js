import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { ParentContext } from '../../myContext'
import Grid from '../ui/Grid'
import MainContainer from '../ui/MainContainer'
import MyCard from '../ui/MyCard'
import MyChar from '../ui/MyChar'
import Title from '../ui/Title'
import World from './World'
import Indonesia from './Indonesia'
import Rules from './Rules'
import Report from './Report'

class Main extends Component {

  static contextType = ParentContext;

  render() {
    let { data } = this.context
    console.log(data)
    return (
      <MainContainer fluid='fluid'>
        <Row>
          <Grid size='6'>
            <Indonesia />
          </Grid>
          <Grid size='3'>
            <World />
          </Grid>
          <Grid size='3'>
            <Report />
          </Grid>
          <Grid size='4'>
            <Rules />
          </Grid>
          <Grid size='8'>
            <MyCard bg='dark'>
              <Title title='Data orang yang berhasil sembuh' paragraph='p' />
            </MyCard>
          </Grid>
        </Row>
      </MainContainer>
    )
  }
}

export default Main
