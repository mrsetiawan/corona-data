import React from 'react';

function ListChildren(props) {
  return (
    <div>
      <p className='mb-0'>{props.confirmed}</p>
      <p className='text-warning'>Dikonfirmasi</p>
      <p className='mb-0'>{props.recovered}</p>
      <p className='text-success'>Sembuh</p>
      <p className='mb-0'>{props.deaths}</p>
      <p className='text-danger'>Meninggal</p>
    </div>
  )
}

export default ListChildren;
