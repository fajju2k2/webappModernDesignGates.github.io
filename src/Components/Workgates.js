import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import './Work.css';

const Workgates = () => {
  let data = [
    {
      id: 1,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178403/IMG_0958_qw5cow.jpg',
    },

    {
      id: 2,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178379/IMG_0306_bnm0nq.jpg',
    },
    {
      id: 3,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178370/IMG_0183_azxxhg.jpg',
    },
    {
      id: 4,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178380/IMG_0307_rxtxzy.jpg',
    },
    {
      id: 5,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178375/IMG_0302_djy3sg.jpg',
    },
    {
      id: 6,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178366/IMG_0150_ttdras.jpg',
    },
    {
      id: 7,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178365/IMG_0151_h1to8i.jpg',
    },
    {
      id: 8,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178350/IMG_0077_cukgjd.jpg',
    },
    {
      id: 9,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178349/20150702_122411_hsjojg.jpg',
    },
    {
      id: 10,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1672578557/Photo0090_vpe2qm.jpg',
    },
    {
      id: 11,
      imgSrc:
        'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178349/IMG_0130_zx40ir.jpg',
    },
    {
      id:12,
      imgSrc:'https://res.cloudinary.com/dw1rifcgf/image/upload/v1673178395/IMG_0352_qzim2y.jpg',
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
        <h1> GATES </h1>
        <p>
          Aluminum configuration doors framework is rely upon client's interest
          plan and assembling. This aluminum entryway and window frame are
          various execution is incredible fluctuated door types to meet
          different building needs consultative fashioners can turn out each of
          your choices during your free counsel. You give an image of your space
          and can perceive how your picked present day flight of stairs fits
          with its environmental factors.
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
          window.location.href = "/GatesGallery"
        }}>
          <h4> View More Design in Gates </h4>
        </button>
      </div>
    </>
  );
};

export default Workgates;
