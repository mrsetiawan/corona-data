import React, { Component } from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import { ParentContext } from '../../myContext'
import Grid from '../ui/Grid'
import MainContainer from '../ui/MainContainer'
import Footer from '../ui/Footer'
import World from './World'
import Indonesia from './Indonesia'
import Rules from './Rules'
import Himbauan from './Himbauan'
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
        <Row>
          <div style={{margin: 0,position: 'absolute'}}>
            <span>Loading ... &nbsp;&nbsp;
              {[0,1,2,3].map((idx => 
                <React.Fragment key={idx}>
                  <Spinner animation="border" />&nbsp;&nbsp;
                </React.Fragment>
              ))}
            </span>
          </div>
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
                confirmed={confirm}
                recovered={recoverAll}
                deaths={dead}
              />
            </Grid>
            <Grid size='5'>
              <Row>
                <Grid size='12'>
                  <Rules />
                  <br />
                  <Himbauan />
                </Grid>
                <Grid size='12'>
                  <Footer />
                </Grid>
              </Row>
            </Grid>
            <Grid size='7'>
              <List data={data} />
            </Grid>
          </Row>
        </MainContainer>
      </>
    )
  }
}

export default Main
