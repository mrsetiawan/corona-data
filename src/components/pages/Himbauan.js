import React from 'react'
import MyCard from '../ui/MyCard'

function Himbauan(props) {
  return (
    <>
    <MyCard bg='dark'>
      <p className='text-warning'>Himbauan kepada masyarakat</p>
      <p>Beberapa tips untuk mencegah terjadinya percepatan penyebaran virus corona.</p>

      <ul>
        <li>Ikuti himbauan dari pemerintah dan pemuka agama</li>
        <li>Tetap tenang dan berdiam diri dirumah</li>
        <li>Gunakan uang digital supaya bisa berbelanja online</li>
        <li>Keluar rumah jika benar benar ada keperluan khusus</li>
        <li>Membeli kebutuhan pokok supaya tidak sering keluar</li>
        <li>Hindari antrian jika kita sedang berada ditempat umum</li>
        <li>Tidak diperkenankan untuk nongkrok,ngopi dll</li>
        <li>Beribadah dirumah untuk semntara pandemi ini tidak apa apa</li>
        <li>Jika terjadi gejala telepon <span className='text-danger'><b>199</b></span> dan pihak dari puskesmas akan menjemput ke rumah anda</li>
      </ul>
    </MyCard>
    </>
  )
}

export default Himbauan;
