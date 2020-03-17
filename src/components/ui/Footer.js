import React from 'react';
import MyCard from '../ui/MyCard'

function Footer() {
  return (
    <MyCard bg='dark' className='text-center'>
      <p className='text-center mb-0'>
        <span>Web app by </span> <span className='text-warning'><i>@muhamadrahmatsetiawan</i></span>
      </p>
      <p className='text-center'>
        <span>API by </span> <span className='text-warning'><i>@mathdro.id</i></span>
      </p>
    </MyCard>
  )
}

export default Footer;
