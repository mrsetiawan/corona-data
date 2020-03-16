import React, { Component } from 'react'
import MyCard from '../ui/MyCard'
import Title from '../ui/Title'
import { Table } from 'react-bootstrap'

class List extends Component {

  render() {

    const { data } = this.props
    // console.log(data)
    return (
      <MyCard bg='dark'>
        <Title paragraph='p'>
          <span className='text-warning text-center'>Data negara yang terkena virus corona atau covid - 19</span>
        </Title>
        <hr />
        <Table striped bordered hover variant="dark">
          <thead>
            <tr style={{ color: 'primary !important' }}>
              <th>No</th>
              <th>Negara</th>
              <th>Provinsi</th>
              <th>Dikonfirmasi</th>
              <th>Sembuh</th>
              <th>Meninggal</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.countryRegion}</td>
                  <td>{item.provinceState ? item.provinceState: "-"}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.recovered}</td>
                  <td>{item.deaths}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>

      </MyCard>
    )
  }
}

export default List
