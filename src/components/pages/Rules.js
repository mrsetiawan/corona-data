import React from 'react';
import MyCard from '../ui/MyCard'

function Rules(props) {
  return (
    <>
    <MyCard bg='dark'>
      <p className='text-warning'>Cara pencegahan</p>
      <p>Beberapa tips untuk menghindari virus corona.</p>

      <ul>
        <li>Berdoa kepada allah swt,dan bertaubat</li>
        <li>Mencuci tangan dengan benar</li>
        <li>Menggunakan masker</li>
        <li>Menjaga daya tahan tubuh</li>
        <li>Tidak pergi ke negara terjangkit</li>
        <li>Minum vitamin C</li>
        <li>Hindari menyentuh mata, hidung, dan mulut dengan tangan yang tidak dicuci</li>
        <li>Konsumsi gizi seimbang, perbanyak sayur dan buah</li>
        <li>Rajin olahraga dan istirahat cukup</li>
        <li>Jangan mengonsumsi daging yang tidak masak</li>
      </ul>
    </MyCard>
    </>
  )
}

export default Rules;
