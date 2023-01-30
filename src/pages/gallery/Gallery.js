import React, { useState } from 'react'
import './gallery.css'
import {MdClose} from 'react-icons/md'

//#region ------------ IMAGES---------
import img1 from './images/pic_1.jpg'
import img2 from './images/pic_2.jpg'
import img3 from './images/pic_3.jpg'
import img4 from './images/pic_4.jpg'
import img5 from './images/pic_5.jpg'
import img6 from './images/pic_6.jpg'
import img7 from './images/pic_7.jpg'
import img8 from './images/pic_8.jpg'
import img9 from './images/pic_9.jpg'
import img10 from './images/pic_10.jpg'
import img11 from './images/pic_11.jpg'
import img12 from './images/pic_12.jpg'
import img13 from './images/pic_13.jpg'
import img14 from './images/pic_14.jpg'
import img15 from './images/pic_15.jpg'
import img16 from './images/pic_16.jpg'
import img17 from './images/pic_17.jpg'
import img18 from './images/pic_18.jpg'
import img19 from './images/pic_19.jpg'
import img20 from './images/pic_20.jpg'
import img21 from './images/pic_21.jpg'
import img22 from './images/pic_22.jpg'
import img23 from './images/pic_23.jpg'
// #endregion ------------ IMAGES ---------

const Gallery = () => {

  let data =[
    {
      id: 1,
      imgSrc: img1
    },
    {
      id: 2,
      imgSrc: img2
    },
    {
      id: 3,
      imgSrc: img3
    },
    {
      id: 4,
      imgSrc: img4
    },
    {
      id: 5,
      imgSrc: img5
    },
    {
      id: 6,
      imgSrc: img6
    },
    {
      id: 7,
      imgSrc: img7
    },
    {
      id: 8,
      imgSrc: img8
    },
    {
      id: 9,
      imgSrc: img9
    },
    {
      id: 10,
      imgSrc: img10
    },
    {
      id: 11,
      imgSrc: img11
    },
    {
      id: 12,
      imgSrc: img12
    },
    {
      id: 13,
      imgSrc: img13
    },{
      id: 14,
      imgSrc: img14
    },
    {
      id: 15,
      imgSrc: img15
    },
    {
      id: 16,
      imgSrc: img16
    },
    {
      id: 17,
      imgSrc: img17
    },
    {
      id: 18,
      imgSrc: img18
    },
    {
      id: 19,
      imgSrc: img19
    },
    {
      id: 20,
      imgSrc: img20
    },
    {
      id: 21,
      imgSrc: img21
    },
    {
      id: 22,
      imgSrc: img22
    },
    {
      id: 23,
      imgSrc: img23
    }
  ]

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) =>{
      setTempImgSrc(imgSrc);
      setModel(true);
  }

  return (
    <>
      {console.log('Actual window innerwidth = ',window.innerWidth)}
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} />
        <MdClose onClick={()=>setModel(false)} />
      </div>

      <div className='gallery'>
        {data.map((item, index)=>{
          return(
            <div className='pics' key={index}
             onClick={()=>getImg(item.imgSrc)}>
                <img src={item.imgSrc} />
            </div>
          )

        })}
      
      </div>
    </>

    
  )
}

export default Gallery
