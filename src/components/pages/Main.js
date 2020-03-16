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
import List from './List'

class Main extends Component {

  static contextType = ParentContext;

  render() {
    const { data } = this.context
    let recoverAll = data.reduce((total, recover) => total + recover.recovered, 0)
    let confirm = data.reduce((total,confirmed) => total + confirmed.confirmed, 0)
    let dead = data.reduce((total, death) => total + death.deaths, 0)

    return (
      <>
        <MainContainer fluid='fluid'>
          <Row>
            <Grid size='4'>
              <Indonesia />
            </Grid>
            <Grid size='4'>
              <World 
                recoverAll={recoverAll}
                confirm={confirm}
                dead={dead}
              />
            </Grid>
            <Grid size='4'>
              <Report />
            </Grid>
          </Row>
        </MainContainer>
        <MainContainer>
          <Row>
            <Grid size='12'>
              <List data={data} />
            </Grid>
            <Grid size='4'>
              <Rules />
            </Grid>
          </Row>
        </MainContainer>
      </>
    )
  }
}

export default Main
