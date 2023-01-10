import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import './Work.css';



const Work = () => {
  let data = [
    {
      id: 1,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578559/Photo0461_qri5nq.jpg',
    },

    {
      id: 2,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578559/Photo0460_ixmssx.jpg',
    },
    {
      id: 3,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578558/Photo0459_y01fgl.jpg',
    },
    {
      id: 4,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578558/Photo0454_fwajub.jpg',
    },
    {
      id: 5,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578558/Photo0454_fwajub.jpg',
    },
    {
      id: 6,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578558/IMG_0937_ydbvob.jpg',
    },
    {
      id: 7,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578558/IMG_0936_wtupsl.jpg',
    },
    {
      id: 8,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578558/Photo0453_ik9usi.jpg',
    },
    {
      id: 9,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578557/Photo0452_g4qklt.jpg',
    },
    {
      id: 10,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578527/IMG_0039_uhr6ba.jpg',
    },
    {
      id: 11,
      imgSrc: 
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578519/20150707_202755_bfl6lg.jpg',
    },
    {
      id:12,
      imgSrc:
      'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578532/IMG_0038_z5euhy.jpg'
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
      <div className="about-section1" id="ourwork">
        <h1>STAIRS </h1>
        <p>
          Current spaces are characterized by their effortlessness and straight
          forward plans. Our cutting edge straight flights of stairs includes
          the spotless lines and mathematical shapes that are normally tracked
          down in these spaces. The drifting step outline considers an open
          floorplan, one more staple of present day home plan Current flights of
          stairs aren't one note in shape or plan. Paragon Steps offers open
          casing current straight flights of stairs that feature the
          effortlessness of present day plans. Our advanced winding flights of
          stairs highlight clean lines and smooth bends to complement your
          generally sharp edges. Paragon's consultative creators can turn out
          each of your choices during your free meeting. You give an image of
          your space and can perceive how your picked present day flight of
          stairs fits with its environmental elements.
        </p>
      </div>
      <div id="stairs">
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
                <img src={item.imgSrc} style={{ width: '101%' , maxHeight: '350px' }} alt="img" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="about-section">
        <button className="button button1" onClick={()=>{
          window.location.href = "/StairsGallery"
        }}>
          <h4>More Design in Stairs</h4>
        </button>
      </div>
    </>
  );
};

export default Work;
