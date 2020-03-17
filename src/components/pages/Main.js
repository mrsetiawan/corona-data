import React, { Component } from 'react'
import { Row,Col } from 'react-bootstrap'
import { ParentContext } from '../../myContext'
import Grid from '../ui/Grid'
import MainContainer from '../ui/MainContainer'
// import MyCard from '../ui/MyCard'
// import MyChar from '../ui/MyChar'
// import Title from '../ui/Title'
import World from './World'
import Indonesia from './Indonesia'
import Rules from './Rules'
// import Report from './Report'
import List from './List'

class Main extends Component {

  static contextType = ParentContext;

  state = { iso3: 'IDN'}

  render() {
    const { data, dataIndo } = this.context
    let recoverAll = data.reduce((total, recover) => total + recover.recovered, 0)
    let confirm = data.reduce((total, confirmed) => total + confirmed.confirmed, 0)
    let dead = data.reduce((total, death) => total + death.deaths, 0)

    let idn = dataIndo(this.state.iso3)

    if (!idn) {
      return (
        <Row className="justify-content-md-center">
          <Col md="auto">
            <p>Loading data......</p>
          </Col>
        </Row>
      )
    }

    const {confirmed, recovered, deaths} = idn

    return (
      <>
        <MainContainer fluid='fluid'>
          <Row>
            <Grid size='6'>
              <Indonesia 
                confirmed={confirmed}
                recovered={recovered}
                deaths={deaths}
              />
            </Grid>
            <Grid size='6'>
              <World
                confirmed={recoverAll}
                recovered={confirm}
                deaths={dead}
              />
            </Grid>
            {/* <Grid size='4'>
              <Report />
            </Grid> */}
            <Grid size='5'>
              <Rules />
            </Grid>
            <Grid size='7'>
              <List data={data} />
            </Grid>
          </Row>
        </MainContainer>
        {/* <MainContainer>
          <Row>
            <Grid size='8'>
              <List data={data} />
            </Grid>
            <Grid size='4'>
              <Rules />
            </Grid>
          </Row>
        </MainContainer> */}
      </>
    )
  }
}

export default Main
