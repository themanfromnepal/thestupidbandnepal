import React from 'react'
import './band.css'
import {BsInstagram} from 'react-icons/bs'

import videobg from './assets/nischal.mp4'

import imgLemmy from './images/Lemmy-02.jpg'

const Band = () => {

  let data =[
    {
      id:1,
      name: 'Adarsh Gurung',
      info: 'Adarsh Gurung, born in Chitwan, is a vocalist and lead guitarist in the band.', 
      imgSrc: imgLemmy,
      insta: '_ghale_77'
    },
    {
      id:2,
      name: 'Akash Phago',
      info: 'Akash Phago, born in Ilam, is a vocalist and lead drummer in the band.', 
      imgSrc: imgLemmy,
      insta: 'akash_phago'
    },
    {
      id:3,
      name: 'Nishan Roka Magar',
      info: 'Nishan Roka Magar, born in Myagdi, is a vocalist and bassist in the band.', 
      imgSrc: imgLemmy,
      insta: 'nishighan'
    },
    {
      id:4,
      name: 'Resham Pun',
      info: 'Resham Pun, born in Myagdi, is the manager of the band.', 
      imgSrc: imgLemmy,
      insta: 'resham'
    },
  ]

  return (
    <div>
        <div className='member-container'>

          

          <video src={videobg} loop autoPlay muted/>


          <div className='content'>
            {data.map((item, index)=>{
              return(
                <div className='member' key={index}>
                  <h2>{item.name}</h2>

                  <div className='member-bio'>
                    <p>{item.info}</p>
                  </div>

                  <div className='member-img'>
                    <img src={item.imgSrc} />
                  </div>

                  <div className='member-link'>
                    <BsInstagram />
                    <a href={`https://www.instagram.com/${item.insta} `}>
                    <p>@{item.insta}</p>
                    </a>
                  </div>

                </div>
              )

            })}
              
          </div>

          
        </div>
    </div>
  )
}

export default Band