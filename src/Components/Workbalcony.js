import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import './Work.css';

const Workbalcony = () => {
  let data = [
    {
      id: 1,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305138/IMG_0290_dqpbhj.jpg',
    },

    {
      id: 2,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305137/IMG_0291_jmoqk9.jpg',
    },
    {
      id: 3,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305135/IMG_0289_hnh9rj.jpg',
    },
    {
      id: 4,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305132/IMG_0102_icr1cn.jpg',
    },
    {
      id: 5,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305107/IMG_0024_qpomrn.jpg',
    },
    {
      id: 4,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305103/20150805_105802_wwqlg0.jpg',
    },
    {
      id: 6,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305099/1_iwxnby.jpg',
    },
    {
      id: 7,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305099/4_rxxefz.jpg',
    },
    {
      id: 8,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305098/18_x4leov.jpg',
    },
    {
      id: 9,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673303648/hero_wlkkws.jpg',
    },
    {
      id: 10,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305099/10_t3xjsn.jpg',
    },
    {
      id:12,
      imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673305098/22_xcgbr1.jpg',
    }
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModel(true);
  };
  return (
    <>
      <div className="about-section1">
        <h1> Balcony And Designs </h1>
        <p>
          Aluminum plan overhang framework is rely upon client's interest plan
          and production. This aluminum gallery and edge are various execution
          is amazing shifted gallery types to meet different structural
          requirements consultative creators can turn out every one of your
          choices during your free discussion. You give an image of your space
          and can perceive how your picked current flight of stairs fits with
          its environmental elements
        </p>
      </div>
      <div id="gates">
        <div className={model ? 'model open' : 'model'}>
          <img src={tempimgSrc} alt="" />
          <CloseOutlined onClick={() => setModel(false)} />
        </div>
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} style={{ width: '100%', maxHeight: '350px' }} alt="img" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="about-section">
        <button className="button button1" onClick={()=>{
          window.location.href = "/BalconyGallery"
        }}>
          <h4> View More Design in Balconies </h4>
        </button>
      </div>
    </>
  );
};

export default Workbalcony;
